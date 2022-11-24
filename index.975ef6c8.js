// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _babelPolyfill = require("babel-polyfill");
var _smartJs = require("./smart.js");
var _smartJsDefault = parcelHelpers.interopDefault(_smartJs);
var _queryString = require("query-string");
var _queryStringDefault = parcelHelpers.interopDefault(_queryString);
var _endpointsJs = require("./endpoints.js");
var _endpointsJsDefault = parcelHelpers.interopDefault(_endpointsJs);
console.log("window.location.href: " + window.location.href);
const redirectUri = window.location.href // url of the current page
.replace("index.html", "redirect.html").replace(/#.*/, "");
console.log("redirectUri: " + redirectUri);
const getRegistration = (endpoint)=>({
        redirect_uri: redirectUri,
        client_id: (0, _smartJs.matchTags)(endpoint.tags, [
            [
                (tags)=>tags.includes("smart") && tags.includes("sandbox"),
                "default_client_id"
            ],
            [
                (tags)=>tags.includes("epic") && tags.includes("sandbox"),
                "da58337e-f498-41da-be3f-51a9b9e33e50"
            ],
            [
                (tags)=>tags.includes("epic") && tags.includes("production"),
                "21dc0e1a-2480-479e-bc1b-020f49d2da01"
            ]
        ])
    });
async function makeClient(fhirBaseUrl, steps = [
    "oauth",
    "authorize",
    "token"
]) {
    let endpoint = (0, _endpointsJsDefault.default).filter((r)=>r.fhirBaseUrl === fhirBaseUrl)[0];
    let registration = getRegistration(endpoint);
    let clientState = {
        endpoint,
        registration
    };
    for (let step of steps)clientState = await (0, _smartJsDefault.default)[step](clientState);
    return clientState;
}
console.log("endpoints[1]: " + (0, _endpointsJsDefault.default)[1]);
console.log("endpoints[1].fhirBaseUrl: " + (0, _endpointsJsDefault.default)[1].fhirBaseUrl);
// Eventually we'll have a UI
let serverPick = window.location.hash.slice(1) || "queens";
let fhirServerToTest = {
    smart: (0, _endpointsJsDefault.default)[0].fhirBaseUrl,
    epic: (0, _endpointsJsDefault.default)[1].fhirBaseUrl,
    unity: "https://epicfhir.unitypoint.org/ProdFHIR/api/FHIR/DSTU2/",
    uw: "https://epicproxy.hosp.wisc.edu/FhirProxy/api/FHIR/DSTU2/",
    queens: "https://mobileapps.queens.org/FHIR/api/FHIR/R4/"
}[serverPick];
const fhirInteraction = async (clientState, method, url, body)=>{
    const httpResponse = await fetch(url, {
        method: method,
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + clientState.tokenResponse.access_token
        }
    }).then((r)=>r.json());
    return httpResponse;
};
const fhirGet = async (clientState, relativeUrl, queryIn = {})=>{
    const subIn = (s)=>s.replace("{{patient}}", clientState.tokenResponse.patient);
    const query = Object.keys(queryIn).reduce((acc, k)=>({
            ...acc,
            [k]: subIn(queryIn[k])
        }), {});
    const url = clientState.endpoint.fhirBaseUrl + "/" + subIn(relativeUrl) + "?" + (0, _queryStringDefault.default).stringify(query);
    return fhirInteraction(clientState, "GET", url);
};
const fhirDrainPages = async (clientState, pageIn, maxCount = -1)=>{
    const page = await pageIn;
    const interim = [
        page
    ];
    if (page.resourceType !== "Bundle" || maxCount == 0) return interim;
    const nextPageUrls = (page.link || []).filter((l)=>l.relation === "next");
    if (nextPageUrls.length === 0) return interim;
    const nextPageUrl = nextPageUrls[0].url;
    const nextPage = await fhirInteraction(clientState, "GET", nextPageUrl);
    const remainingPages = await fhirDrainPages(clientState, nextPage, maxCount - 1);
    return interim.concat(remainingPages);
};
const fhirClient = (clientState)=>({
        get: (...args)=>fhirGet.apply(null, [
                clientState
            ].concat(args)),
        drainPages: (...args)=>fhirDrainPages.apply(null, [
                clientState
            ].concat(args)),
        interaction: (...args)=>fhirInteraction.apply(null, [
                clientState
            ].concat(args))
    });
