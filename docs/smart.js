const SMART_OAUTH_EXTENSION = 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris';

// Step 1: Fetch the FHIR metadata to discover OAuth endpoints
const oauth = async (clientState) => {
  const { endpoint } = clientState;
  const fhirBaseUrl = endpoint.fhirBaseUrl + (endpoint.fhirBaseUrl.endsWith('/') ? '' : '/');

  const metadataResponse = await fetch(fhirBaseUrl + 'metadata', {
    headers: { Accept: 'application/json+fhir' },
  }).then((r) => r.json());

  const oauthUris = metadataResponse.rest[0].security.extension
    .filter((e) => e.url === SMART_OAUTH_EXTENSION)[0]
    .extension.reduce((ret, v) => ({ ...ret, [v.url]: v.valueUri }), {});

  return { ...clientState, oauth: oauthUris, metadataRaw: metadataResponse };
};

// Step 2: Open a popup for the user to authorize; wait for the redirect callback
const authorize = (clientState) => {
  return new Promise((resolve) => {
    const state = crypto.randomUUID();
    // Use scope from registration, or default to patient/Patient.rs
    const scope = clientState.registration.scope || 'patient/Patient.rs';
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientState.registration.client_id,
      redirect_uri: clientState.registration.redirect_uri,
      scope,
      state,
      aud: clientState.endpoint.fhirBaseUrl,
    });

    window.open(clientState.oauth.authorize + '?' + params.toString());

    const channel = new BroadcastChannel(state);
    channel.onmessage = (e) =>
      resolve({
        ...clientState,
        authorizeRequest: Object.fromEntries(params),
        authorizeResponse: e.data,
      });
  });
};

// Step 3: Exchange the authorization code for an access token
const token = async (clientState) => {
  const tokenRequest = new URLSearchParams({
    grant_type: 'authorization_code',
    code: clientState.authorizeResponse.code,
    redirect_uri: clientState.registration.redirect_uri,
    client_id: clientState.registration.client_id,
  });

  const tokenResponse = await fetch(clientState.oauth.token, {
    method: 'POST',
    mode: 'cors',
    body: tokenRequest.toString(),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).then((r) => r.json());

  return { ...clientState, tokenRequest: Object.fromEntries(tokenRequest), tokenResponse };
};

// Helper: match endpoint tags to select the right client ID
export const matchTags = (tags, matchers) =>
  matchers.map(([matchFn, value]) => (matchFn(tags) ? value : null)).filter((x) => x !== null)[0];

export default { oauth, authorize, token };
