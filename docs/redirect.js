// OAuth redirect handler.
// Parses the authorization code from the URL and sends it back
// to the main page via BroadcastChannel, then closes this tab.

const params = new URLSearchParams(window.location.search);
const results = Object.fromEntries(params);
new BroadcastChannel(results.state).postMessage(results);
window.close();
