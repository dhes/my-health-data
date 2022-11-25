import "babel-polyfill"
import smart, {
  matchTags
} from "./smart.js"
import queryString from "query-string"
import endpoints from "./endpoints.js"

console.log("window.location.href: " + window.location.href);
const redirectUri = window.location.href // url of the current page
  .replace('index.html', 'redirect.html')
  .replace(/#.*/, '')
console.log("redirectUri: " + redirectUri);

const getRegistration = (endpoint) => ({
  redirect_uri: redirectUri, // "https://dhes.github.il/my-health-data/redirect.html",
  client_id: matchTags(endpoint.tags, [
    [tags => tags.includes('smart') && tags.includes('sandbox'), 'default_client_id'],
    [tags => tags.includes('epic') && tags.includes('sandbox'), 'a1239704-a5a6-4c29-87ba-64b6f8b39c12'], // this is the registered id for fhir.epic.com my-health-data non-production 
    [tags => tags.includes('epic') && tags.includes('production'), '9f9dd593-c9e0-4935-b6ac-cff672a73139'], // this is the registered id for fhir.epic.com my-health-data production 
  ])
})

async function makeClient(fhirBaseUrl, steps = ['oauth', 'authorize', 'token']) {
  let endpoint = endpoints.filter(r => r.fhirBaseUrl === fhirBaseUrl)[0]
  let registration = getRegistration(endpoint)

  let clientState = {
    endpoint,
    registration
  }
  for (let step of steps) {
    clientState = await smart[step](clientState)
  }
  return clientState
}
console.log("endpoints[1]: " + endpoints[1]);
console.log("endpoints[1].fhirBaseUrl: " + endpoints[1].fhirBaseUrl);
// Eventually we'll have a UI
let serverPick = window.location.hash.slice(1) || 'epic'
let fhirServerToTest = {
  smart: endpoints[0].fhirBaseUrl, // smart sandbox
  // epic: endpoints[1].fhirBaseUrl, //older argonaut epic sandbox endpoint
  epic: endpoints[2].fhirBaseUrl, //newer epic test endpoint added by dan
  unity: 'https://epicfhir.unitypoint.org/ProdFHIR/api/FHIR/DSTU2/',
  uw: 'https://epicproxy.hosp.wisc.edu/FhirProxy/api/FHIR/DSTU2/',
	queens: 'https://mobileapps.queens.org/FHIR/api/FHIR/R4/'
} [serverPick]

console.log("fhirServerToTest: " + fhirServerToTest)

const fhirInteraction = async (clientState, method, url, body) => {
  const httpResponse = await fetch(url, {
    method: method,
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + clientState.tokenResponse.access_token
    }
  }).then(r => r.json())

  return httpResponse
}

const fhirGet = async (clientState, relativeUrl, queryIn = {}) => {
  const subIn = (s) => s.replace('{{patient}}', clientState.tokenResponse.patient)

  const query = Object.keys(queryIn).reduce((acc, k) => ({
    ...acc,
    [k]: subIn(queryIn[k])
  }), {})

  const url = clientState.endpoint.fhirBaseUrl + '/' + subIn(relativeUrl) + '?' + queryString.stringify(query)
  return fhirInteraction(clientState, 'GET', url)
}

console.log("url: " + url)

const fhirDrainPages = async (clientState, pageIn, maxCount = -1) => {
  const page = await pageIn
  const interim = [page]
  if (page.resourceType !== 'Bundle' || maxCount == 0)
    return interim

  const nextPageUrls = (page.link || []).filter(l => l.relation === 'next')
  if (nextPageUrls.length === 0)
    return interim

  const nextPageUrl = nextPageUrls[0].url
  const nextPage = await fhirInteraction(clientState, 'GET', nextPageUrl)
  const remainingPages = await fhirDrainPages(clientState, nextPage, maxCount - 1)

  return interim.concat(remainingPages)
}

const fhirClient = (clientState) => ({
  get: (...args) => fhirGet.apply(null, [clientState].concat(args)),
  drainPages: (...args) => fhirDrainPages.apply(null, [clientState].concat(args)),
  interaction: (...args) => fhirInteraction.apply(null, [clientState].concat(args)),
})

makeClient(fhirServerToTest).then(async c => {
  const client = fhirClient(c)
  console.log(c)

  const curl = `curl -H 'Accept: application/json' -H "Authorization: BEARER $TOKEN" `
  console.log(`
  export TOKEN=${c.tokenResponse.access_token}
  export PATIENT=${c.tokenResponse.patient}
  export ENDPOINT=${c.endpoint.fhirBaseUrl}
  ${curl} "$ENDPOINT/Patient/$PATIENT" > patient.json
  ${curl} "$ENDPOINT/Observation?category=social-history&patient=$PATIENT" > social-history.json
  ${curl} "$ENDPOINT/Observation?category=laboratory&patient=$PATIENT" > laboratory.json
  ${curl} "$ENDPOINT/Observation?category=vital-signs&patient=$PATIENT" > vital-signs.json
  ${curl} "$ENDPOINT/Condition?patient=$PATIENT" > condition.json
  ${curl} "$ENDPOINT/MedicationOrder?patient=$PATIENT" > medication-order.json
  ${curl} "$ENDPOINT/MedicationStatement?patient=$PATIENT" > medication-statement.json
  ${curl} "$ENDPOINT/AllergyIntolerance?patient=$PATIENT" > allergy-intolerance.json
  ${curl} "$ENDPOINT/Procedure?patient=$PATIENT" > procedure.json
  ${curl} "$ENDPOINT/Immunization?patient=$PATIENT" > immunization.json
  ${curl} "$ENDPOINT/DocumentReference?patient=$PATIENT" > document-reference.json

  for dr in $(cat document-reference.json  | jq '.entry[].resource | select(.resourceType == "DocumentReference") | .content[0].attachment.url' -r)
  do
    echo $dr;
    ${curl} "$dr" > document-reference-$(echo $dr | awk -F/ '{print $(NF)}').xml
  done
  `)

  const withPatient = q => [q[0], {
    ...(q[1] || {}),
    patient: '{{patient}}'
  }]

  const patientReadQueries = [
    ['Patient/{{patient}}']
  ]

  const patientSearchQueries = [
    ['Observation', {
      'category': 'laboratory'
    }],
    ['Observation', {
      'category': 'vital-signs'
    }],
    ['Observation', {
      'category': 'social-history'
    }],
    ['MedicationOrder'],
    ['MedicationStatement'],
    ['AllergyIntolerance'],
    ['Procedure'],
    ['Immunization'],
    ['DocumentReference'],
  ].map(withPatient)

  const queries = patientReadQueries.concat(patientSearchQueries)
  const pending = queries
    .map((args) => client.get(...args))
    .map(client.drainPages)

  const results = await Promise.all(pending)

  console.log("results", results)
})
