import "babel-polyfill"
import smart, {
  matchTags
} from "./smart.js"
import queryString from "query-string"
import endpoints from "./endpoints.js"

console.log("window.location.href: " + window.location.href);
const customQueryStrings = ['_type=Condition'] // DH
const urlParams = new URLSearchParams(window.location.search); // DH
console.log('urlParams: ', urlParams); // DH
console.log("urlParams.get('type'): ", urlParams.get('type')); // DH
console.log("urlParams.getAll('type'): ", urlParams.getAll('type'));
let allTypeParams = urlParams.getAll('type');
console.log("allTypeParams: ", allTypeParams);
console.log("allTypeParams.length > 0 : ", allTypeParams.length > 0)
// console.log("urlParams['qs']: ", urlParams['qs']) // DH
let customQuery = '_type=' + allTypeParams.join(',')
console.log('customQuery: ', customQuery)

let l = window.location
// const redirectUri = window.location.href // url of the current page
//   .replace('index.html', 'redirect.html') // doesn't work if you add a query
//   .replace(/#.*/, '')                     // doesn't work if you add a query
const redirectUri = l.protocol + '//' + l.hostname + l.pathname
  .replace('index.html', 'redirect.html')
console.log('redirectUri: ' + redirectUri);

const getRegistration = (endpoint) => ({
  redirect_uri: redirectUri, // "https://dhes.github.il/my-health-data/redirect.html",
  client_id: matchTags(endpoint.tags, [
    [tags => tags.includes('smart') && tags.includes('sandbox'), 'default_client_id'],
    // [tags => tags.includes('epic') && tags.includes('sandbox'), 'a1239704-a5a6-4c29-87ba-64b6f8b39c12'], // my-health-data non-production 
    // [tags => tags.includes('epic') && tags.includes('production'), '9f9dd593-c9e0-4935-b6ac-cff672a73139'], // my-health-data production 
    [tags => tags.includes('epic') && tags.includes('sandbox'), 'e2a16942-d018-4c87-a5cf-56ddd1e42b0a'], // uscdi-only-test non-production 
    [tags => tags.includes('epic') && tags.includes('production'), '38ba791f-abac-458f-85fa-c2690bd7bbe0'], // uscdi-only-test production 
    [tags => tags.includes('cerner') && tags.includes('sandbox'), 'a7da8040-9a81-4495-8867-6af33e7e80d2'], 
    [tags => tags.includes('cerner') && tags.includes('production'), 'ebef9a74-0d0b-453f-87ed-a139e2a0465a'], // using the application ID...
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

console.log("endpoints: ", endpoints)
// console.log("endpoints[1]: ", endpoints[1]);
// console.log("endpoints[1].fhirBaseUrl: " + endpoints[1].fhirBaseUrl);
// Eventually we'll have a UI
let serverPick = window.location.hash.slice(1) || 'smart'
let fhirServerToTest = {
  smart: endpoints[0].fhirBaseUrl, // smart sandbox
  // epic: endpoints[1].fhirBaseUrl, //older argonaut epic sandbox endpoint
  epicSandbox: endpoints[2].fhirBaseUrl, //newer epic sandbox endpoint added by dan
	cernerSandbox: endpoints[4].fhirBaseUrl, 
	cernerProduction: endpoints[447].fhirBaseUrl, 
  // Epic Queen's DSTU2 368
	// Epic Queen's R4 369
	// Epic HPH 446
  epicQueens: endpoints[369].fhirBaseUrl, //epic R4 production endpoint manually added to epic.json by Dan
  epicHph: endpoints[446].fhirBaseUrl //epic R4 production endpoint manually added to epic.json by Dan
  // unity: 'https://epicfhir.unitypoint.org/ProdFHIR/api/FHIR/DSTU2/',
  // uw: 'https://epicproxy.hosp.wisc.edu/FhirProxy/api/FHIR/DSTU2/'
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

	console.log("query: ", query) // DH

  // const url = clientState.endpoint.fhirBaseUrl + '/' + subIn(relativeUrl) + '?' + queryString.stringify(query) // DH this is the original. the '/' is not needed and causes errors
  // I use either my own custom query or the original patientSearchQueries. Using patientSearchQueries returns an array of arrays. 
	// I am hoping that customQueryString will return a single bundle. 
	// I want to use a querystring of _type=Condition and trigger it from a query string in href e.g. ?qs=0
	// customQueryString = customQueryStrings[urlParams.get('qs')] // DH
	// const customQueryString =  // DH

	console.log('customQuery before url: ', customQuery)
  console.log('allTypeParams.length: ', allTypeParams.length)	
	const url = clientState.endpoint.fhirBaseUrl + subIn(relativeUrl) + '?' + queryString.stringify(query) // ... when using patientSearchQueries
	// const url = clientState.endpoint.fhirBaseUrl + subIn(relativeUrl) + '?' + customQuery // ... when there is a query in the url
	// const url = clientState.endpoint.fhirBaseUrl + subIn(relativeUrl) + '/$everything'  // this produces an error on epic
	console.log("url: " + url)
  return fhirInteraction(clientState, 'GET', url)
}

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

  const patientSearchQueries = [ // all comments relate to epic sandbox
    ['Observation', {
      'category': 'laboratory'
    }], // runs without error
    ['Observation', {
      'category': 'vital-signs'
    }],  // DH that's working
    ['Observation', {
      'category': 'social-history'
    }], // runs without error
    // ['MedicationOrder'],  // ...this resource is not listed in Epic, so no luck; try again with USCDI -> no good
    // ['MedicationStatement'], // not in epic list; is in USCDI  -> no good
	  // ['MedicationDispense'], // DH no luck with this one even though it is listed in epic
		['MedicationRequest'], // DH this works
    ['AllergyIntolerance'], // DH that's working
    ['Procedure'], // runs without error
    ['Immunization'], // works on epic
    ['DocumentReference'],
		// from hear I start adding things that are in epic sandbox but not yet here
		['Condition'], // works on epic sandbox
		// ['Medication'], // epic sandbox calls this a bad request, but I'll try again; -> bad request
		// ['Coverage'], // fails when Epic client registration resources are limited to USCDI
		// candidates:
		// from here down if it is commented out it caused bad request (400), forbidden (403) or not found (404) error
		['Device'],
		// ['DeviceUseStatement'], // fails when Epic client registration resources are limited to USCDI
	  ['DiagnosticReport'],
	  ['Encounter'],
		// ['EpisodeOfCare'],
		// ['ExplanationOfBenefit'],
		// ['FamilyMemberHistory'],
		// ['Flag'], // fails when Epic client registration resources are limited to USCDI
		['Goal'],
	  // ['ImmunizationRecommendation'],
		// ['List'],
	  // ['Location'], // -> bad request
    // ['NutritionOrder'], // fails when Epic client registration resources are limited to USCDI
		// ['Observation'], // overlaps with three above
		// ['Practitioner'], // try with USCDI -> bad request
		// ['Provenance'], // try with USCDI -> no good
		// ['Questionnaire'],
		// ['QuestionnaireResponse'], // fails when Epic client registration resources are limited to USCDI
		// ['RelatedPerson'], // try with USCDI -> no good
	  // ['RequestGroup'],
	  // ['ResearchStudy'],
		// ['ServiceRequest'], // fails when Epic client registration resources are limited to USCDI
		// ['Specimen'],
		// ['Substance'],
	  // ['Task'], // fails when Epic client registration resources are limited to USCDI
		// *** these are in USCDI but not yet tested in this app 2022-11-29
		// ['Binary'], //  -> no good
		// ['CarePlan'], // -> bad request
		['CareTeam'],
		// ['Organization'], // -> bad request
		// ['PractitionerRole'], // -> bad request
  ].map(withPatient)

	console.log("stringify ['Patient/{{patient}}']: " + queryString.stringify(['Patient/{{patient}}']))
	console.log("stringify 'Patient/{{patient}']: " + queryString.stringify('Patient/{{patient}}'))
	console.log("stringify {foo: ['Patient/{{patient}}']}: " + queryString.stringify({foo: ['Patient/{{patient}}']}))

  const queries = patientReadQueries.concat(patientSearchQueries) 
  // const queries = patientReadQueries // DH sometimes useful for testing

	console.log("queries: ", queries)
	
  // const queries = patientReadQueries // DH that worked, got the Patient resource and of course nothing else. 
  const pending = queries
    .map((args) => client.get(...args))
    .map(client.drainPages)

	console.log("pending: ", pending) 

  const results = await Promise.all(pending)

  console.log("results", results)
})