makeClient(fhirServerToTest).then(async (c)=>{
    const client = fhirClient(c);
    console.log(c);
    const curl = `curl -H 'Accept: application/json' -H "Authorization: BEARER $TOKEN" `;
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
  `);
    const withPatient = (q)=>[
            q[0],
            {
                ...q[1] || {},
                patient: "{{patient}}"
            }
        ];
    const patientReadQueries = [
        [
            "Patient/{{patient}}"
        ]
    ];
    const patientSearchQueries = [
        [
            "Observation",
            {
                "category": "laboratory"
            }
        ],
        [
            "Observation",
            {
                "category": "vital-signs"
            }
        ],
        [
            "Observation",
            {
                "category": "social-history"
            }
        ],
        [
            "MedicationOrder"
        ],
        [
            "MedicationStatement"
        ],
        [
            "AllergyIntolerance"
        ],
        [
            "Procedure"
        ],
        [
            "Immunization"
        ],
        [
            "DocumentReference"
        ]
    ].map(withPatient);
    const queries = patientReadQueries.concat(patientSearchQueries);
    const pending = queries.map((args)=>client.get(...args)).map(client.drainPages);
    const results = await Promise.all(pending);
    console.log("results", results);
});

},{"babel-polyfill":"7LKiE","./smart.js":"2hecu","query-string":"11cDl","./endpoints.js":"44Ppo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hecu":[function(require,module,exports) {
// import uuid from "uuid";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "matchTags", ()=>matchTags);
var _uuid = require("uuid");
var _queryString = require("query-string");
var _queryStringDefault = parcelHelpers.interopDefault(_queryString);
const smartOAuthExtension = "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris";
const oauth = async (clientState, fetch = window.fetch)=>{
    const { endpoint  } = clientState;
    const fhirBaseUrl = endpoint.fhirBaseUrl + (endpoint.fhirBaseUrl.slice(-1) === "/" ? "" : "/");
    const metadataResponse = await fetch(fhirBaseUrl + "metadata", {
        headers: {
            "Accept": "application/json+fhir"
        }
    }).then((r)=>r.json());
    const oauth = metadataResponse.rest[0].security.extension.filter((e)=>e.url === smartOAuthExtension)[0].extension.reduce((ret, v)=>({
            ...ret,
            [v.url]: v.valueUri
        }), {});
    return {
        ...clientState,
        oauth,
        metadataRaw: metadataResponse
    };
};
const authorize = (clientState, fetch = window.fetch)=>{
    return new Promise((resolve, reject)=>{
        const state = (0, _uuid.v4)();
        const authorizeRequest = {
            response_type: "code",
            client_id: clientState.registration.client_id,
            redirect_uri: clientState.registration.redirect_uri,
            scope: "launch/patient patient/*.read",
            state,
            aud: clientState.endpoint.fhirBaseUrl
        };
        console.log("authzreq", authorizeRequest);
        const authorizeLink = clientState.oauth.authorize + "?" + (0, _queryStringDefault.default).stringify(authorizeRequest);
        const authorizeWindow = window.open(authorizeLink);
        const channel = new BroadcastChannel(state);
        channel.onmessage = (e)=>resolve({
                ...clientState,
                authorizeRequest,
                authorizeResponse: e.data
            });
    });
};
const token = async (clientState, fetch = window.fetch)=>{
    const tokenUrl = clientState.oauth.token;
    const tokenRequest = {
        grant_type: "authorization_code",
        code: clientState.authorizeResponse.code,
        redirect_uri: clientState.registration.redirect_uri,
        client_id: clientState.registration.client_id
    };
    const tokenResponse = await fetch(tokenUrl, {
        method: "POST",
        mode: "cors",
        body: (0, _queryStringDefault.default).stringify(tokenRequest),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((r)=>r.json());
    return {
        ...clientState,
        tokenRequest,
        tokenResponse
    };
};
const matchTags = (tags, matchers)=>matchers.map(([matchFn, value])=>matchFn(tags) ? value : null).filter((x)=>x !== null)[0];
exports.default = {
    oauth,
    authorize,
    token
};

},{"uuid":"j4KJi","query-string":"11cDl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"lYayS","./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYayS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44Ppo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _epicJson = require("./epic.json");
var _epicJsonDefault = parcelHelpers.interopDefault(_epicJson);
const sandboxEndpoints = [
    {
        fhirBaseUrl: "http://launch.smarthealthit.org/v/r2/sim/eyJoIjoiMSJ9/fhir",
        name: "SMART Sandbox R2",
        tags: [
            "sandbox",
            "smart"
        ]
    },
    {
        fhirBaseUrl: "https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/",
        name: "Epic Argonaut Sandbox",
        tags: [
            "sandbox",
            "epic"
        ]
    }
];
const productionEndpoints = (0, _epicJsonDefault.default).Entries.map((e)=>({
        fhirBaseUrl: e.FHIRPatientFacingURI,
        name: e.OrganizationName,
        tags: [
            "production",
            "epic"
        ]
    }));
const endpoints = sandboxEndpoints.concat(productionEndpoints);
exports.default = endpoints;

},{"./epic.json":"bM3md","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bM3md":[function(require,module,exports) {
module.exports = JSON.parse('{"Entries":[{"OrganizationName":"Access Community Health Network","FHIRPatientFacingURI":"https://eprescribing.accesscommunityhealth.net/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Adult & Pediatric Ear, Nose & Throat - Kalamazoo","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"AdvantageCare Physicians","FHIRPatientFacingURI":"https://epwebapps.acpny.com/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"AdventHealth","FHIRPatientFacingURI":"https://mobile.adventhealth.com/oauth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Adventist Health West","FHIRPatientFacingURI":"https://epicescribe1.ah.org/ARR-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Akron Children\'s Hospital","FHIRPatientFacingURI":"https://haiku-canto-prod.chmca.org/ARR-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Alameda Health System","FHIRPatientFacingURI":"https://epicproxy.et1075.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Allegheny Health Network","FHIRPatientFacingURI":"https://epicprisfd.ahn.org/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Allina Health System","FHIRPatientFacingURI":"https://webproxy.allina.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"AltaMed","FHIRPatientFacingURI":"https://epicproxy.et1123.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Altru Health System","FHIRPatientFacingURI":"https://epicsoap.altru.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"AnMed Health","FHIRPatientFacingURI":"https://epicproxy.et0971.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Ann & Robert H. Lurie Children\'s Hospital of Chicago","FHIRPatientFacingURI":"https://epicmobile.luriechildrens.org/Interconnect-FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Ardent","FHIRPatientFacingURI":"https://epicproxy.ardenthealth.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Arizona Community Physicians","FHIRPatientFacingURI":"https://interconnect.azacp.com/interconnect-oauth2-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Arkansas Children\'s","FHIRPatientFacingURI":"https://fhir.archildrens.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Arrowhead Regional Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1152.epichosted.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Asante Health Systems","FHIRPatientFacingURI":"https://epicmobile.asante.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Ascension - Providence Healthcare Network","FHIRPatientFacingURI":"https://stofo.providence-waco.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Ascension WI","FHIRPatientFacingURI":"https://eprescribe.wfhc.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Aspen Valley Hospital","FHIRPatientFacingURI":"https://epicproxy.et1254.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Aspirus","FHIRPatientFacingURI":"https://erx.aspirus.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Atlantic Health","FHIRPatientFacingURI":"https://soapproxy.atlantichealth.org/FHIRPrd/api/FHIR/DSTU2/"},{"OrganizationName":"Atrium Health","FHIRPatientFacingURI":"https://epicproxy.et0905.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Atrium Health Wake Forest Baptist","FHIRPatientFacingURI":"https://w1soap.wakehealth.edu/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Atrius Health","FHIRPatientFacingURI":"https://iatrius.atriushealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Aurora Health Care - myAurora","FHIRPatientFacingURI":"https://EpicFHIR.aurora.org/FHIR/MYAURORA/api/FHIR/DSTU2/"},{"OrganizationName":"Austin Regional Clinic","FHIRPatientFacingURI":"https://mobileprod.arcmd.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Ballad Health","FHIRPatientFacingURI":"https://soap.wellmont.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Health – KY & IN","FHIRPatientFacingURI":"https://epicproxy.bhsi.com/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Health - Northeast Florida","FHIRPatientFacingURI":"https://epicproxy.et1206.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Health (Arkansas)","FHIRPatientFacingURI":"https://api.baptist-health.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Memorial Health Care","FHIRPatientFacingURI":"https://rxedi.bmhcc.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Bassett Healthcare","FHIRPatientFacingURI":"https://soap.bassett.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"BayCare Clinic - myBayCare","FHIRPatientFacingURI":"https://EpicFHIR.aurora.org/FHIR/MYBAYCARE/api/FHIR/DSTU2/"},{"OrganizationName":"Bayhealth Medical Center","FHIRPatientFacingURI":"https://epproxy.bayhealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Baylor College of Medicine","FHIRPatientFacingURI":"https://fhir.clinical.bcm.edu/Stage1Fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Baylor Scott & White Health","FHIRPatientFacingURI":"https://rxproxy.sw.org/FHIR-PRD/BSW/api/FHIR/DSTU2/"},{"OrganizationName":"Beaumont Health","FHIRPatientFacingURI":"https://moc.beaumont.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Bellin Health","FHIRPatientFacingURI":"https://arr.thedacare.org/FHIR/BLN/api/FHIR/DSTU2/"},{"OrganizationName":"BJC & Washington University","FHIRPatientFacingURI":"https://epicproxy.et0965.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Bon Secours Health System","FHIRPatientFacingURI":"https://haiku.bshsi.org/fhir/BSHSI_OAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Boston Medical Center","FHIRPatientFacingURI":"https://emerge-soap1.bmc.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Boulder Community Health","FHIRPatientFacingURI":"https://prevprox.bch.org/FHIRproxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Bronson Healthcare Group","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Brookwood Baptist Health","FHIRPatientFacingURI":"https://epicproxy.bhsala.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Brown & Toland Physicians","FHIRPatientFacingURI":"https://epicproxy.et1138.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Bryan Health","FHIRPatientFacingURI":"https://epicproxy.et1031.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Buffalo Medical Group","FHIRPatientFacingURI":"https://fhir.buffalomedicalgroup.com/fhir-arr/api/FHIR/DSTU2/"},{"OrganizationName":"Cambridge Health Alliance","FHIRPatientFacingURI":"https://epicweb.challiance.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Cape Cod Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1149.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cape Fear Valley Health","FHIRPatientFacingURI":"https://epicproxy.et1094.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Care New England","FHIRPatientFacingURI":"https://cnesp001.carene.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Carilion Clinic","FHIRPatientFacingURI":"https://fhir.carilionclinic.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Carle Foundation Hospital & Physician Group","FHIRPatientFacingURI":"https://epicsoap.carle.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Caromont Health","FHIRPatientFacingURI":"https://spp.caromonthealth.org/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Catholic Health (Long Island NY)","FHIRPatientFacingURI":"https://epx1.chsli.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Catholic Health System (Buffalo)","FHIRPatientFacingURI":"https://epicproxy.et1144.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cedars-Sinai Health System","FHIRPatientFacingURI":"https://cslinkmobile.csmc.edu/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"CentraCare Health and Affiliates","FHIRPatientFacingURI":"https://epicmobile.centracare.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Centura Health","FHIRPatientFacingURI":"https://epic-p-mobile.centura.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Charlotte Eye Ear Nose & Throat Associates","FHIRPatientFacingURI":"https://fhirprd.ceenta.com/proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Chesapeake Regional Medical Center","FHIRPatientFacingURI":"https://haiku.bshsi.org/fhir/CRMC_OAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Cheyenne Regional Medical Center","FHIRPatientFacingURI":"https://soap.crmcwy.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"CHI Franciscan Health","FHIRPatientFacingURI":"https://rp.catholichealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI Health","FHIRPatientFacingURI":"https://rp.chihealth.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI Memorial","FHIRPatientFacingURI":"https://rpsouth.catholichealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI Saint Joseph Health","FHIRPatientFacingURI":"https://rpsouth.catholichealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI St. Alexius Health","FHIRPatientFacingURI":"https://rp.chihealth.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI St. Luke\'s Health","FHIRPatientFacingURI":"https://rpsouth.catholichealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI St. Vincent","FHIRPatientFacingURI":"https://eprescribe.mercy.net/PRDFHIRSGF/CHI/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Health System of Texas","FHIRPatientFacingURI":"https://fhir.childrens.com/prd/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Healthcare of Atlanta","FHIRPatientFacingURI":"https://wpprod.choa.org/FHIR_PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Hospital and Medical Center, Omaha Nebraska","FHIRPatientFacingURI":"https://EPROXY1.chsomaha.org/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Hospital Colorado","FHIRPatientFacingURI":"https://fhir.childrenscolorado.org/fhirprd/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Hospital of Philadelphia","FHIRPatientFacingURI":"https://epicnsproxy.chop.edu/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Wisconsin","FHIRPatientFacingURI":"https://epicproxy.et0815.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"CHRISTUS Health","FHIRPatientFacingURI":"https://proxy.christushealth.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cigna Medical Group","FHIRPatientFacingURI":"https://epicarr.healthcare.cigna.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Cincinnati Children\'s Hospital Medical Center","FHIRPatientFacingURI":"https://boomer.cchmc.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"City of Hope","FHIRPatientFacingURI":"https://epic-rproxyprod.coh.org/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Cleveland Clinic","FHIRPatientFacingURI":"https://api.ccf.org/mu/api/FHIR/DSTU2/"},{"OrganizationName":"Columbia Physicians","FHIRPatientFacingURI":"https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Columbus Regional Health","FHIRPatientFacingURI":"https://epicprdproxy.crh.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Community First Medical Center","FHIRPatientFacingURI":"https://proxy.cfmedicalcenter.com/FHIRProxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Community Health Network","FHIRPatientFacingURI":"https://esp.ecommunity.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Community Healthcare System","FHIRPatientFacingURI":"https://webproxy.comhs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Community Medical Centers","FHIRPatientFacingURI":"https://epicsoapprd.communitymedical.org/arr_fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Cone Health","FHIRPatientFacingURI":"https://epsoap.conehealth.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Conemaugh Health System","FHIRPatientFacingURI":"https://fhir.conemaugh.org/arr-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Confluence Health","FHIRPatientFacingURI":"https://epicproxy.et0764.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Connecticut Children\'s Medical Center","FHIRPatientFacingURI":"https://epicproxy.connecticutchildrens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Contra Costa","FHIRPatientFacingURI":"https://icproxy.mycclink.org/proxy-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Cook Children’s Health Care System","FHIRPatientFacingURI":"https://cookicfg.cookchildrens.org/CookFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Cooper University Health Care","FHIRPatientFacingURI":"https://epicproxy.et0578.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cottage Health","FHIRPatientFacingURI":"https://eparp.sbch.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Covenant Health","FHIRPatientFacingURI":"https://haiku.bshsi.org/fhir/COV_OAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Covenant HealthCare","FHIRPatientFacingURI":"https://epichaiku.chs-mi.com/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"Dartmouth-Hitchcock","FHIRPatientFacingURI":"https://edhwebportal.hitchcock.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"DaVita Physician Solutions","FHIRPatientFacingURI":"https://epicproxy.et1087.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Dayton Children\'s Hospital","FHIRPatientFacingURI":"https://appprd.childrensdayton.org/interconnect-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Deaconess Health System","FHIRPatientFacingURI":"https://eprp.deaconess.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Denver Health","FHIRPatientFacingURI":"https://webservices.dhha.org/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Drexel Medicine","FHIRPatientFacingURI":"https://epicproxy.et4001.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Driscoll Children\'s Hospital","FHIRPatientFacingURI":"https://fhir.dchstx.org/FHIR-External/api/FHIR/DSTU2/"},{"OrganizationName":"Duke Health","FHIRPatientFacingURI":"https://health-apis.duke.edu/FHIR/patient/DSTU2/"},{"OrganizationName":"Duly Health and Care","FHIRPatientFacingURI":"https://epicproxy.et1296.epichosted.com/APIProxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"East Boston Neighborhood Health Center","FHIRPatientFacingURI":"https://ebmobile14.ebnhc.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Edward-Elmhurst Healthcare","FHIRPatientFacingURI":"https://fhirprd.edward.org/fhirprd/EEHOAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Eisenhower Medical Center","FHIRPatientFacingURI":"https://epicarr.emc.org/EMC_FHIR_PRD/api/FHIR/DSTU2/"},{"OrganizationName":"El Camino Hospital","FHIRPatientFacingURI":"https://rwebproxy.elcaminohospital.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"El Rio Health","FHIRPatientFacingURI":"https://epicproxy.et1240.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Emory Healthcare","FHIRPatientFacingURI":"https://epicrp-prd.eushc.org/OAUTH2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Englewood Hospital and Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1073.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Enloe Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1034.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"EPIC Management (Beaver Medical Group)","FHIRPatientFacingURI":"https://epicproxy.et1038.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Erlanger Health System","FHIRPatientFacingURI":"https://epicproxy.et0967.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Eskenazi Health","FHIRPatientFacingURI":"https://proxy.eskenazihealth.edu/FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Essentia Health","FHIRPatientFacingURI":"https://m.essentiahealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Evernorth","FHIRPatientFacingURI":"https://epicarr.healthcare.cigna.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Fairview Health Services","FHIRPatientFacingURI":"https://sfd.fairview.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Family Health Center (Michigan)","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"FastMed","FHIRPatientFacingURI":"https://external.fastmed.com/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"FirstHealth of the Carolinas","FHIRPatientFacingURI":"https://epicrp.firsthealth.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Franciscan Alliance","FHIRPatientFacingURI":"https://ema.franciscanalliance.org/FHIR_PROXY/api/FHIR/DSTU2/"},{"OrganizationName":"Franciscan Missionaries of Our Lady Health System","FHIRPatientFacingURI":"https://epicproxy.et0830.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Fresenius Medical Care North America","FHIRPatientFacingURI":"https://epicproxy.et1041.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Froedtert Health","FHIRPatientFacingURI":"https://epicserviceGW.froedtert.com/FHIRProxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Garnet Health","FHIRPatientFacingURI":"https://epic.garnethealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Geisinger","FHIRPatientFacingURI":"https://geisapi.geisinger.edu/FHIR_PROD/api/FHIR/DSTU2/"},{"OrganizationName":"Genesis Healthcare System","FHIRPatientFacingURI":"https://fhir.genesishcs.org/api/FHIR/DSTU2/"},{"OrganizationName":"George Washington University Medical Faculty Associates","FHIRPatientFacingURI":"https://epicproxy.et1222.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Golden Valley Health Centers","FHIRPatientFacingURI":"https://ep-rps.gvhc.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Grady Health System","FHIRPatientFacingURI":"https://surescripts.gmh.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Greater Baltimore Medical Center","FHIRPatientFacingURI":"https://eportal.gbmc.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Group Health Cooperative - South Central Wisconsin","FHIRPatientFacingURI":"https://linkpoint.ghcscw.com/Interconnect-PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Gundersen Health System","FHIRPatientFacingURI":"https://scproxy.gundersenhealth.org/FHIRARR/api/FHIR/DSTU2/"},{"OrganizationName":"Hackensack Meridian Health","FHIRPatientFacingURI":"https://mepic.hackensackumc.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Harris Health System","FHIRPatientFacingURI":"https://fhir.harrishealth.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Hartford HealthCare","FHIRPatientFacingURI":"https://EpicProxy.hhchealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Hattiesburg Clinic and Forrest General Hospital","FHIRPatientFacingURI":"https://soapprod.hattiesburgclinic.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Hawaii Pacific Health","FHIRPatientFacingURI":"https://webservices.hawaiipacifichealth.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"HCA Central and West Texas","FHIRPatientFacingURI":"https://stdavidsfhirprd.app.medcity.net/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"HCA Mountain","FHIRPatientFacingURI":"https://mountainstarhealthfhirprd.app.medcity.net/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"HCA South Atlantic","FHIRPatientFacingURI":"https://memorialhealthfhirprd.app.medcity.net/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"HealthEast Care System","FHIRPatientFacingURI":"https://sfd.fairview.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"HealthPartners","FHIRPatientFacingURI":"https://proxy.healthpartners.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hendricks Regional Health","FHIRPatientFacingURI":"https://sehproxy.stelizabeth.com/arr-fhir/HRH/api/FHIR/DSTU2/"},{"OrganizationName":"Hennepin Healthcare","FHIRPatientFacingURI":"https://hie.hcmed.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Henry Ford Health System","FHIRPatientFacingURI":"https://fhir.hfhs.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hill Physicians","FHIRPatientFacingURI":"https://epicproxy.et1013.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hoag Memorial Hospital Presbyterian","FHIRPatientFacingURI":"https://epicproxy.et1197.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"HonorHealth","FHIRPatientFacingURI":"https://interconnect.honorhealth.com/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Hospital for Special Surgery","FHIRPatientFacingURI":"https://epicproxy.et0927.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hospital Sisters Health System (HSHS)","FHIRPatientFacingURI":"https://scripts.prevea.com/FHIR-ARR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Houston Methodist","FHIRPatientFacingURI":"https://epiclbsprxyprodpass.houstonmethodist.org/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Hurley Medical Center","FHIRPatientFacingURI":"https://fhir.hurleymc.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Illinois Bone & Joint Institute","FHIRPatientFacingURI":"https://epicproxy.et1195.epichosted.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Infirmary Health","FHIRPatientFacingURI":"https://ssproxyprod.infirmaryhealth.org/epicFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Inova and Valley Health","FHIRPatientFacingURI":"https://epicrpprd.inova.org/fhirrp/api/FHIR/DSTU2/"},{"OrganizationName":"Institute for Family Health","FHIRPatientFacingURI":"https://epicproxy.institute.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"INTEGRIS Health","FHIRPatientFacingURI":"https://FHIR.Integrisok.com/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Jefferson Health","FHIRPatientFacingURI":"https://fhir.jefferson.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"John Muir Health","FHIRPatientFacingURI":"https://fhir.johnmuirhealth.com/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Johns Hopkins Medicine","FHIRPatientFacingURI":"https://epicmobile.johnshopkins.edu/FHIR_PRD/api/FHIR/DSTU2/"},{"OrganizationName":"JPS Health Network","FHIRPatientFacingURI":"https://fhir.jpshealth.org:4431/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente -  Maryland/Virginia/Washington D.C.","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/170/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - California - Northern","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/312/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - California - Southern","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/212/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - Colorado","FHIRPatientFacingURI":"https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/140/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente – Georgia","FHIRPatientFacingURI":"https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/200/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente – Oregon – SW Washington","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/190/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - Washington","FHIRPatientFacingURI":"https://fhir.kp.org/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente Hawaii / Maui Health System","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/130/api/FHIR/DSTU2/"},{"OrganizationName":"Kalamazoo College Student Health Center","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kalamazoo Foot Surgery","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kelsey-Seybold Clinic","FHIRPatientFacingURI":"https://ssrx.ksnet.com/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kennedy Krieger Institute","FHIRPatientFacingURI":"https://epicproxy.et1095.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kettering Health Network","FHIRPatientFacingURI":"https://khnarr.ketthealth.com/FHIR-PROD/api/FHIR/DSTU2/"},{"OrganizationName":"King\'s Daughters Medical Center","FHIRPatientFacingURI":"https://arrprd.kdmc.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Kootenai Health","FHIRPatientFacingURI":"https://soapprod.multicare.org/FHIRProxy/KH/api/FHIR/DSTU2/"},{"OrganizationName":"Lacy C Kessler, MD, PA","FHIRPatientFacingURI":"https://rxproxy.sw.org/FHIR-PRD/CONNECT/api/FHIR/DSTU2/"},{"OrganizationName":"Lahey Health System","FHIRPatientFacingURI":"https://fhir.laheyhealth.org/proxy-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Lakeland Health","FHIRPatientFacingURI":"https://fhir.lakelandregional.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Lancaster General Health","FHIRPatientFacingURI":"https://epicproxy.lghealth.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"LCMC Health","FHIRPatientFacingURI":"https://interconnect.lcmchealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Lee Health","FHIRPatientFacingURI":"https://epicedi.leememorial.org/FHIR-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Legacy Health","FHIRPatientFacingURI":"https://lhspdxfhirprd.lhs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Lehigh Valley Health Network","FHIRPatientFacingURI":"https://proxy.lvh.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Leon Medical Centers","FHIRPatientFacingURI":"https://prodinterconnect.leonmedicalcenters.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Lexington Medical Center","FHIRPatientFacingURI":"https://lmcrcs.lexmed.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Licking Memorial Health Systems","FHIRPatientFacingURI":"https://epicproxy.et1168.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Lifespan","FHIRPatientFacingURI":"https://lsepprdsoap.lifespan.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Loma Linda University Health and CareConnect Partners","FHIRPatientFacingURI":"https://fhir.lluh.org/interconnect-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Loyola Medicine","FHIRPatientFacingURI":"https://rxhub.luhs.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Luminis Health","FHIRPatientFacingURI":"https://epicarr.aahs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Main Line Health","FHIRPatientFacingURI":"https://epicproxy.et1007.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"MaineHealth","FHIRPatientFacingURI":"https://fhir.mainehealth.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Marshall Medical Center","FHIRPatientFacingURI":"https://emrrp.ucdmc.ucdavis.edu/FHIR/MMC/api/FHIR/DSTU2/"},{"OrganizationName":"Martin Health System","FHIRPatientFacingURI":"https://prodrx919.martinhealth.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Mary Greeley Medical Center (Iowa)","FHIRPatientFacingURI":"https://emrproxy.mcfarlandclinic.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mary Washington Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1055.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mass General Brigham","FHIRPatientFacingURI":"https://ws-interconnect-fhir.partners.org/Interconnect-FHIR-MU-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Mayo Clinic","FHIRPatientFacingURI":"https://pep.api.mayo.edu/epicfhiroauth/vexternal/api/FHIR/DSTU2/"},{"OrganizationName":"McFarland Clinic (Iowa)","FHIRPatientFacingURI":"https://emrproxy.mcfarlandclinic.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Medical University of South Carolina","FHIRPatientFacingURI":"https://fhirprod.musc.edu/fhirprod/api/FHIR/DSTU2/"},{"OrganizationName":"Medisys Health Network","FHIRPatientFacingURI":"https://eprescribe-p.medisys.org/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Memorial Healthcare System","FHIRPatientFacingURI":"https://mhssp.mhs.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Memorial Hospital and Health Care Center","FHIRPatientFacingURI":"https://arrprd.mhhcc.org/OAuth2/api/FHIR/DSTU2/"},{"OrganizationName":"MemorialCare","FHIRPatientFacingURI":"https://fhir.memorialcare.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health - OH, KY","FHIRPatientFacingURI":"https://chperx.health-partners.org/Proxy-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health (MO)","FHIRPatientFacingURI":"https://epic-fhir.mercy.net/prdfhirstl/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health Services (MD)","FHIRPatientFacingURI":"https://surescripts.mdmercy.com/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health System - WI","FHIRPatientFacingURI":"https://epicproxy.mhsjvl.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Medical Center","FHIRPatientFacingURI":"https://eproxy.mercycare.org/oauth2/api/FHIR/DSTU2/"},{"OrganizationName":"Meritus","FHIRPatientFacingURI":"https://meritus-rev-prd.meritushealth.com/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Methodist Health System","FHIRPatientFacingURI":"https://epcapp.mhd.com/arr-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Methodist Hospitals","FHIRPatientFacingURI":"https://mychart.methodisthospitals.org/FHIR-ARR/api/FHIR/DSTU2/"},{"OrganizationName":"Metro Health - Michigan","FHIRPatientFacingURI":"https://arrprd.metrohealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"MetroHealth - OH","FHIRPatientFacingURI":"https://fhir.metrohealth.org/fhir_prd/api/FHIR/DSTU2/"},{"OrganizationName":"Michigan Medicine","FHIRPatientFacingURI":"https://mcproxyprd.med.umich.edu/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Middlesex Hospital","FHIRPatientFacingURI":"https://epicproxy.et1124.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"MidMichigan Health","FHIRPatientFacingURI":"https://arrprod.midmichigan.net/ProdFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Mohawk Valley Health System","FHIRPatientFacingURI":"https://fhir.mvhealthsystem.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Molina Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1057.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Monroe Clinic","FHIRPatientFacingURI":"https://webproxyprd.monroeclinic.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Montage Health","FHIRPatientFacingURI":"https://epicproxy.et1058.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Montefiore Medical Center","FHIRPatientFacingURI":"https://soapepic.montefiore.org/FhirProxyPrd/api/FHIR/DSTU2/"},{"OrganizationName":"Monument Health","FHIRPatientFacingURI":"https://ehrmobile.regionalhealth.org/interconnect-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Mount Auburn Hospital","FHIRPatientFacingURI":"https://fhir.mah.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Mount Sinai Health System","FHIRPatientFacingURI":"https://epicsoapproxyprd.mountsinai.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Mount Sinai Medical Center","FHIRPatientFacingURI":"https://epicfhir.msmc.com/proxysite-prd/api/FHIR/DSTU2/"},{"OrganizationName":"MultiCare Health System","FHIRPatientFacingURI":"https://soapprod.multicare.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Muscogee - Creek Nation Department of Health","FHIRPatientFacingURI":"https://epicproxy.et1221.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"MY DR NOW","FHIRPatientFacingURI":"https://epicproxy.et4001.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Nationwide Children\'s Hospital","FHIRPatientFacingURI":"https://hkc.nationwidechildrens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"NCH Healthcare System","FHIRPatientFacingURI":"https://epicproxy.et1233.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Nebraska Medicine","FHIRPatientFacingURI":"https://ocsoapprd.nebraskamed.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Nemours","FHIRPatientFacingURI":"https://iconnect.nemours.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Nephrology Center - Southwest Michigan","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"New Hanover Regional Medical Center","FHIRPatientFacingURI":"https://epicmobile.nhrmc.org/OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"New Jersey Urology","FHIRPatientFacingURI":"https://epicproxy.et1153.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"New York-Presbyterian","FHIRPatientFacingURI":"https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"North Memorial Health","FHIRPatientFacingURI":"https://minerva.northmemorial.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"North Mississippi Health Services","FHIRPatientFacingURI":"https://eiclbext.nmhs.net/interconnect-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"North Oaks","FHIRPatientFacingURI":"https://soapproxyprd.northoaks.org/nohsfhir/api/FHIR/DSTU2/"},{"OrganizationName":"Northeast Georgia Health System","FHIRPatientFacingURI":"https://wpprod.nghs.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"NorthShore University Health System","FHIRPatientFacingURI":"https://haiku.northshore.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Northwest Community Hospital","FHIRPatientFacingURI":"https://epicprdproxy.nch.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Northwestern Medicine","FHIRPatientFacingURI":"https://nmepicproxy.nm.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Norton Healthcare","FHIRPatientFacingURI":"https://epicsoap.nortonhealthcare.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Novant Health","FHIRPatientFacingURI":"https://webproxy.mynovant.org/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"NOVO Health","FHIRPatientFacingURI":"https://rproxy.novohtg.com/OAUTHPRD/api/FHIR/DSTU2/"},{"OrganizationName":"NYC Health + Hospitals","FHIRPatientFacingURI":"https://epicproxypda.nychhc.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"NYU Langone Medical Center","FHIRPatientFacingURI":"https://epicfhir.nyumc.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"OB/GYN Associates of Waco - Dr. Rister, Dr. Koeritz","FHIRPatientFacingURI":"https://rxproxy.sw.org/FHIR-PRD/CONNECT/api/FHIR/DSTU2/"},{"OrganizationName":"OCHIN","FHIRPatientFacingURI":"https://webprd.ochin.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Ochsner Health System","FHIRPatientFacingURI":"https://myc.ochsner.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"OhioHealth","FHIRPatientFacingURI":"https://ccpintconfg.ohiohealth.com/Interconnect-PRD-MUAPI/api/FHIR/DSTU2/"},{"OrganizationName":"Olmsted Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1077.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"One Brooklyn Health System","FHIRPatientFacingURI":"https://epicproxy.et0883.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"OptumCare East","FHIRPatientFacingURI":"https://epicarr.optum.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"OptumCare West","FHIRPatientFacingURI":"https://epicpnwarr.optum.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Oregon Health & Science University","FHIRPatientFacingURI":"https://epicmobile.ohsu.edu/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Orlando Health","FHIRPatientFacingURI":"https://epicproxy.et1131.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"OrthoCarolina","FHIRPatientFacingURI":"https://epwebapps.orthocarolina.com/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"OrthoVirginia","FHIRPatientFacingURI":"https://epicproxy.et1015.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"OSF HealthCare","FHIRPatientFacingURI":"https://ssproxy.osfhealthcare.org/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Our Lady of the Angels","FHIRPatientFacingURI":"https://eprescribe.mercy.net/PRDFHIRAOK2/OLOA/api/FHIR/DSTU2/"},{"OrganizationName":"Overlake Hospital Medical Center","FHIRPatientFacingURI":"https://sfd.overlakehospital.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Owensboro Health","FHIRPatientFacingURI":"https://fhir.omhs.org/rp-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Pacific Dental Services","FHIRPatientFacingURI":"https://epicproxy.et1079.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Palos Health","FHIRPatientFacingURI":"https://epicproxy.et0946.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Parkland","FHIRPatientFacingURI":"https://pmh-vmhaiku-01.pmh.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Parkview Health","FHIRPatientFacingURI":"https://epicprod-mobile.parkview.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"PeaceHealth","FHIRPatientFacingURI":"https://soapproxy.peacehealth.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Pediatric Physicians Organization at Children\'s","FHIRPatientFacingURI":"https://fhir.chppoc.org/Fhir-External/api/FHIR/DSTU2/"},{"OrganizationName":"Penn Medicine","FHIRPatientFacingURI":"https://ssproxy.pennhealth.com/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Phelps Health","FHIRPatientFacingURI":"https://epicproxy.et1134.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Piedmont Healthcare","FHIRPatientFacingURI":"https://webproxy.piedmont.org/ARR-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Pine Rest Christian Mental Health Services","FHIRPatientFacingURI":"https://wecare.pinerest.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Planned Parenthood","FHIRPatientFacingURI":"https://epicproxy.et1154.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Premier Health","FHIRPatientFacingURI":"https://rx.premierhealthpartners.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Presbyterian Healthcare Services","FHIRPatientFacingURI":"https://epicFHIR.phs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Presence Health","FHIRPatientFacingURI":"https://epicmobile.presencehealth.org/fhirPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Prime Healthcare","FHIRPatientFacingURI":"https://phsfhir.primehealthcare.com/PHS-PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Prisma Health","FHIRPatientFacingURI":"https://epicproxy.et0915.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"ProHealth Care","FHIRPatientFacingURI":"https://soap.phci.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"ProMedica Health System","FHIRPatientFacingURI":"https://fhir.promedica.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Providence Health & Services - Alaska","FHIRPatientFacingURI":"https://haikuak.providence.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Providence Health & Services - Oregon/California","FHIRPatientFacingURI":"https://haikuor.providence.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Providence Health & Services - Washington/Montana","FHIRPatientFacingURI":"https://haikuwa.providence.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"QuadMed","FHIRPatientFacingURI":"https://epicicfore.quadmedical.com/fhirprd/api/FHIR/DSTU2/"},{"OrganizationName":"Rady Children\'s","FHIRPatientFacingURI":"https://epcppxl1.rchsd.org/fhirprd/api/FHIR/DSTU2/"},{"OrganizationName":"Reid Health","FHIRPatientFacingURI":"https://epicproxy.et1220.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Reliant Medical Group","FHIRPatientFacingURI":"https://fhirprd.reliantmedicalgroup.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Renown, Barton, CVMC","FHIRPatientFacingURI":"https://fhir.renown.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"River Valley","FHIRPatientFacingURI":"https://eprescribe.mercy.net/PRDFHIRSGF/MTSM/api/FHIR/DSTU2/"},{"OrganizationName":"Riverside Health System (Newport News, VA)","FHIRPatientFacingURI":"https://ep-rpfg.rivhs.com/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Riverside Medical Center","FHIRPatientFacingURI":"https://rpprod.riversidehealthcare.net/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Riverside Medical Clinic","FHIRPatientFacingURI":"https://sf1.rmcps.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Riverview Health","FHIRPatientFacingURI":"https://eprescribe.mercy.net/PRDFHIRSTL/rvh/api/FHIR/DSTU2/"},{"OrganizationName":"Rochester Regional Health","FHIRPatientFacingURI":"https://epicarr.rochesterregional.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Rush University Medical Center","FHIRPatientFacingURI":"https://epicproxy.rush.edu/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"RWJBarnabas Health","FHIRPatientFacingURI":"https://epicproxy.et1157.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Saint Francis Health System","FHIRPatientFacingURI":"https://eprdsoap000.saintfrancis.Com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Saint Francis Healthcare System","FHIRPatientFacingURI":"https://reverseproxy.sfmc.net/fhirproxyprd/api/FHIR/DSTU2/"},{"OrganizationName":"Saint Luke\'s Health System","FHIRPatientFacingURI":"https://epicmobile.corp.saint-lukes.org/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"Salem Health","FHIRPatientFacingURI":"https://prd.salemhealth.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Salinas Valley Memorial Healthcare Systems","FHIRPatientFacingURI":"https://epicproxy.et1146.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Samaritan Health Services","FHIRPatientFacingURI":"https://fhir.samhealth.org/fhir-arr/api/FHIR/DSTU2/"},{"OrganizationName":"San Francisco Department of Public Health","FHIRPatientFacingURI":"https://epicproxy.et1082.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Sanford Health","FHIRPatientFacingURI":"https://eprescribe.sanfordhealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Sansum Clinic","FHIRPatientFacingURI":"https://wavesurescripts.sansumclinic.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Santa Clara Valley Medical Center Hospitals and Clinics","FHIRPatientFacingURI":"https://scvhhsfhir.sccgov.org/interconnect-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"SCL Health","FHIRPatientFacingURI":"https://sclprdproxy.sclhs.net/FHIRPRD-2017/api/FHIR/DSTU2/"},{"OrganizationName":"Scotland Health Care System","FHIRPatientFacingURI":"https://epicproxy.et0905.epichosted.com/FHIRproxy/SCOT/api/FHIR/DSTU2/"},{"OrganizationName":"Scottish Rite for Children","FHIRPatientFacingURI":"https://epicproxy.et0970.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Scripps Health","FHIRPatientFacingURI":"https://haiku.scrippshealth.org/ARR-PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Seattle Children\'s Hospital","FHIRPatientFacingURI":"https://fhir.seattlechildrens.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Select Medical","FHIRPatientFacingURI":"https://epicproxy.et0948.epichosted.com/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Self Regional Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1235.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Sentara Healthcare","FHIRPatientFacingURI":"https://epicfhir.sentara.com/ARR-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Shannon Health","FHIRPatientFacingURI":"https://epicrpx.shannonhealth.org/FHIR_ARR/api/FHIR/DSTU2/"},{"OrganizationName":"Singing River Health System","FHIRPatientFacingURI":"https://arr.mysrhs.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Skagit Regional Health","FHIRPatientFacingURI":"https://epicproxy.et1005.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"SolutionHealth","FHIRPatientFacingURI":"https://epicproxyprd.solutionhealth.org/FHIR_PROD/api/FHIR/DSTU2/"},{"OrganizationName":"South Georgia Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1024.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"South Shore Health System","FHIRPatientFacingURI":"https://SSHIC.southshorehealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Southcoast Health","FHIRPatientFacingURI":"https://epicpproxy.southcoast.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Southeast Health","FHIRPatientFacingURI":"https://arrprd.southeasthealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Southeastern Health","FHIRPatientFacingURI":"https://epicproxy.et0905.epichosted.com/FHIRproxy/SEH/api/FHIR/DSTU2/"},{"OrganizationName":"Southern Illinois Healthcare","FHIRPatientFacingURI":"https://epicproxy.et0986.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Sparrow Health System","FHIRPatientFacingURI":"https://haiku.sparrow.org/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Spartanburg Regional Healthcare System","FHIRPatientFacingURI":"https://epicproxy.et0939.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Spectrum Health","FHIRPatientFacingURI":"https://epicarr02.spectrumhealth.org/EpicFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Spectrum Health Lakeland","FHIRPatientFacingURI":"https://fhir.lakelandregional.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"SSM Health","FHIRPatientFacingURI":"https://fhir.ssmhc.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"St. Charles Health System","FHIRPatientFacingURI":"https://epicproxy.et1030.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"St. Elizabeth Healthcare","FHIRPatientFacingURI":"https://sehproxy.stelizabeth.com/arr-fhir/SEH/api/FHIR/DSTU2/"},{"OrganizationName":"St. Joseph Hospital Health Center","FHIRPatientFacingURI":"https://mobileproxy.sjhsyr.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"St. Jude Children\'s Research Hospital","FHIRPatientFacingURI":"https://rp.stjude.org/oauth2-prd/api/FHIR/DSTU2/"},{"OrganizationName":"St. Luke’s Health System (Idaho & Eastern Oregon)","FHIRPatientFacingURI":"https://epmobile.slhs.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"St. Luke\'s Hospital (North Carolina)","FHIRPatientFacingURI":"https://epicproxy.et0905.epichosted.com/FHIRproxy/STLU/api/FHIR/DSTU2/"},{"OrganizationName":"St. Luke\'s University Health Network","FHIRPatientFacingURI":"https://fhir.slhn.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Stanford Children\'s Health","FHIRPatientFacingURI":"https://epicproxy.et0857.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Stanford Health Care","FHIRPatientFacingURI":"https://sfd.stanfordmed.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Stormont Vail Health","FHIRPatientFacingURI":"https://epicsoap.stormontvail.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Summit Health","FHIRPatientFacingURI":"https://epicsoap.bmctotalcare.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"SUNY Upstate Medical University","FHIRPatientFacingURI":"https://epicedge.upstate.edu/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Sutter Health","FHIRPatientFacingURI":"https://apiservices.sutterhealth.org/ifs/api/FHIR/DSTU2/"},{"OrganizationName":"Tahoe Forest Health System","FHIRPatientFacingURI":"https://eprescribe.mercy.net/PRDFHIRAOK2/TAO/api/FHIR/DSTU2/"},{"OrganizationName":"Tampa General Hospital","FHIRPatientFacingURI":"https://epicproxy.et0761.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Tanner Health System","FHIRPatientFacingURI":"https://epicproxy.et1098.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"TempleHealth","FHIRPatientFacingURI":"https://epicaccess.templehealth.org/FhirProxyPrd/api/FHIR/DSTU2/"},{"OrganizationName":"Texas Children\'s Hospital","FHIRPatientFacingURI":"https://mobileapps.texaschildrens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Texas Health Resources","FHIRPatientFacingURI":"https://epproxy.texashealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The Brooklyn Hospital Center","FHIRPatientFacingURI":"https://epicproxy.et1043.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"The Christ Hospital","FHIRPatientFacingURI":"https://soapproxyprod.thechristhospital.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"The Everett Clinic","FHIRPatientFacingURI":"https://fhir.myeverettclinic.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"The Guthrie Clinic","FHIRPatientFacingURI":"https://fhir.guthrie.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"The Ohio State University Wexner Medical Center","FHIRPatientFacingURI":"https://ihismufhir.osumc.edu/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"The Portland Clinic","FHIRPatientFacingURI":"https://tpc-shield.tpcllp.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The Queen\'s Health Systems","FHIRPatientFacingURI":"https://mobileapps.queens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The Queen\'s Health Systems","FHIRPatientFacingURI":"https://mobileapps.queens.org/FHIR/api/FHIR/R4/"},{"OrganizationName":"The University of Texas Health Science Center at Houston","FHIRPatientFacingURI":"https://epicproxy.et1178.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"The University of Texas MD Anderson Cancer Center","FHIRPatientFacingURI":"https://fhir.mdanderson.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The University of Vermont Health Network","FHIRPatientFacingURI":"https://epicproxy.uvmhealth.org/FHIR-ARR/api/FHIR/DSTU2/"},{"OrganizationName":"The Vancouver Clinic","FHIRPatientFacingURI":"https://soapprod.tvc.org/ARR-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"ThedaCare","FHIRPatientFacingURI":"https://arr.thedacare.org/FHIR/TC/api/FHIR/DSTU2/"},{"OrganizationName":"TidalHealth","FHIRPatientFacingURI":"https://eweb.peninsula.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"TMC HealthCare","FHIRPatientFacingURI":"https://fhir.tmcaz.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Tower Health","FHIRPatientFacingURI":"https://epicsoap.readinghospital.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"TriHealth","FHIRPatientFacingURI":"https://epicscripts.trihealth.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Trinity Health","FHIRPatientFacingURI":"https://epic-ext.trinity-health.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Trinity Health Of New England","FHIRPatientFacingURI":"https://epicprdext.stfranciscare.org/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Trinity Health Of New England Medical Group Springfield","FHIRPatientFacingURI":"https://rmgpxy.riverbendmedical.com/fhir_proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Truckee Tahoe Medical Group","FHIRPatientFacingURI":"https://eprescribe.mercy.net/PRDFHIRAOK2/MTSM/api/FHIR/DSTU2/"},{"OrganizationName":"Tufts Medicine","FHIRPatientFacingURI":"https://intconfg-p.well-net.org/PRD-OAUTH2/api/FHIR/DSTU2/"},{"OrganizationName":"UC Davis Health","FHIRPatientFacingURI":"https://emrrp.ucdmc.ucdavis.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"UC Health","FHIRPatientFacingURI":"https://epic-soap.uchealth.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UChicago Medicine","FHIRPatientFacingURI":"https://interconapps.uchospitals.edu/PRD-FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"UCLA Medical Center","FHIRPatientFacingURI":"https://arrprox.mednet.ucla.edu/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"UConn Health","FHIRPatientFacingURI":"https://epicproxy.et0996.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UCSF Benioff Children\'s Hospital","FHIRPatientFacingURI":"https://unified-api.ucsf.edu/clinical/apex/api/FHIR/DSTU2/"},{"OrganizationName":"UCSF Health","FHIRPatientFacingURI":"https://unified-api.ucsf.edu/clinical/apex/api/FHIR/DSTU2/"},{"OrganizationName":"UF Health","FHIRPatientFacingURI":"https://epicsoap.shands.ufl.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"UHS San Antonio","FHIRPatientFacingURI":"https://epicproxy.et1130.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UI Health","FHIRPatientFacingURI":"https://epicproxy.et1085.epichosted.com/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"UK HealthCare","FHIRPatientFacingURI":"https://ukepicproxy.mc.uky.edu/Interconnect-PRD-OAuth2/api/FHIR/DSTU2/"},{"OrganizationName":"UMass Memorial Health Care","FHIRPatientFacingURI":"https://epicproxy.et0978.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UMC Southern Nevada","FHIRPatientFacingURI":"https://epicproxy.et1023.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UNC Health Care","FHIRPatientFacingURI":"https://epicfe.unch.unc.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"United Health Services New York (NYUHS)","FHIRPatientFacingURI":"https://epicproxy.et1127.epichosted.com/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"United Regional Health Care System","FHIRPatientFacingURI":"https://epicproxy.et1096.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UnityPoint Health","FHIRPatientFacingURI":"https://epicfhir.unitypoint.org/ProdFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"University Health Care System","FHIRPatientFacingURI":"https://soap.uhcs.org/IC-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"University Hospital (New Jersey)","FHIRPatientFacingURI":"https://epicarrprod.uhnj.org/FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Arkansas for Medical Sciences","FHIRPatientFacingURI":"https://ucsoap.uams.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of California Irvine","FHIRPatientFacingURI":"https://epicproxy.et0502.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of California San Diego","FHIRPatientFacingURI":"https://epicproxy.et0502.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Colorado Health","FHIRPatientFacingURI":"https://ss.uch.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Iowa Health Care","FHIRPatientFacingURI":"https://myepicapps.uihealthcare.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Kansas Health System","FHIRPatientFacingURI":"https://fhir.kansashealthsystem.com/interconnect-prd_fhir/api/FHIR/DSTU2/"},{"OrganizationName":"University of Louisville Physicians","FHIRPatientFacingURI":"https://epicproxy.et1193.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Maryland Medical System","FHIRPatientFacingURI":"https://fhir.umm.edu/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"University of Miami (UHealth)","FHIRPatientFacingURI":"https://uhealthsoap.med.miami.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Mississippi Medical Center","FHIRPatientFacingURI":"https://soapproxy.umc.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Pittsburgh Medical Center (UPMC)","FHIRPatientFacingURI":"https://epic-fhir-prd.upmc.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"University of Rochester Medical Center","FHIRPatientFacingURI":"https://ercd-sproxy.urmc.rochester.edu/mips/api/FHIR/DSTU2/"},{"OrganizationName":"University of Texas Medical Branch","FHIRPatientFacingURI":"https://epic-arr.utmb.edu/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"University of Texas Southwestern Medical Center","FHIRPatientFacingURI":"https://EpicIntprxyPRD.swmed.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"University of Toledo","FHIRPatientFacingURI":"https://icon.utoledo.edu/ic-oa2-prd/api/FHIR/DSTU2/"},{"OrganizationName":"University of Utah Healthcare","FHIRPatientFacingURI":"https://webproxyprd.med.utah.edu/FHIRMyChart/api/FHIR/DSTU2/"},{"OrganizationName":"UPMC Pinnacle","FHIRPatientFacingURI":"https://Epic-Arr.pinnaclehealth.org/PRD-FHIR-ARR/api/FHIR/DSTU2/"},{"OrganizationName":"UT Health San Antonio","FHIRPatientFacingURI":"https://api.utmsa.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"UVA Health System","FHIRPatientFacingURI":"https://hscsesoap.hscs.virginia.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UW Health And Affiliates - Wisconsin","FHIRPatientFacingURI":"https://epicproxy.hosp.wisc.edu/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UW Medicine (Washington)","FHIRPatientFacingURI":"https://fhir.epic.medical.washington.edu/FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Valley Children\'s Healthcare","FHIRPatientFacingURI":"https://ic.valleychildrens.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Valley Medical Center","FHIRPatientFacingURI":"https://FHIR.valleymed.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Valleywise Health","FHIRPatientFacingURI":"https://esoap.mihs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Vanderbilt","FHIRPatientFacingURI":"https://arr01.service.vumc.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"VCU Health","FHIRPatientFacingURI":"https://epicproxy.et1200.epichosted.com/OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Vidant Health","FHIRPatientFacingURI":"https://prd-proxy.vidanthealth.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Virginia Hospital Center","FHIRPatientFacingURI":"https://common.virginiahospitalcenter.com/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Virtua Health","FHIRPatientFacingURI":"https://epicproxy.et1017.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Waco Family Medicine (Heart of Texas Community Health Center)","FHIRPatientFacingURI":"https://haiku.wacofhc.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"WakeMed Health and Hospitals","FHIRPatientFacingURI":"https://epic-soap.wakemed.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Walmart","FHIRPatientFacingURI":"https://epicinterconnect.walmarthealth.com/Interconnect-OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Washington Hospital Healthcare System","FHIRPatientFacingURI":"https://psacesoap.whhs.com/interconnect-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Watson Clinic","FHIRPatientFacingURI":"https://epic-arr.watsonclinicad.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Weill Cornell Medicine","FHIRPatientFacingURI":"https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"WellSpan Health","FHIRPatientFacingURI":"https://interconnect.wellspan.org/interconnect-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"WellStar","FHIRPatientFacingURI":"https://epicsoap.wellstar.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"West Tennessee Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1243.epichosted.com/OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"West Virginia University Medicine","FHIRPatientFacingURI":"https://apps.mywvuchart.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Western Michigan University School of Medicine","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Yakima Valley Farm Workers Clinic","FHIRPatientFacingURI":"https://epicproxy.et0943.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Yale New Haven Health System","FHIRPatientFacingURI":"https://patientfhirapis.ynhh.org/pff/api/FHIR/DSTU2/"},{"OrganizationName":"Yuma Regional Medical Center","FHIRPatientFacingURI":"https://yrmccare1.yumaregional.org/FHIR/api/FHIR/DSTU2/"}]}');

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire21e7")

//# sourceMappingURL=index.975ef6c8.js.map
