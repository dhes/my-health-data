import smart, { matchTags } from './smart.js';
import endpoints from './endpoints.js';

// --- Configuration ---

const SERVERS = {
  smart:          endpoints[0], // SMART Sandbox R2
  epicSandbox:    endpoints[2], // Epic Sandbox R4
  cernerSandbox:  endpoints[4], // Cerner Sandbox R4
  epicQueens:     endpoints[5], // Queen's Health Systems R4
  epicHph:        endpoints[6], // Hawaii Pacific Health R4
};

const CLIENT_IDS = [
  [(tags) => tags.includes('smart') && tags.includes('sandbox'),    'default_client_id'],
  [(tags) => tags.includes('epic') && tags.includes('sandbox'),     'e2a16942-d018-4c87-a5cf-56ddd1e42b0a'], // uscdi-only-test non-production
  [(tags) => tags.includes('epic') && tags.includes('production'),  '38ba791f-abac-458f-85fa-c2690bd7bbe0'], // uscdi-only-test production
  [(tags) => tags.includes('cerner') && tags.includes('sandbox'),   'a7da8040-9a81-4495-8867-6af33e7e80d2'],
  [(tags) => tags.includes('cerner') && tags.includes('production'),'ebef9a74-0d0b-453f-87ed-a139e2a0465a'],
];

// FHIR resource queries to run after authentication
const RESOURCE_QUERIES = [
  ['Patient?_id={{patient}}'],                            // Patient demographics (as Bundle)
  ['Observation',        { category: 'laboratory' }],
  ['Observation',        { category: 'vital-signs' }],
  ['Observation',        { category: 'social-history' }],
  ['MedicationRequest'],
  ['AllergyIntolerance'],
  ['Procedure'],
  ['Immunization'],
  ['DocumentReference'],
  ['Condition'],
  ['Device'],
  ['DiagnosticReport'],
  ['Encounter'],
  ['Goal'],
  ['CareTeam'],
];

// --- Endpoint selection ---

const serverPick = window.location.hash.slice(1) || 'epicQueens';
const endpoint = SERVERS[serverPick];
if (!endpoint) {
  console.error(`Unknown server "${serverPick}". Available: ${Object.keys(SERVERS).join(', ')}`);
  throw new Error(`Unknown server: ${serverPick}`);
}

const redirectUri = new URL('redirect.html', window.location.href).href;

const registration = {
  redirect_uri: redirectUri,
  client_id: matchTags(endpoint.tags, CLIENT_IDS),
};

console.log('Server:', endpoint.name, endpoint.fhirBaseUrl);
console.log('Redirect URI:', redirectUri);

// --- FHIR client ---

async function fhirFetch(accessToken, url) {
  return fetch(url, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  }).then((r) => r.json());
}

function buildQueryUrl(baseUrl, relativeUrl, params, patientId) {
  const sub = (s) => s.replace('{{patient}}', patientId);
  const url = new URL(sub(relativeUrl), baseUrl.endsWith('/') ? baseUrl : baseUrl + '/');

  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, sub(v));
  }
  return url.href;
}

async function drainPages(accessToken, firstPage, maxPages = -1) {
  const pages = [firstPage];
  if (firstPage.resourceType !== 'Bundle' || maxPages === 0) return pages;

  const nextLink = (firstPage.link || []).find((l) => l.relation === 'next');
  if (!nextLink) return pages;

  const nextPage = await fhirFetch(accessToken, nextLink.url);
  const rest = await drainPages(accessToken, nextPage, maxPages - 1);
  return pages.concat(rest);
}

// --- Main ---

async function main() {
  // Authenticate
  let clientState = { endpoint, registration };
  for (const step of ['oauth', 'authorize', 'token']) {
    clientState = await smart[step](clientState);
  }

  const { access_token, patient } = clientState.tokenResponse;
  console.log('Authenticated. Patient ID:', patient);

  // Print curl commands for manual use
  const curl = `curl -H 'Accept: application/json' -H "Authorization: BEARER $TOKEN"`;
  console.log(`
  export TOKEN=${access_token}
  export PATIENT=${patient}
  export ENDPOINT=${endpoint.fhirBaseUrl}
  ${curl} "$ENDPOINT/Patient/$PATIENT" > patient.json
  ${curl} "$ENDPOINT/Observation?category=social-history&patient=$PATIENT" > social-history.json
  ${curl} "$ENDPOINT/Observation?category=laboratory&patient=$PATIENT" > laboratory.json
  ${curl} "$ENDPOINT/Observation?category=vital-signs&patient=$PATIENT" > vital-signs.json
  ${curl} "$ENDPOINT/Condition?patient=$PATIENT" > condition.json
  ${curl} "$ENDPOINT/AllergyIntolerance?patient=$PATIENT" > allergy-intolerance.json
  ${curl} "$ENDPOINT/Procedure?patient=$PATIENT" > procedure.json
  ${curl} "$ENDPOINT/Immunization?patient=$PATIENT" > immunization.json
  ${curl} "$ENDPOINT/DocumentReference?patient=$PATIENT" > document-reference.json
  `);

  // Build queries: first entry is a patient read (no extra params),
  // the rest get patient={{patient}} appended
  const queries = RESOURCE_QUERIES.map((q, i) => {
    if (i === 0) return q; // Patient read query already has {{patient}} in URL
    return [q[0], { ...(q[1] || {}), patient: '{{patient}}' }];
  });

  // Execute all queries in parallel, drain all pages
  const results = await Promise.all(
    queries.map(async ([relativeUrl, params = {}]) => {
      const url = buildQueryUrl(endpoint.fhirBaseUrl, relativeUrl, params, patient);
      const firstPage = await fhirFetch(access_token, url);
      return drainPages(access_token, firstPage);
    })
  );

  console.log('results', results);
}

main().catch((err) => console.error('Error:', err));
