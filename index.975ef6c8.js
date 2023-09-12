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
const urlParams = new URLSearchParams(window.location.search); // DH
console.log("urlParams: ", urlParams); // DH
console.log("urlParams.get('type'): ", urlParams.get("type")); // DH
console.log("urlParams.getAll('type'): ", urlParams.getAll("type"));
let allRevincludeParams = urlParams.getAll("revinclude");
let customQuery = "_revinclude=" + allRevincludeParams.join("&"); //
console.log("customQuery: ", customQuery);
let l = window.location;
const redirectUri = l.protocol + "//" + l.hostname + l.pathname.replace("index.html", "redirect.html");
console.log("redirectUri: " + redirectUri);
const getRegistration = (endpoint)=>({
        redirect_uri: redirectUri,
        client_id: (0, _smartJs.matchTags)(endpoint.tags, [
            [
                (tags)=>tags.includes("smart") && tags.includes("sandbox"),
                "default_client_id"
            ],
            // [tags => tags.includes('epic') && tags.includes('sandbox'), 'a1239704-a5a6-4c29-87ba-64b6f8b39c12'], // my-health-data non-production
            // [tags => tags.includes('epic') && tags.includes('production'), '9f9dd593-c9e0-4935-b6ac-cff672a73139'], // my-health-data production
            [
                (tags)=>tags.includes("epic") && tags.includes("sandbox"),
                "e2a16942-d018-4c87-a5cf-56ddd1e42b0a"
            ],
            [
                (tags)=>tags.includes("epic") && tags.includes("production"),
                "38ba791f-abac-458f-85fa-c2690bd7bbe0"
            ],
            [
                (tags)=>tags.includes("cerner") && tags.includes("sandbox"),
                "a7da8040-9a81-4495-8867-6af33e7e80d2"
            ],
            [
                (tags)=>tags.includes("cerner") && tags.includes("production"),
                "ebef9a74-0d0b-453f-87ed-a139e2a0465a"
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
console.log("endpoints: ", (0, _endpointsJsDefault.default));
// console.log("endpoints[1]: ", endpoints[1]);
// console.log("endpoints[1].fhirBaseUrl: " + endpoints[1].fhirBaseUrl);
// Eventually we'll have a UI
let serverPick = window.location.hash.slice(1) || "smart";
let fhirServerToTest = {
    smart: (0, _endpointsJsDefault.default)[0].fhirBaseUrl,
    // epic: endpoints[1].fhirBaseUrl, //older argonaut epic sandbox endpoint
    epicSandbox: (0, _endpointsJsDefault.default)[2].fhirBaseUrl,
    cernerSandbox: (0, _endpointsJsDefault.default)[4].fhirBaseUrl,
    cernerProduction: (0, _endpointsJsDefault.default)[447].fhirBaseUrl,
    // Epic Queen's DSTU2 368
    // Epic Queen's R4 369
    // Epic HPH 446
    epicQueens: (0, _endpointsJsDefault.default)[369].fhirBaseUrl,
    epicHph: (0, _endpointsJsDefault.default)[446].fhirBaseUrl
}[serverPick];
console.log("fhirServerToTest: " + fhirServerToTest);
const fhirInteraction = async (clientState, method, url, body)=>{
    const httpResponse = await fetch(url, {
        method: method,
        mode: "cors",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + clientState.tokenResponse.access_token
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
    console.log("query: ", query); // DH
    // const url = clientState.endpoint.fhirBaseUrl + '/' + subIn(relativeUrl) + '?' + queryString.stringify(query) // DH this is the original. the '/' is not needed and causes errors
    // I use either my own custom query or the original patientSearchQueries. Using patientSearchQueries returns an array of arrays.
    // I am hoping that customQueryString will return a single bundle.
    // I want to use a querystring of _type=Condition and trigger it from a query string in href e.g. ?qs=0
    // customQueryString = customQueryStrings[urlParams.get('qs')] // DH
    // const customQueryString =  // DH
    console.log("customQuery before url: ", customQuery);
    console.log("allRevincludeParams.length: ", allRevincludeParams.length);
    console.log("Object.keys(query).length === 0?:", Object.keys(query).length === 0);
    console.log("relativeUrl: ", relativeUrl);
    console.log("subIn(relativeUrl: ", subIn(relativeUrl));
    console.log("clientState.endpoint.fhirBaseUrl: ", clientState.endpoint.fhirBaseUrl);
    // this was used when I was adding a _revinclude
    // allRevincludeParams.length > 0
    // ? clientState.endpoint.fhirBaseUrl +
    //   subIn(relativeUrl) +
    //   "&" +
    //   customQuery // ... when there is a query in the url
    //
    // no "?" if patientQuery
    // query.length === 1  // empty object like patientSearchQuery
    // console.log('clientState.endpoint: ', clientState.endpoint)
    // const url = clientState.endpoint.fhirBaseUrl + subIn(relativeUrl) + '/$everything'  // this produces an error on epic
    // "&" +
    // customQuery // ... when there is a query in the url
    const url = Object.keys(query).length === 0 // empty object like patientSearchQuery
     ? clientState.endpoint.fhirBaseUrl + subIn(relativeUrl) // +
     : clientState.endpoint.fhirBaseUrl + subIn(relativeUrl) + "?" + (0, _queryStringDefault.default).stringify(query); // ... when using patientSearchQueries
    console.log("url: " + url);
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
    // const patientReadQueries = [["Patient/{{patient}}"]];   // this produces a patient resource
    const patientReadQueries = [
        [
            "Patient?_id={{patient}}"
        ]
    ]; // this produces a bundle
    // const patientReadQueries = [["?_type=AllergyIntolerance,Condition&subject:Patient={{patient}}"]];  // what will this one do?
    const patientSearchQueries = [
        // all comments relate to epic sandbox
        // ["Patient"],  // this will trigger an OperationOutcome complaint: Patient is ignored
        [
            "Observation",
            {
                category: "laboratory"
            }
        ],
        [
            "Observation",
            {
                category: "vital-signs"
            }
        ],
        [
            "Observation",
            {
                category: "social-history"
            }
        ],
        // ['MedicationOrder'],  // ...this resource is not listed in Epic, so no luck; try again with USCDI -> no good
        // ['MedicationStatement'], // not in epic list; is in USCDI  -> no good
        // ['MedicationDispense'], // DH no luck with this one even though it is listed in epic
        [
            "MedicationRequest"
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
        ],
        // from hear I start adding things that are in epic sandbox but not yet here
        [
            "Condition"
        ],
        // ['Medication'], // epic sandbox calls this a bad request, but I'll try again; -> bad request
        // ['Coverage'], // fails when Epic client registration resources are limited to USCDI
        // candidates:
        // from here down if it is commented out it caused bad request (400), forbidden (403) or not found (404) error
        [
            "Device"
        ],
        // ['DeviceUseStatement'], // fails when Epic client registration resources are limited to USCDI
        [
            "DiagnosticReport"
        ],
        [
            "Encounter"
        ],
        // ['EpisodeOfCare'],
        // ['ExplanationOfBenefit'],
        // ['FamilyMemberHistory'],
        // ['Flag'], // fails when Epic client registration resources are limited to USCDI
        [
            "Goal"
        ],
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
        [
            "CareTeam"
        ]
    ].map(withPatient);
    // this can be useful if you need to pass parameters through the url
    // const queries = // DH
    //   allRevincludeParams.length > 0 // DH
    //     ? patientReadQueries // DH
    //     : patientReadQueries.concat(patientSearchQueries); // DH
    const queries = patientReadQueries.concat(patientSearchQueries); // DH
    // const queries = patientReadQueries // DH sometimes useful for testing// DH
    console.log("queries: ", queries);
    const pending = queries.map((args)=>client.get(...args)).map(client.drainPages);
    console.log("pending: ", pending);
    const results = await Promise.all(pending);
    console.log("results", results);
});

},{"babel-polyfill":"7LKiE","./smart.js":"2hecu","query-string":"11cDl","./endpoints.js":"44Ppo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7LKiE":[function(require,module,exports) {
var global = arguments[3];
"use strict";
require("core-js/shim");
require("regenerator-runtime/runtime");
require("core-js/fn/regexp/escape");
if (global._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
global._babelPolyfill = true;
var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
    O[key] || Object[DEFINE_PROPERTY](O, key, {
        writable: true,
        configurable: true,
        value: value
    });
}
define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);
"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key) {
    [][key] && define(Array, key, Function.call.bind([][key]));
});

},{"core-js/shim":"7GhG8","regenerator-runtime/runtime":"dXNgZ","core-js/fn/regexp/escape":"4Rfsd"}],"7GhG8":[function(require,module,exports) {
require("./modules/es6.symbol");
require("./modules/es6.object.create");
require("./modules/es6.object.define-property");
require("./modules/es6.object.define-properties");
require("./modules/es6.object.get-own-property-descriptor");
require("./modules/es6.object.get-prototype-of");
require("./modules/es6.object.keys");
require("./modules/es6.object.get-own-property-names");
require("./modules/es6.object.freeze");
require("./modules/es6.object.seal");
require("./modules/es6.object.prevent-extensions");
require("./modules/es6.object.is-frozen");
require("./modules/es6.object.is-sealed");
require("./modules/es6.object.is-extensible");
require("./modules/es6.object.assign");
require("./modules/es6.object.is");
require("./modules/es6.object.set-prototype-of");
require("./modules/es6.object.to-string");
require("./modules/es6.function.bind");
require("./modules/es6.function.name");
require("./modules/es6.function.has-instance");
require("./modules/es6.parse-int");
require("./modules/es6.parse-float");
require("./modules/es6.number.constructor");
require("./modules/es6.number.to-fixed");
require("./modules/es6.number.to-precision");
require("./modules/es6.number.epsilon");
require("./modules/es6.number.is-finite");
require("./modules/es6.number.is-integer");
require("./modules/es6.number.is-nan");
require("./modules/es6.number.is-safe-integer");
require("./modules/es6.number.max-safe-integer");
require("./modules/es6.number.min-safe-integer");
require("./modules/es6.number.parse-float");
require("./modules/es6.number.parse-int");
require("./modules/es6.math.acosh");
require("./modules/es6.math.asinh");
require("./modules/es6.math.atanh");
require("./modules/es6.math.cbrt");
require("./modules/es6.math.clz32");
require("./modules/es6.math.cosh");
require("./modules/es6.math.expm1");
require("./modules/es6.math.fround");
require("./modules/es6.math.hypot");
require("./modules/es6.math.imul");
require("./modules/es6.math.log10");
require("./modules/es6.math.log1p");
require("./modules/es6.math.log2");
require("./modules/es6.math.sign");
require("./modules/es6.math.sinh");
require("./modules/es6.math.tanh");
require("./modules/es6.math.trunc");
require("./modules/es6.string.from-code-point");
require("./modules/es6.string.raw");
require("./modules/es6.string.trim");
require("./modules/es6.string.iterator");
require("./modules/es6.string.code-point-at");
require("./modules/es6.string.ends-with");
require("./modules/es6.string.includes");
require("./modules/es6.string.repeat");
require("./modules/es6.string.starts-with");
require("./modules/es6.string.anchor");
require("./modules/es6.string.big");
require("./modules/es6.string.blink");
require("./modules/es6.string.bold");
require("./modules/es6.string.fixed");
require("./modules/es6.string.fontcolor");
require("./modules/es6.string.fontsize");
require("./modules/es6.string.italics");
require("./modules/es6.string.link");
require("./modules/es6.string.small");
require("./modules/es6.string.strike");
require("./modules/es6.string.sub");
require("./modules/es6.string.sup");
require("./modules/es6.date.now");
require("./modules/es6.date.to-json");
require("./modules/es6.date.to-iso-string");
require("./modules/es6.date.to-string");
require("./modules/es6.date.to-primitive");
require("./modules/es6.array.is-array");
require("./modules/es6.array.from");
require("./modules/es6.array.of");
require("./modules/es6.array.join");
require("./modules/es6.array.slice");
require("./modules/es6.array.sort");
require("./modules/es6.array.for-each");
require("./modules/es6.array.map");
require("./modules/es6.array.filter");
require("./modules/es6.array.some");
require("./modules/es6.array.every");
require("./modules/es6.array.reduce");
require("./modules/es6.array.reduce-right");
require("./modules/es6.array.index-of");
require("./modules/es6.array.last-index-of");
require("./modules/es6.array.copy-within");
require("./modules/es6.array.fill");
require("./modules/es6.array.find");
require("./modules/es6.array.find-index");
require("./modules/es6.array.species");
require("./modules/es6.array.iterator");
require("./modules/es6.regexp.constructor");
require("./modules/es6.regexp.exec");
require("./modules/es6.regexp.to-string");
require("./modules/es6.regexp.flags");
require("./modules/es6.regexp.match");
require("./modules/es6.regexp.replace");
require("./modules/es6.regexp.search");
require("./modules/es6.regexp.split");
require("./modules/es6.promise");
require("./modules/es6.map");
require("./modules/es6.set");
require("./modules/es6.weak-map");
require("./modules/es6.weak-set");
require("./modules/es6.typed.array-buffer");
require("./modules/es6.typed.data-view");
require("./modules/es6.typed.int8-array");
require("./modules/es6.typed.uint8-array");
require("./modules/es6.typed.uint8-clamped-array");
require("./modules/es6.typed.int16-array");
require("./modules/es6.typed.uint16-array");
require("./modules/es6.typed.int32-array");
require("./modules/es6.typed.uint32-array");
require("./modules/es6.typed.float32-array");
require("./modules/es6.typed.float64-array");
require("./modules/es6.reflect.apply");
require("./modules/es6.reflect.construct");
require("./modules/es6.reflect.define-property");
require("./modules/es6.reflect.delete-property");
require("./modules/es6.reflect.enumerate");
require("./modules/es6.reflect.get");
require("./modules/es6.reflect.get-own-property-descriptor");
require("./modules/es6.reflect.get-prototype-of");
require("./modules/es6.reflect.has");
require("./modules/es6.reflect.is-extensible");
require("./modules/es6.reflect.own-keys");
require("./modules/es6.reflect.prevent-extensions");
require("./modules/es6.reflect.set");
require("./modules/es6.reflect.set-prototype-of");
require("./modules/es7.array.includes");
require("./modules/es7.array.flat-map");
require("./modules/es7.array.flatten");
require("./modules/es7.string.at");
require("./modules/es7.string.pad-start");
require("./modules/es7.string.pad-end");
require("./modules/es7.string.trim-left");
require("./modules/es7.string.trim-right");
require("./modules/es7.string.match-all");
require("./modules/es7.symbol.async-iterator");
require("./modules/es7.symbol.observable");
require("./modules/es7.object.get-own-property-descriptors");
require("./modules/es7.object.values");
require("./modules/es7.object.entries");
require("./modules/es7.object.define-getter");
require("./modules/es7.object.define-setter");
require("./modules/es7.object.lookup-getter");
require("./modules/es7.object.lookup-setter");
require("./modules/es7.map.to-json");
require("./modules/es7.set.to-json");
require("./modules/es7.map.of");
require("./modules/es7.set.of");
require("./modules/es7.weak-map.of");
require("./modules/es7.weak-set.of");
require("./modules/es7.map.from");
require("./modules/es7.set.from");
require("./modules/es7.weak-map.from");
require("./modules/es7.weak-set.from");
require("./modules/es7.global");
require("./modules/es7.system.global");
require("./modules/es7.error.is-error");
require("./modules/es7.math.clamp");
require("./modules/es7.math.deg-per-rad");
require("./modules/es7.math.degrees");
require("./modules/es7.math.fscale");
require("./modules/es7.math.iaddh");
require("./modules/es7.math.isubh");
require("./modules/es7.math.imulh");
require("./modules/es7.math.rad-per-deg");
require("./modules/es7.math.radians");
require("./modules/es7.math.scale");
require("./modules/es7.math.umulh");
require("./modules/es7.math.signbit");
require("./modules/es7.promise.finally");
require("./modules/es7.promise.try");
require("./modules/es7.reflect.define-metadata");
require("./modules/es7.reflect.delete-metadata");
require("./modules/es7.reflect.get-metadata");
require("./modules/es7.reflect.get-metadata-keys");
require("./modules/es7.reflect.get-own-metadata");
require("./modules/es7.reflect.get-own-metadata-keys");
require("./modules/es7.reflect.has-metadata");
require("./modules/es7.reflect.has-own-metadata");
require("./modules/es7.reflect.metadata");
require("./modules/es7.asap");
require("./modules/es7.observable");
require("./modules/web.timers");
require("./modules/web.immediate");
require("./modules/web.dom.iterable");
module.exports = require("./modules/_core");

},{"./modules/es6.symbol":"fUQxd","./modules/es6.object.create":"iklZv","./modules/es6.object.define-property":"2JxTY","./modules/es6.object.define-properties":"1cFbl","./modules/es6.object.get-own-property-descriptor":"5sxjB","./modules/es6.object.get-prototype-of":"5fsye","./modules/es6.object.keys":"8woaa","./modules/es6.object.get-own-property-names":"dGCli","./modules/es6.object.freeze":"cb5HM","./modules/es6.object.seal":"j3qY2","./modules/es6.object.prevent-extensions":"2KuMq","./modules/es6.object.is-frozen":"GTKvk","./modules/es6.object.is-sealed":"K45hu","./modules/es6.object.is-extensible":"23gjD","./modules/es6.object.assign":"8DvpM","./modules/es6.object.is":"e23no","./modules/es6.object.set-prototype-of":"d3fGn","./modules/es6.object.to-string":"7cLOk","./modules/es6.function.bind":"54Dqr","./modules/es6.function.name":"lmg4B","./modules/es6.function.has-instance":"flBdS","./modules/es6.parse-int":"l30ZK","./modules/es6.parse-float":"edHLy","./modules/es6.number.constructor":"b3DG0","./modules/es6.number.to-fixed":"jVWO1","./modules/es6.number.to-precision":"fkTCt","./modules/es6.number.epsilon":"dS5u0","./modules/es6.number.is-finite":"gaJ9D","./modules/es6.number.is-integer":"cXfOC","./modules/es6.number.is-nan":"dHEdL","./modules/es6.number.is-safe-integer":"8WZJi","./modules/es6.number.max-safe-integer":"lEoVS","./modules/es6.number.min-safe-integer":"6GYXq","./modules/es6.number.parse-float":"adyPr","./modules/es6.number.parse-int":"cz541","./modules/es6.math.acosh":"atazc","./modules/es6.math.asinh":"9vCFA","./modules/es6.math.atanh":"1Poi7","./modules/es6.math.cbrt":"kEyNP","./modules/es6.math.clz32":"asnnc","./modules/es6.math.cosh":"672oR","./modules/es6.math.expm1":"eLul3","./modules/es6.math.fround":"6JW0t","./modules/es6.math.hypot":"1rcXM","./modules/es6.math.imul":"lAxVU","./modules/es6.math.log10":"fIjzt","./modules/es6.math.log1p":"kK15h","./modules/es6.math.log2":"kkgGM","./modules/es6.math.sign":"18Gp0","./modules/es6.math.sinh":"bkULm","./modules/es6.math.tanh":"br08o","./modules/es6.math.trunc":"8fixj","./modules/es6.string.from-code-point":"gsGce","./modules/es6.string.raw":"4MADL","./modules/es6.string.trim":"hEKob","./modules/es6.string.iterator":"llgDB","./modules/es6.string.code-point-at":"doYwG","./modules/es6.string.ends-with":"39nwy","./modules/es6.string.includes":"9JmYp","./modules/es6.string.repeat":"cqBCd","./modules/es6.string.starts-with":"iMejr","./modules/es6.string.anchor":"97Lll","./modules/es6.string.big":"7nKCA","./modules/es6.string.blink":"jbxAT","./modules/es6.string.bold":"4MfGp","./modules/es6.string.fixed":"4y2Bb","./modules/es6.string.fontcolor":"lmhCi","./modules/es6.string.fontsize":"hL89C","./modules/es6.string.italics":"iwOAc","./modules/es6.string.link":"e07IC","./modules/es6.string.small":"2MSNU","./modules/es6.string.strike":"8kiXd","./modules/es6.string.sub":"iprh9","./modules/es6.string.sup":"doHpa","./modules/es6.date.now":"4HGro","./modules/es6.date.to-json":"7Glbw","./modules/es6.date.to-iso-string":"hQdLT","./modules/es6.date.to-string":"d3yLX","./modules/es6.date.to-primitive":"hoeNq","./modules/es6.array.is-array":"5g48E","./modules/es6.array.from":"i3Nvz","./modules/es6.array.of":"aLmME","./modules/es6.array.join":"lQMhQ","./modules/es6.array.slice":"4E6IU","./modules/es6.array.sort":"lAyeU","./modules/es6.array.for-each":"7cxLy","./modules/es6.array.map":"j4ARR","./modules/es6.array.filter":"5vJuE","./modules/es6.array.some":"iKQGA","./modules/es6.array.every":"5xxJY","./modules/es6.array.reduce":"8tM5y","./modules/es6.array.reduce-right":"aNHFx","./modules/es6.array.index-of":"76kRN","./modules/es6.array.last-index-of":"lEw3U","./modules/es6.array.copy-within":"4xbJW","./modules/es6.array.fill":"bimjQ","./modules/es6.array.find":"cKonp","./modules/es6.array.find-index":"t506G","./modules/es6.array.species":"2S6HD","./modules/es6.array.iterator":"1xhrt","./modules/es6.regexp.constructor":"gc5Or","./modules/es6.regexp.exec":"fcvkD","./modules/es6.regexp.to-string":"aX2Wn","./modules/es6.regexp.flags":"4cXUu","./modules/es6.regexp.match":"93slC","./modules/es6.regexp.replace":"bsjVi","./modules/es6.regexp.search":"ldewt","./modules/es6.regexp.split":"iJScv","./modules/es6.promise":"2sSjP","./modules/es6.map":"1kXi9","./modules/es6.set":"61Y2Y","./modules/es6.weak-map":"dAOwL","./modules/es6.weak-set":"blRp6","./modules/es6.typed.array-buffer":"dp2Nn","./modules/es6.typed.data-view":"FLhcC","./modules/es6.typed.int8-array":"2PtAR","./modules/es6.typed.uint8-array":"g4j5m","./modules/es6.typed.uint8-clamped-array":"68vHx","./modules/es6.typed.int16-array":"iZyZL","./modules/es6.typed.uint16-array":"4Jyn3","./modules/es6.typed.int32-array":"dSRiX","./modules/es6.typed.uint32-array":"lKCGR","./modules/es6.typed.float32-array":"fASXR","./modules/es6.typed.float64-array":"e3YAQ","./modules/es6.reflect.apply":"kstrm","./modules/es6.reflect.construct":"fXcT1","./modules/es6.reflect.define-property":"kibOK","./modules/es6.reflect.delete-property":"2NlGq","./modules/es6.reflect.enumerate":"iKC7x","./modules/es6.reflect.get":"dIqbe","./modules/es6.reflect.get-own-property-descriptor":"lSfAN","./modules/es6.reflect.get-prototype-of":"aO9N4","./modules/es6.reflect.has":"4HzcT","./modules/es6.reflect.is-extensible":"dmYlo","./modules/es6.reflect.own-keys":"15duj","./modules/es6.reflect.prevent-extensions":"cC4pR","./modules/es6.reflect.set":"dl5fS","./modules/es6.reflect.set-prototype-of":"jH9nI","./modules/es7.array.includes":"9KPxe","./modules/es7.array.flat-map":"lKIEm","./modules/es7.array.flatten":"lpb4z","./modules/es7.string.at":"eVq5h","./modules/es7.string.pad-start":"kxeDX","./modules/es7.string.pad-end":"6j6XE","./modules/es7.string.trim-left":"4dYUb","./modules/es7.string.trim-right":"5yndh","./modules/es7.string.match-all":"cZhYH","./modules/es7.symbol.async-iterator":"8vHXs","./modules/es7.symbol.observable":"jDpxk","./modules/es7.object.get-own-property-descriptors":"k5woh","./modules/es7.object.values":"kQJLQ","./modules/es7.object.entries":"7zW9M","./modules/es7.object.define-getter":"92ysW","./modules/es7.object.define-setter":"emt8A","./modules/es7.object.lookup-getter":"9LH3Q","./modules/es7.object.lookup-setter":"kEN8G","./modules/es7.map.to-json":"7iBxS","./modules/es7.set.to-json":"exanP","./modules/es7.map.of":"dT1Dc","./modules/es7.set.of":"jSRTa","./modules/es7.weak-map.of":"39wfA","./modules/es7.weak-set.of":"ikieO","./modules/es7.map.from":"2MGKl","./modules/es7.set.from":"3AF6v","./modules/es7.weak-map.from":"23jtR","./modules/es7.weak-set.from":"hJc4O","./modules/es7.global":"lshq0","./modules/es7.system.global":"aLRNx","./modules/es7.error.is-error":"3xhVh","./modules/es7.math.clamp":"bZ0NA","./modules/es7.math.deg-per-rad":"gOGEZ","./modules/es7.math.degrees":"cdQDY","./modules/es7.math.fscale":"fR5LK","./modules/es7.math.iaddh":"5Jbi2","./modules/es7.math.isubh":"hrxFs","./modules/es7.math.imulh":"i4YiT","./modules/es7.math.rad-per-deg":"il4w2","./modules/es7.math.radians":"7RQmX","./modules/es7.math.scale":"jOPwg","./modules/es7.math.umulh":"8NRee","./modules/es7.math.signbit":"ePksm","./modules/es7.promise.finally":"2JMTL","./modules/es7.promise.try":"2RsT8","./modules/es7.reflect.define-metadata":"iQ9qT","./modules/es7.reflect.delete-metadata":"4glRb","./modules/es7.reflect.get-metadata":"kmvi8","./modules/es7.reflect.get-metadata-keys":"6bA9p","./modules/es7.reflect.get-own-metadata":"jebxh","./modules/es7.reflect.get-own-metadata-keys":"jGnWP","./modules/es7.reflect.has-metadata":"bZiK8","./modules/es7.reflect.has-own-metadata":"khZMr","./modules/es7.reflect.metadata":"dQNHX","./modules/es7.asap":"eXG8y","./modules/es7.observable":"dqE8O","./modules/web.timers":"dl3SO","./modules/web.immediate":"49tUX","./modules/web.dom.iterable":"iv8Qo","./modules/_core":"4o9Ko"}],"fUQxd":[function(require,module,exports) {
"use strict";
// ECMAScript 6 symbols shim
var global = require("./_global");
var has = require("./_has");
var DESCRIPTORS = require("./_descriptors");
var $export = require("./_export");
var redefine = require("./_redefine");
var META = require("./_meta").KEY;
var $fails = require("./_fails");
var shared = require("./_shared");
var setToStringTag = require("./_set-to-string-tag");
var uid = require("./_uid");
var wks = require("./_wks");
var wksExt = require("./_wks-ext");
var wksDefine = require("./_wks-define");
var enumKeys = require("./_enum-keys");
var isArray = require("./_is-array");
var anObject = require("./_an-object");
var isObject = require("./_is-object");
var toIObject = require("./_to-iobject");
var toPrimitive = require("./_to-primitive");
var createDesc = require("./_property-desc");
var _create = require("./_object-create");
var gOPNExt = require("./_object-gopn-ext");
var $GOPD = require("./_object-gopd");
var $DP = require("./_object-dp");
var $keys = require("./_object-keys");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = "prototype";
var HIDDEN = wks("_hidden");
var TO_PRIMITIVE = wks("toPrimitive");
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared("symbol-registry");
var AllSymbols = shared("symbols");
var OPSymbols = shared("op-symbols");
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == "function";
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function() {
    return _create(dP({}, "a", {
        get: function() {
            return dP(this, "a", {
                value: 7
            }).a;
        }
    })).a != 7;
}) ? function(it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
};
var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
        if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
        } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, {
                enumerable: createDesc(0, false)
            });
        }
        return setSymbolDesc(it, key, D);
    }
    return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while(l > i)$defineProperty(it, key = keys[i++], P[key]);
    return it;
};
var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while(names.length > i)if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while(names.length > i)if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    return result;
};
// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
    $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
            configurable: true,
            set: $set
        });
        return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], "toString", function toString() {
        return this._k;
    });
    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    require("./_object-gopn").f = gOPNExt.f = $getOwnPropertyNames;
    require("./_object-pie").f = $propertyIsEnumerable;
    require("./_object-gops").f = $getOwnPropertySymbols;
    if (DESCRIPTORS && !require("./_library")) redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
    wksExt.f = function(name) {
        return wrap(wks(name));
    };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
    Symbol: $Symbol
});
for(var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
for(var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;)wksDefine(wellKnownSymbols[k++]);
$export($export.S + $export.F * !USE_NATIVE, "Symbol", {
    // 19.4.2.1 Symbol.for(key)
    "for": function(key) {
        return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
        for(var key in SymbolRegistry)if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function() {
        setter = true;
    },
    useSimple: function() {
        setter = false;
    }
});
$export($export.S + $export.F * !USE_NATIVE, "Object", {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
});
// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([
        S
    ]) != "[null]" || _stringify({
        a: S
    }) != "{}" || _stringify(Object(S)) != "{}";
})), "JSON", {
    stringify: function stringify(it) {
        var args = [
            it
        ];
        var i = 1;
        var replacer, $replacer;
        while(arguments.length > i)args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray(replacer)) replacer = function(key, value) {
            if (typeof $replacer == "function") value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
    }
});
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require("./_hide")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, "Symbol");
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, "Math", true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, "JSON", true);

},{"./_global":"8xCse","./_has":"biQ7v","./_descriptors":"dr2tY","./_export":"1Tgvm","./_redefine":"9vAu7","./_meta":"043Qa","./_fails":"iAFH1","./_shared":"9XC5J","./_set-to-string-tag":"7YXlq","./_uid":"gBq6n","./_wks":"eaoKZ","./_wks-ext":"2dxMf","./_wks-define":"28rGc","./_enum-keys":"c7wJO","./_is-array":"dTLRt","./_an-object":"kiL2X","./_is-object":"eIE5K","./_to-iobject":"f9RCz","./_to-primitive":"4Oubb","./_property-desc":"825qY","./_object-create":"b4m8n","./_object-gopn-ext":"2is9e","./_object-gopd":"4bAUG","./_object-dp":"cLcWd","./_object-keys":"98CC0","./_object-gopn":"jK0Om","./_object-pie":"2aUxV","./_object-gops":"5oH2C","./_library":"lmtqY","./_hide":"ddpVq"}],"8xCse":[function(require,module,exports) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

},{}],"biQ7v":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
};

},{}],"dr2tY":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require("./_fails")(function() {
    return Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"./_fails":"iAFH1"}],"iAFH1":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
};

},{}],"1Tgvm":[function(require,module,exports) {
var global = require("./_global");
var core = require("./_core");
var hide = require("./_hide");
var redefine = require("./_redefine");
var ctx = require("./_ctx");
var PROTOTYPE = "prototype";
var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for(key in source){
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        // extend global
        if (target) redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"8xCse","./_core":"4o9Ko","./_hide":"ddpVq","./_redefine":"9vAu7","./_ctx":"4rQSm"}],"4o9Ko":[function(require,module,exports) {
var core = module.exports = {
    version: "2.6.5"
};
if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

},{}],"ddpVq":[function(require,module,exports) {
var dP = require("./_object-dp");
var createDesc = require("./_property-desc");
module.exports = require("./_descriptors") ? function(object, key, value) {
    return dP.f(object, key, createDesc(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"./_object-dp":"cLcWd","./_property-desc":"825qY","./_descriptors":"dr2tY"}],"cLcWd":[function(require,module,exports) {
var anObject = require("./_an-object");
var IE8_DOM_DEFINE = require("./_ie8-dom-define");
var toPrimitive = require("./_to-primitive");
var dP = Object.defineProperty;
exports.f = require("./_descriptors") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
    } catch (e) {}
    if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"./_an-object":"kiL2X","./_ie8-dom-define":"cIJOj","./_to-primitive":"4Oubb","./_descriptors":"dr2tY"}],"kiL2X":[function(require,module,exports) {
var isObject = require("./_is-object");
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(it + " is not an object!");
    return it;
};

},{"./_is-object":"eIE5K"}],"eIE5K":[function(require,module,exports) {
module.exports = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
};

},{}],"cIJOj":[function(require,module,exports) {
module.exports = !require("./_descriptors") && !require("./_fails")(function() {
    return Object.defineProperty(require("./_dom-create")("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"./_descriptors":"dr2tY","./_fails":"iAFH1","./_dom-create":"2qBag"}],"2qBag":[function(require,module,exports) {
var isObject = require("./_is-object");
var document = require("./_global").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return is ? document.createElement(it) : {};
};

},{"./_is-object":"eIE5K","./_global":"8xCse"}],"4Oubb":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require("./_is-object");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"eIE5K"}],"825qY":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"9vAu7":[function(require,module,exports) {
var global = require("./_global");
var hide = require("./_hide");
var has = require("./_has");
var SRC = require("./_uid")("src");
var $toString = require("./_function-to-string");
var TO_STRING = "toString";
var TPL = ("" + $toString).split(TO_STRING);
require("./_core").inspectSource = function(it) {
    return $toString.call(it);
};
(module.exports = function(O, key, val, safe) {
    var isFunction = typeof val == "function";
    if (isFunction) has(val, "name") || hide(val, "name", key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
    if (O === global) O[key] = val;
    else if (!safe) {
        delete O[key];
        hide(O, key, val);
    } else if (O[key]) O[key] = val;
    else hide(O, key, val);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
    return typeof this == "function" && this[SRC] || $toString.call(this);
});

},{"./_global":"8xCse","./_hide":"ddpVq","./_has":"biQ7v","./_uid":"gBq6n","./_function-to-string":"5IPoO","./_core":"4o9Ko"}],"gBq6n":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function(key) {
    return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
};

},{}],"5IPoO":[function(require,module,exports) {
module.exports = require("./_shared")("native-function-to-string", Function.toString);

},{"./_shared":"9XC5J"}],"9XC5J":[function(require,module,exports) {
var core = require("./_core");
var global = require("./_global");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: core.version,
    mode: require("./_library") ? "pure" : "global",
    copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
});

},{"./_core":"4o9Ko","./_global":"8xCse","./_library":"lmtqY"}],"lmtqY":[function(require,module,exports) {
module.exports = false;

},{}],"4rQSm":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require("./_a-function");
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"./_a-function":"55L9l"}],"55L9l":[function(require,module,exports) {
module.exports = function(it) {
    if (typeof it != "function") throw TypeError(it + " is not a function!");
    return it;
};

},{}],"043Qa":[function(require,module,exports) {
var META = require("./_uid")("meta");
var isObject = require("./_is-object");
var has = require("./_has");
var setDesc = require("./_object-dp").f;
var id = 0;
var isExtensible = Object.isExtensible || function() {
    return true;
};
var FREEZE = !require("./_fails")(function() {
    return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it) {
    setDesc(it, META, {
        value: {
            i: "O" + ++id,
            w: {} // weak collections IDs
        }
    });
};
var fastKey = function(it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
    if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return "F";
        // not necessary to add metadata
        if (!create) return "E";
        // add missing metadata
        setMeta(it);
    // return object ID
    }
    return it[META].i;
};
var getWeak = function(it, create) {
    if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
    // return hash weak collections IDs
    }
    return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
};
var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
};

},{"./_uid":"gBq6n","./_is-object":"eIE5K","./_has":"biQ7v","./_object-dp":"cLcWd","./_fails":"iAFH1"}],"7YXlq":[function(require,module,exports) {
var def = require("./_object-dp").f;
var has = require("./_has");
var TAG = require("./_wks")("toStringTag");
module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
    });
};

},{"./_object-dp":"cLcWd","./_has":"biQ7v","./_wks":"eaoKZ"}],"eaoKZ":[function(require,module,exports) {
var store = require("./_shared")("wks");
var uid = require("./_uid");
var Symbol = require("./_global").Symbol;
var USE_SYMBOL = typeof Symbol == "function";
var $exports = module.exports = function(name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
};
$exports.store = store;

},{"./_shared":"9XC5J","./_uid":"gBq6n","./_global":"8xCse"}],"2dxMf":[function(require,module,exports) {
exports.f = require("./_wks");

},{"./_wks":"eaoKZ"}],"28rGc":[function(require,module,exports) {
var global = require("./_global");
var core = require("./_core");
var LIBRARY = require("./_library");
var wksExt = require("./_wks-ext");
var defineProperty = require("./_object-dp").f;
module.exports = function(name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
        value: wksExt.f(name)
    });
};

},{"./_global":"8xCse","./_core":"4o9Ko","./_library":"lmtqY","./_wks-ext":"2dxMf","./_object-dp":"cLcWd"}],"c7wJO":[function(require,module,exports) {
// all enumerable object keys, includes symbols
var getKeys = require("./_object-keys");
var gOPS = require("./_object-gops");
var pIE = require("./_object-pie");
module.exports = function(it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;
    if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while(symbols.length > i)if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
    return result;
};

},{"./_object-keys":"98CC0","./_object-gops":"5oH2C","./_object-pie":"2aUxV"}],"98CC0":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require("./_object-keys-internal");
var enumBugKeys = require("./_enum-bug-keys");
module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"x7vs4","./_enum-bug-keys":"NGsf4"}],"x7vs4":[function(require,module,exports) {
var has = require("./_has");
var toIObject = require("./_to-iobject");
var arrayIndexOf = require("./_array-includes")(false);
var IE_PROTO = require("./_shared-key")("IE_PROTO");
module.exports = function(object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
    return result;
};

},{"./_has":"biQ7v","./_to-iobject":"f9RCz","./_array-includes":"1Ebaw","./_shared-key":"kPb7V"}],"f9RCz":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require("./_iobject");
var defined = require("./_defined");
module.exports = function(it) {
    return IObject(defined(it));
};

},{"./_iobject":"24JwK","./_defined":"4Lj5U"}],"24JwK":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require("./_cof");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == "String" ? it.split("") : Object(it);
};

},{"./_cof":"frIbo"}],"frIbo":[function(require,module,exports) {
var toString = {}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};

},{}],"4Lj5U":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
};

},{}],"1Ebaw":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require("./_to-iobject");
var toLength = require("./_to-length");
var toAbsoluteIndex = require("./_to-absolute-index");
module.exports = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++)if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};

},{"./_to-iobject":"f9RCz","./_to-length":"irYfS","./_to-absolute-index":"1lPjf"}],"irYfS":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require("./_to-integer");
var min = Math.min;
module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"cb0GT"}],"cb0GT":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"1lPjf":[function(require,module,exports) {
var toInteger = require("./_to-integer");
var max = Math.max;
var min = Math.min;
module.exports = function(index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"cb0GT"}],"kPb7V":[function(require,module,exports) {
var shared = require("./_shared")("keys");
var uid = require("./_uid");
module.exports = function(key) {
    return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"9XC5J","./_uid":"gBq6n"}],"NGsf4":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

},{}],"5oH2C":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"2aUxV":[function(require,module,exports) {
exports.f = ({}).propertyIsEnumerable;

},{}],"dTLRt":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require("./_cof");
module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == "Array";
};

},{"./_cof":"frIbo"}],"b4m8n":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require("./_an-object");
var dPs = require("./_object-dps");
var enumBugKeys = require("./_enum-bug-keys");
var IE_PROTO = require("./_shared-key")("IE_PROTO");
var Empty = function() {};
var PROTOTYPE = "prototype";
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = require("./_dom-create")("iframe");
    var i = enumBugKeys.length;
    var lt = "<";
    var gt = ">";
    var iframeDocument;
    iframe.style.display = "none";
    require("./_html").appendChild(iframe);
    iframe.src = "javascript:"; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
};
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"kiL2X","./_object-dps":"8EUaM","./_enum-bug-keys":"NGsf4","./_shared-key":"kPb7V","./_dom-create":"2qBag","./_html":"lPhWk"}],"8EUaM":[function(require,module,exports) {
var dP = require("./_object-dp");
var anObject = require("./_an-object");
var getKeys = require("./_object-keys");
module.exports = require("./_descriptors") ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while(length > i)dP.f(O, P = keys[i++], Properties[P]);
    return O;
};

},{"./_object-dp":"cLcWd","./_an-object":"kiL2X","./_object-keys":"98CC0","./_descriptors":"dr2tY"}],"lPhWk":[function(require,module,exports) {
var document = require("./_global").document;
module.exports = document && document.documentElement;

},{"./_global":"8xCse"}],"2is9e":[function(require,module,exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require("./_to-iobject");
var gOPN = require("./_object-gopn").f;
var toString = {}.toString;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
    try {
        return gOPN(it);
    } catch (e) {
        return windowNames.slice();
    }
};
module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_to-iobject":"f9RCz","./_object-gopn":"jK0Om"}],"jK0Om":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require("./_object-keys-internal");
var hiddenKeys = require("./_enum-bug-keys").concat("length", "prototype");
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"x7vs4","./_enum-bug-keys":"NGsf4"}],"4bAUG":[function(require,module,exports) {
var pIE = require("./_object-pie");
var createDesc = require("./_property-desc");
var toIObject = require("./_to-iobject");
var toPrimitive = require("./_to-primitive");
var has = require("./_has");
var IE8_DOM_DEFINE = require("./_ie8-dom-define");
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = require("./_descriptors") ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
    } catch (e) {}
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_object-pie":"2aUxV","./_property-desc":"825qY","./_to-iobject":"f9RCz","./_to-primitive":"4Oubb","./_has":"biQ7v","./_ie8-dom-define":"cIJOj","./_descriptors":"dr2tY"}],"iklZv":[function(require,module,exports) {
var $export = require("./_export");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, "Object", {
    create: require("./_object-create")
});

},{"./_export":"1Tgvm","./_object-create":"b4m8n"}],"2JxTY":[function(require,module,exports) {
var $export = require("./_export");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require("./_descriptors"), "Object", {
    defineProperty: require("./_object-dp").f
});

},{"./_export":"1Tgvm","./_descriptors":"dr2tY","./_object-dp":"cLcWd"}],"1cFbl":[function(require,module,exports) {
var $export = require("./_export");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require("./_descriptors"), "Object", {
    defineProperties: require("./_object-dps")
});

},{"./_export":"1Tgvm","./_descriptors":"dr2tY","./_object-dps":"8EUaM"}],"5sxjB":[function(require,module,exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require("./_to-iobject");
var $getOwnPropertyDescriptor = require("./_object-gopd").f;
require("./_object-sap")("getOwnPropertyDescriptor", function() {
    return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
    };
});

},{"./_to-iobject":"f9RCz","./_object-gopd":"4bAUG","./_object-sap":"fgwTp"}],"fgwTp":[function(require,module,exports) {
// most Object methods by ES6 should accept primitives
var $export = require("./_export");
var core = require("./_core");
var fails = require("./_fails");
module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
        fn(1);
    }), "Object", exp);
};

},{"./_export":"1Tgvm","./_core":"4o9Ko","./_fails":"iAFH1"}],"5fsye":[function(require,module,exports) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require("./_to-object");
var $getPrototypeOf = require("./_object-gpo");
require("./_object-sap")("getPrototypeOf", function() {
    return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
    };
});

},{"./_to-object":"7HHXi","./_object-gpo":"4uFAD","./_object-sap":"fgwTp"}],"7HHXi":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require("./_defined");
module.exports = function(it) {
    return Object(defined(it));
};

},{"./_defined":"4Lj5U"}],"4uFAD":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require("./_has");
var toObject = require("./_to-object");
var IE_PROTO = require("./_shared-key")("IE_PROTO");
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
    return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"biQ7v","./_to-object":"7HHXi","./_shared-key":"kPb7V"}],"8woaa":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require("./_to-object");
var $keys = require("./_object-keys");
require("./_object-sap")("keys", function() {
    return function keys(it) {
        return $keys(toObject(it));
    };
});

},{"./_to-object":"7HHXi","./_object-keys":"98CC0","./_object-sap":"fgwTp"}],"dGCli":[function(require,module,exports) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
require("./_object-sap")("getOwnPropertyNames", function() {
    return require("./_object-gopn-ext").f;
});

},{"./_object-sap":"fgwTp","./_object-gopn-ext":"2is9e"}],"cb5HM":[function(require,module,exports) {
// 19.1.2.5 Object.freeze(O)
var isObject = require("./_is-object");
var meta = require("./_meta").onFreeze;
require("./_object-sap")("freeze", function($freeze) {
    return function freeze(it) {
        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
    };
});

},{"./_is-object":"eIE5K","./_meta":"043Qa","./_object-sap":"fgwTp"}],"j3qY2":[function(require,module,exports) {
// 19.1.2.17 Object.seal(O)
var isObject = require("./_is-object");
var meta = require("./_meta").onFreeze;
require("./_object-sap")("seal", function($seal) {
    return function seal(it) {
        return $seal && isObject(it) ? $seal(meta(it)) : it;
    };
});

},{"./_is-object":"eIE5K","./_meta":"043Qa","./_object-sap":"fgwTp"}],"2KuMq":[function(require,module,exports) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require("./_is-object");
var meta = require("./_meta").onFreeze;
require("./_object-sap")("preventExtensions", function($preventExtensions) {
    return function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
    };
});

},{"./_is-object":"eIE5K","./_meta":"043Qa","./_object-sap":"fgwTp"}],"GTKvk":[function(require,module,exports) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = require("./_is-object");
require("./_object-sap")("isFrozen", function($isFrozen) {
    return function isFrozen(it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
});

},{"./_is-object":"eIE5K","./_object-sap":"fgwTp"}],"K45hu":[function(require,module,exports) {
// 19.1.2.13 Object.isSealed(O)
var isObject = require("./_is-object");
require("./_object-sap")("isSealed", function($isSealed) {
    return function isSealed(it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
});

},{"./_is-object":"eIE5K","./_object-sap":"fgwTp"}],"23gjD":[function(require,module,exports) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = require("./_is-object");
require("./_object-sap")("isExtensible", function($isExtensible) {
    return function isExtensible(it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
});

},{"./_is-object":"eIE5K","./_object-sap":"fgwTp"}],"8DvpM":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require("./_export");
$export($export.S + $export.F, "Object", {
    assign: require("./_object-assign")
});

},{"./_export":"1Tgvm","./_object-assign":"h8iBq"}],"h8iBq":[function(require,module,exports) {
"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require("./_object-keys");
var gOPS = require("./_object-gops");
var pIE = require("./_object-pie");
var toObject = require("./_to-object");
var IObject = require("./_iobject");
var $assign = Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require("./_fails")(function() {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = "abcdefghijklmnopqrst";
    A[S] = 7;
    K.split("").forEach(function(k) {
        B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
}) ? function assign(target, source) {
    var T = toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = gOPS.f;
    var isEnum = pIE.f;
    while(aLen > index){
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while(length > j)if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
    return T;
} : $assign;

},{"./_object-keys":"98CC0","./_object-gops":"5oH2C","./_object-pie":"2aUxV","./_to-object":"7HHXi","./_iobject":"24JwK","./_fails":"iAFH1"}],"e23no":[function(require,module,exports) {
// 19.1.3.10 Object.is(value1, value2)
var $export = require("./_export");
$export($export.S, "Object", {
    is: require("./_same-value")
});

},{"./_export":"1Tgvm","./_same-value":"94M5S"}],"94M5S":[function(require,module,exports) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"d3fGn":[function(require,module,exports) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require("./_export");
$export($export.S, "Object", {
    setPrototypeOf: require("./_set-proto").set
});

},{"./_export":"1Tgvm","./_set-proto":"ltEMf"}],"ltEMf":[function(require,module,exports) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */ var isObject = require("./_is-object");
var anObject = require("./_an-object");
var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
        try {
            set = require("./_ctx")(Function.call, require("./_object-gopd").f(Object.prototype, "__proto__").set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
        } catch (e) {
            buggy = true;
        }
        return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
        };
    }({}, false) : undefined),
    check: check
};

},{"./_is-object":"eIE5K","./_an-object":"kiL2X","./_ctx":"4rQSm","./_object-gopd":"4bAUG"}],"7cLOk":[function(require,module,exports) {
"use strict";
// 19.1.3.6 Object.prototype.toString()
var classof = require("./_classof");
var test = {};
test[require("./_wks")("toStringTag")] = "z";
if (test + "" != "[object z]") require("./_redefine")(Object.prototype, "toString", function toString() {
    return "[object " + classof(this) + "]";
}, true);

},{"./_classof":"5TIen","./_wks":"eaoKZ","./_redefine":"9vAu7"}],"5TIen":[function(require,module,exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require("./_cof");
var TAG = require("./_wks")("toStringTag");
// ES3 wrong here
var ARG = cof(function() {
    return arguments;
}()) == "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (e) {}
};
module.exports = function(it) {
    var O, T, B;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
};

},{"./_cof":"frIbo","./_wks":"eaoKZ"}],"54Dqr":[function(require,module,exports) {
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require("./_export");
$export($export.P, "Function", {
    bind: require("./_bind")
});

},{"./_export":"1Tgvm","./_bind":"2xSTE"}],"2xSTE":[function(require,module,exports) {
"use strict";
var aFunction = require("./_a-function");
var isObject = require("./_is-object");
var invoke = require("./_invoke");
var arraySlice = [].slice;
var factories = {};
var construct = function(F, len, args) {
    if (!(len in factories)) {
        for(var n = [], i = 0; i < len; i++)n[i] = "a[" + i + "]";
        // eslint-disable-next-line no-new-func
        factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
    }
    return factories[len](F, args);
};
module.exports = Function.bind || function bind(that /* , ...args */ ) {
    var fn = aFunction(this);
    var partArgs = arraySlice.call(arguments, 1);
    var bound = function() {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
};

},{"./_a-function":"55L9l","./_is-object":"eIE5K","./_invoke":"c7Bab"}],"c7Bab":[function(require,module,exports) {
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch(args.length){
        case 0:
            return un ? fn() : fn.call(that);
        case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
        case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
        case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
        case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
};

},{}],"lmg4B":[function(require,module,exports) {
var dP = require("./_object-dp").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = "name";
// 19.2.4.2 name
NAME in FProto || require("./_descriptors") && dP(FProto, NAME, {
    configurable: true,
    get: function() {
        try {
            return ("" + this).match(nameRE)[1];
        } catch (e) {
            return "";
        }
    }
});

},{"./_object-dp":"cLcWd","./_descriptors":"dr2tY"}],"flBdS":[function(require,module,exports) {
"use strict";
var isObject = require("./_is-object");
var getPrototypeOf = require("./_object-gpo");
var HAS_INSTANCE = require("./_wks")("hasInstance");
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require("./_object-dp").f(FunctionProto, HAS_INSTANCE, {
    value: function(O) {
        if (typeof this != "function" || !isObject(O)) return false;
        if (!isObject(this.prototype)) return O instanceof this;
        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
        while(O = getPrototypeOf(O))if (this.prototype === O) return true;
        return false;
    }
});

},{"./_is-object":"eIE5K","./_object-gpo":"4uFAD","./_wks":"eaoKZ","./_object-dp":"cLcWd"}],"l30ZK":[function(require,module,exports) {
var $export = require("./_export");
var $parseInt = require("./_parse-int");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {
    parseInt: $parseInt
});

},{"./_export":"1Tgvm","./_parse-int":"b3ov9"}],"b3ov9":[function(require,module,exports) {
var $parseInt = require("./_global").parseInt;
var $trim = require("./_string-trim").trim;
var ws = require("./_string-ws");
var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + "08") !== 8 || $parseInt(ws + "0x16") !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":"8xCse","./_string-trim":"9YCA9","./_string-ws":"bg6tv"}],"9YCA9":[function(require,module,exports) {
var $export = require("./_export");
var defined = require("./_defined");
var fails = require("./_fails");
var spaces = require("./_string-ws");
var space = "[" + spaces + "]";
var non = "​\x85";
var ltrim = RegExp("^" + space + space + "*");
var rtrim = RegExp(space + space + "*$");
var exporter = function(KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = fails(function() {
        return !!spaces[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    $export($export.P + $export.F * FORCE, "String", exp);
};
// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE) {
    string = String(defined(string));
    if (TYPE & 1) string = string.replace(ltrim, "");
    if (TYPE & 2) string = string.replace(rtrim, "");
    return string;
};
module.exports = exporter;

},{"./_export":"1Tgvm","./_defined":"4Lj5U","./_fails":"iAFH1","./_string-ws":"bg6tv"}],"bg6tv":[function(require,module,exports) {
module.exports = "	\n\v\f\r \xa0 ᠎             　\u2028\u2029\uFEFF";

},{}],"edHLy":[function(require,module,exports) {
var $export = require("./_export");
var $parseFloat = require("./_parse-float");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {
    parseFloat: $parseFloat
});

},{"./_export":"1Tgvm","./_parse-float":"eAzEB"}],"eAzEB":[function(require,module,exports) {
var $parseFloat = require("./_global").parseFloat;
var $trim = require("./_string-trim").trim;
module.exports = 1 / $parseFloat(require("./_string-ws") + "-0") !== -Infinity ? function parseFloat(str) {
    var string = $trim(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == "-" ? -0 : result;
} : $parseFloat;

},{"./_global":"8xCse","./_string-trim":"9YCA9","./_string-ws":"bg6tv"}],"b3DG0":[function(require,module,exports) {
"use strict";
var global = require("./_global");
var has = require("./_has");
var cof = require("./_cof");
var inheritIfRequired = require("./_inherit-if-required");
var toPrimitive = require("./_to-primitive");
var fails = require("./_fails");
var gOPN = require("./_object-gopn").f;
var gOPD = require("./_object-gopd").f;
var dP = require("./_object-dp").f;
var $trim = require("./_string-trim").trim;
var NUMBER = "Number";
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require("./_object-create")(proto)) == NUMBER;
var TRIM = "trim" in String.prototype;
// 7.1.3 ToNumber(argument)
var toNumber = function(argument) {
    var it = toPrimitive(argument, false);
    if (typeof it == "string" && it.length > 2) {
        it = TRIM ? it.trim() : $trim(it, 3);
        var first = it.charCodeAt(0);
        var third, radix, maxCode;
        if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
            switch(it.charCodeAt(1)){
                case 66:
                case 98:
                    radix = 2;
                    maxCode = 49;
                    break; // fast equal /^0b[01]+$/i
                case 79:
                case 111:
                    radix = 8;
                    maxCode = 55;
                    break; // fast equal /^0o[0-7]+$/i
                default:
                    return +it;
            }
            for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
                code = digits.charCodeAt(i);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
            }
            return parseInt(digits, radix);
        }
    }
    return +it;
};
if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
    $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var that = this;
        return that instanceof $Number && (BROKEN_COF ? fails(function() {
            proto.valueOf.call(that);
        }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for(var keys = require("./_descriptors") ? gOPN(Base) : // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), j = 0, key; keys.length > j; j++)if (has(Base, key = keys[j]) && !has($Number, key)) dP($Number, key, gOPD(Base, key));
    $Number.prototype = proto;
    proto.constructor = $Number;
    require("./_redefine")(global, NUMBER, $Number);
}

},{"./_global":"8xCse","./_has":"biQ7v","./_cof":"frIbo","./_inherit-if-required":"9GGeZ","./_to-primitive":"4Oubb","./_fails":"iAFH1","./_object-gopn":"jK0Om","./_object-gopd":"4bAUG","./_object-dp":"cLcWd","./_string-trim":"9YCA9","./_object-create":"b4m8n","./_descriptors":"dr2tY","./_redefine":"9vAu7"}],"9GGeZ":[function(require,module,exports) {
var isObject = require("./_is-object");
var setPrototypeOf = require("./_set-proto").set;
module.exports = function(that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == "function" && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) setPrototypeOf(that, P);
    return that;
};

},{"./_is-object":"eIE5K","./_set-proto":"ltEMf"}],"jVWO1":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var toInteger = require("./_to-integer");
var aNumberValue = require("./_a-number-value");
var repeat = require("./_string-repeat");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [
    0,
    0,
    0,
    0,
    0,
    0
];
var ERROR = "Number.toFixed: incorrect invocation!";
var ZERO = "0";
var multiply = function(n, c) {
    var i = -1;
    var c2 = c;
    while(++i < 6){
        c2 += n * data[i];
        data[i] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
    }
};
var divide = function(n) {
    var i = 6;
    var c = 0;
    while(--i >= 0){
        c += data[i];
        data[i] = floor(c / n);
        c = c % n * 1e7;
    }
};
var numToString = function() {
    var i = 6;
    var s = "";
    while(--i >= 0)if (s !== "" || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === "" ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
    return s;
};
var pow = function(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x) {
    var n = 0;
    var x2 = x;
    while(x2 >= 4096){
        n += 12;
        x2 /= 4096;
    }
    while(x2 >= 2){
        n += 1;
        x2 /= 2;
    }
    return n;
};
$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000128.0.toFixed(0) !== "1000000000000000128") || !require("./_fails")(function() {
    // V8 ~ Android 4.3-
    $toFixed.call({});
})), "Number", {
    toFixed: function toFixed(fractionDigits) {
        var x = aNumberValue(this, ERROR);
        var f = toInteger(fractionDigits);
        var s = "";
        var m = ZERO;
        var e, z, j, k;
        if (f < 0 || f > 20) throw RangeError(ERROR);
        // eslint-disable-next-line no-self-compare
        if (x != x) return "NaN";
        if (x <= -1000000000000000000000 || x >= 1e21) return String(x);
        if (x < 0) {
            s = "-";
            x = -x;
        }
        if (x > 1e-21) {
            e = log(x * pow(2, 69, 1)) - 69;
            z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
            z *= 0x10000000000000;
            e = 52 - e;
            if (e > 0) {
                multiply(0, z);
                j = f;
                while(j >= 7){
                    multiply(1e7, 0);
                    j -= 7;
                }
                multiply(pow(10, j, 1), 0);
                j = e - 1;
                while(j >= 23){
                    divide(8388608);
                    j -= 23;
                }
                divide(1 << j);
                multiply(1, 1);
                divide(2);
                m = numToString();
            } else {
                multiply(0, z);
                multiply(1 << -e, 0);
                m = numToString() + repeat.call(ZERO, f);
            }
        }
        if (f > 0) {
            k = m.length;
            m = s + (k <= f ? "0." + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + "." + m.slice(k - f));
        } else m = s + m;
        return m;
    }
});

},{"./_export":"1Tgvm","./_to-integer":"cb0GT","./_a-number-value":"3132k","./_string-repeat":"2JEgf","./_fails":"iAFH1"}],"3132k":[function(require,module,exports) {
var cof = require("./_cof");
module.exports = function(it, msg) {
    if (typeof it != "number" && cof(it) != "Number") throw TypeError(msg);
    return +it;
};

},{"./_cof":"frIbo"}],"2JEgf":[function(require,module,exports) {
"use strict";
var toInteger = require("./_to-integer");
var defined = require("./_defined");
module.exports = function repeat(count) {
    var str = String(defined(this));
    var res = "";
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
    for(; n > 0; (n >>>= 1) && (str += str))if (n & 1) res += str;
    return res;
};

},{"./_to-integer":"cb0GT","./_defined":"4Lj5U"}],"fkTCt":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $fails = require("./_fails");
var aNumberValue = require("./_a-number-value");
var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function() {
    // IE7-
    return $toPrecision.call(1, undefined) !== "1";
}) || !$fails(function() {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
})), "Number", {
    toPrecision: function toPrecision(precision) {
        var that = aNumberValue(this, "Number#toPrecision: incorrect invocation!");
        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
});

},{"./_export":"1Tgvm","./_fails":"iAFH1","./_a-number-value":"3132k"}],"dS5u0":[function(require,module,exports) {
// 20.1.2.1 Number.EPSILON
var $export = require("./_export");
$export($export.S, "Number", {
    EPSILON: Math.pow(2, -52)
});

},{"./_export":"1Tgvm"}],"gaJ9D":[function(require,module,exports) {
// 20.1.2.2 Number.isFinite(number)
var $export = require("./_export");
var _isFinite = require("./_global").isFinite;
$export($export.S, "Number", {
    isFinite: function isFinite(it) {
        return typeof it == "number" && _isFinite(it);
    }
});

},{"./_export":"1Tgvm","./_global":"8xCse"}],"cXfOC":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var $export = require("./_export");
$export($export.S, "Number", {
    isInteger: require("./_is-integer")
});

},{"./_export":"1Tgvm","./_is-integer":"eFruS"}],"eFruS":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var isObject = require("./_is-object");
var floor = Math.floor;
module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":"eIE5K"}],"dHEdL":[function(require,module,exports) {
// 20.1.2.4 Number.isNaN(number)
var $export = require("./_export");
$export($export.S, "Number", {
    isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare
        return number != number;
    }
});

},{"./_export":"1Tgvm"}],"8WZJi":[function(require,module,exports) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require("./_export");
var isInteger = require("./_is-integer");
var abs = Math.abs;
$export($export.S, "Number", {
    isSafeInteger: function isSafeInteger(number) {
        return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
});

},{"./_export":"1Tgvm","./_is-integer":"eFruS"}],"lEoVS":[function(require,module,exports) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require("./_export");
$export($export.S, "Number", {
    MAX_SAFE_INTEGER: 0x1fffffffffffff
});

},{"./_export":"1Tgvm"}],"6GYXq":[function(require,module,exports) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require("./_export");
$export($export.S, "Number", {
    MIN_SAFE_INTEGER: -9007199254740991
});

},{"./_export":"1Tgvm"}],"adyPr":[function(require,module,exports) {
var $export = require("./_export");
var $parseFloat = require("./_parse-float");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), "Number", {
    parseFloat: $parseFloat
});

},{"./_export":"1Tgvm","./_parse-float":"eAzEB"}],"cz541":[function(require,module,exports) {
var $export = require("./_export");
var $parseInt = require("./_parse-int");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), "Number", {
    parseInt: $parseInt
});

},{"./_export":"1Tgvm","./_parse-int":"b3ov9"}],"atazc":[function(require,module,exports) {
// 20.2.2.3 Math.acosh(x)
var $export = require("./_export");
var log1p = require("./_math-log1p");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710 && $acosh(Infinity) == Infinity), "Math", {
    acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
});

},{"./_export":"1Tgvm","./_math-log1p":"39ll1"}],"39ll1":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
    return (x = +x) > -0.00000001 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],"9vCFA":[function(require,module,exports) {
// 20.2.2.5 Math.asinh(x)
var $export = require("./_export");
var $asinh = Math.asinh;
function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}
// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), "Math", {
    asinh: asinh
});

},{"./_export":"1Tgvm"}],"1Poi7":[function(require,module,exports) {
// 20.2.2.7 Math.atanh(x)
var $export = require("./_export");
var $atanh = Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), "Math", {
    atanh: function atanh(x) {
        return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
});

},{"./_export":"1Tgvm"}],"kEyNP":[function(require,module,exports) {
// 20.2.2.9 Math.cbrt(x)
var $export = require("./_export");
var sign = require("./_math-sign");
$export($export.S, "Math", {
    cbrt: function cbrt(x) {
        return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
});

},{"./_export":"1Tgvm","./_math-sign":"7nT0W"}],"7nT0W":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"asnnc":[function(require,module,exports) {
// 20.2.2.11 Math.clz32(x)
var $export = require("./_export");
$export($export.S, "Math", {
    clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
});

},{"./_export":"1Tgvm"}],"672oR":[function(require,module,exports) {
// 20.2.2.12 Math.cosh(x)
var $export = require("./_export");
var exp = Math.exp;
$export($export.S, "Math", {
    cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
    }
});

},{"./_export":"1Tgvm"}],"eLul3":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $export = require("./_export");
var $expm1 = require("./_math-expm1");
$export($export.S + $export.F * ($expm1 != Math.expm1), "Math", {
    expm1: $expm1
});

},{"./_export":"1Tgvm","./_math-expm1":"6SST9"}],"6SST9":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 || $expm1(-0.00000000000000002) != -0.00000000000000002 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -0.000001 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],"6JW0t":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var $export = require("./_export");
$export($export.S, "Math", {
    fround: require("./_math-fround")
});

},{"./_export":"1Tgvm","./_math-fround":"9TbbN"}],"9TbbN":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var sign = require("./_math-sign");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);
var roundTiesToEven = function(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
};
module.exports = Math.fround || function fround(x) {
    var $abs = Math.abs(x);
    var $sign = sign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare
    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
};

},{"./_math-sign":"7nT0W"}],"1rcXM":[function(require,module,exports) {
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require("./_export");
var abs = Math.abs;
$export($export.S, "Math", {
    hypot: function hypot(value1, value2) {
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while(i < aLen){
            arg = abs(arguments[i++]);
            if (larg < arg) {
                div = larg / arg;
                sum = sum * div * div + 1;
                larg = arg;
            } else if (arg > 0) {
                div = arg / larg;
                sum += div * div;
            } else sum += arg;
        }
        return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
});

},{"./_export":"1Tgvm"}],"lAxVU":[function(require,module,exports) {
// 20.2.2.18 Math.imul(x, y)
var $export = require("./_export");
var $imul = Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require("./_fails")(function() {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), "Math", {
    imul: function imul(x, y) {
        var UINT16 = 0xffff;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
});

},{"./_export":"1Tgvm","./_fails":"iAFH1"}],"fIjzt":[function(require,module,exports) {
// 20.2.2.21 Math.log10(x)
var $export = require("./_export");
$export($export.S, "Math", {
    log10: function log10(x) {
        return Math.log(x) * Math.LOG10E;
    }
});

},{"./_export":"1Tgvm"}],"kK15h":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
var $export = require("./_export");
$export($export.S, "Math", {
    log1p: require("./_math-log1p")
});

},{"./_export":"1Tgvm","./_math-log1p":"39ll1"}],"kkgGM":[function(require,module,exports) {
// 20.2.2.22 Math.log2(x)
var $export = require("./_export");
$export($export.S, "Math", {
    log2: function log2(x) {
        return Math.log(x) / Math.LN2;
    }
});

},{"./_export":"1Tgvm"}],"18Gp0":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
var $export = require("./_export");
$export($export.S, "Math", {
    sign: require("./_math-sign")
});

},{"./_export":"1Tgvm","./_math-sign":"7nT0W"}],"bkULm":[function(require,module,exports) {
// 20.2.2.30 Math.sinh(x)
var $export = require("./_export");
var expm1 = require("./_math-expm1");
var exp = Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require("./_fails")(function() {
    return !Math.sinh(-0.00000000000000002) != -0.00000000000000002;
}), "Math", {
    sinh: function sinh(x) {
        return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }
});

},{"./_export":"1Tgvm","./_math-expm1":"6SST9","./_fails":"iAFH1"}],"br08o":[function(require,module,exports) {
// 20.2.2.33 Math.tanh(x)
var $export = require("./_export");
var expm1 = require("./_math-expm1");
var exp = Math.exp;
$export($export.S, "Math", {
    tanh: function tanh(x) {
        var a = expm1(x = +x);
        var b = expm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
});

},{"./_export":"1Tgvm","./_math-expm1":"6SST9"}],"8fixj":[function(require,module,exports) {
// 20.2.2.34 Math.trunc(x)
var $export = require("./_export");
$export($export.S, "Math", {
    trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
    }
});

},{"./_export":"1Tgvm"}],"gsGce":[function(require,module,exports) {
var $export = require("./_export");
var toAbsoluteIndex = require("./_to-absolute-index");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;
// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
        var res = [];
        var aLen = arguments.length;
        var i = 0;
        var code;
        while(aLen > i){
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + " is not a valid code point");
            res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
        }
        return res.join("");
    }
});

},{"./_export":"1Tgvm","./_to-absolute-index":"1lPjf"}],"4MADL":[function(require,module,exports) {
var $export = require("./_export");
var toIObject = require("./_to-iobject");
var toLength = require("./_to-length");
$export($export.S, "String", {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
        var tpl = toIObject(callSite.raw);
        var len = toLength(tpl.length);
        var aLen = arguments.length;
        var res = [];
        var i = 0;
        while(len > i){
            res.push(String(tpl[i++]));
            if (i < aLen) res.push(String(arguments[i]));
        }
        return res.join("");
    }
});

},{"./_export":"1Tgvm","./_to-iobject":"f9RCz","./_to-length":"irYfS"}],"hEKob":[function(require,module,exports) {
"use strict";
// 21.1.3.25 String.prototype.trim()
require("./_string-trim")("trim", function($trim) {
    return function trim() {
        return $trim(this, 3);
    };
});

},{"./_string-trim":"9YCA9"}],"llgDB":[function(require,module,exports) {
"use strict";
var $at = require("./_string-at")(true);
// 21.1.3.27 String.prototype[@@iterator]()
require("./_iter-define")(String, "String", function(iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
        value: undefined,
        done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
        value: point,
        done: false
    };
});

},{"./_string-at":"rbgP0","./_iter-define":"egJhK"}],"rbgP0":[function(require,module,exports) {
var toInteger = require("./_to-integer");
var defined = require("./_defined");
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING) {
    return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
};

},{"./_to-integer":"cb0GT","./_defined":"4Lj5U"}],"egJhK":[function(require,module,exports) {
"use strict";
var LIBRARY = require("./_library");
var $export = require("./_export");
var redefine = require("./_redefine");
var hide = require("./_hide");
var Iterators = require("./_iterators");
var $iterCreate = require("./_iter-create");
var setToStringTag = require("./_set-to-string-tag");
var getPrototypeOf = require("./_object-gpo");
var ITERATOR = require("./_wks")("iterator");
var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = "@@iterator";
var KEYS = "keys";
var VALUES = "values";
var returnThis = function() {
    return this;
};
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch(kind){
            case KEYS:
                return function keys() {
                    return new Constructor(this, kind);
                };
            case VALUES:
                return function values() {
                    return new Constructor(this, kind);
                };
        }
        return function entries() {
            return new Constructor(this, kind);
        };
    };
    var TAG = NAME + " Iterator";
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined;
    var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
        }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
            return $native.call(this);
        };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) hide(proto, ITERATOR, $default);
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
        methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
        };
        if (FORCED) {
            for(key in methods)if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
};

},{"./_library":"lmtqY","./_export":"1Tgvm","./_redefine":"9vAu7","./_hide":"ddpVq","./_iterators":"dITQr","./_iter-create":"eTcx3","./_set-to-string-tag":"7YXlq","./_object-gpo":"4uFAD","./_wks":"eaoKZ"}],"dITQr":[function(require,module,exports) {
module.exports = {};

},{}],"eTcx3":[function(require,module,exports) {
"use strict";
var create = require("./_object-create");
var descriptor = require("./_property-desc");
var setToStringTag = require("./_set-to-string-tag");
var IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require("./_hide")(IteratorPrototype, require("./_wks")("iterator"), function() {
    return this;
});
module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
    });
    setToStringTag(Constructor, NAME + " Iterator");
};

},{"./_object-create":"b4m8n","./_property-desc":"825qY","./_set-to-string-tag":"7YXlq","./_hide":"ddpVq","./_wks":"eaoKZ"}],"doYwG":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $at = require("./_string-at")(false);
$export($export.P, "String", {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
        return $at(this, pos);
    }
});

},{"./_export":"1Tgvm","./_string-at":"rbgP0"}],"39nwy":[function(require,module,exports) {
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
"use strict";
var $export = require("./_export");
var toLength = require("./_to-length");
var context = require("./_string-context");
var ENDS_WITH = "endsWith";
var $endsWith = ""[ENDS_WITH];
$export($export.P + $export.F * require("./_fails-is-regexp")(ENDS_WITH), "String", {
    endsWith: function endsWith(searchString /* , endPosition = @length */ ) {
        var that = context(this, searchString, ENDS_WITH);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = toLength(that.length);
        var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
});

},{"./_export":"1Tgvm","./_to-length":"irYfS","./_string-context":"dNNLc","./_fails-is-regexp":"4q5P7"}],"dNNLc":[function(require,module,exports) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require("./_is-regexp");
var defined = require("./_defined");
module.exports = function(that, searchString, NAME) {
    if (isRegExp(searchString)) throw TypeError("String#" + NAME + " doesn't accept regex!");
    return String(defined(that));
};

},{"./_is-regexp":"aGcfF","./_defined":"4Lj5U"}],"aGcfF":[function(require,module,exports) {
// 7.2.8 IsRegExp(argument)
var isObject = require("./_is-object");
var cof = require("./_cof");
var MATCH = require("./_wks")("match");
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == "RegExp");
};

},{"./_is-object":"eIE5K","./_cof":"frIbo","./_wks":"eaoKZ"}],"4q5P7":[function(require,module,exports) {
var MATCH = require("./_wks")("match");
module.exports = function(KEY) {
    var re = /./;
    try {
        "/./"[KEY](re);
    } catch (e) {
        try {
            re[MATCH] = false;
            return !"/./"[KEY](re);
        } catch (f) {}
    }
    return true;
};

},{"./_wks":"eaoKZ"}],"9JmYp":[function(require,module,exports) {
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
"use strict";
var $export = require("./_export");
var context = require("./_string-context");
var INCLUDES = "includes";
$export($export.P + $export.F * require("./_fails-is-regexp")(INCLUDES), "String", {
    includes: function includes(searchString /* , position = 0 */ ) {
        return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"./_export":"1Tgvm","./_string-context":"dNNLc","./_fails-is-regexp":"4q5P7"}],"cqBCd":[function(require,module,exports) {
var $export = require("./_export");
$export($export.P, "String", {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: require("./_string-repeat")
});

},{"./_export":"1Tgvm","./_string-repeat":"2JEgf"}],"iMejr":[function(require,module,exports) {
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
"use strict";
var $export = require("./_export");
var toLength = require("./_to-length");
var context = require("./_string-context");
var STARTS_WITH = "startsWith";
var $startsWith = ""[STARTS_WITH];
$export($export.P + $export.F * require("./_fails-is-regexp")(STARTS_WITH), "String", {
    startsWith: function startsWith(searchString /* , position = 0 */ ) {
        var that = context(this, searchString, STARTS_WITH);
        var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
});

},{"./_export":"1Tgvm","./_to-length":"irYfS","./_string-context":"dNNLc","./_fails-is-regexp":"4q5P7"}],"97Lll":[function(require,module,exports) {
"use strict";
// B.2.3.2 String.prototype.anchor(name)
require("./_string-html")("anchor", function(createHTML) {
    return function anchor(name) {
        return createHTML(this, "a", "name", name);
    };
});

},{"./_string-html":"8eGZd"}],"8eGZd":[function(require,module,exports) {
var $export = require("./_export");
var fails = require("./_fails");
var defined = require("./_defined");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
    var S = String(defined(string));
    var p1 = "<" + tag;
    if (attribute !== "") p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"';
    return p1 + ">" + S + "</" + tag + ">";
};
module.exports = function(NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    $export($export.P + $export.F * fails(function() {
        var test = ""[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
    }), "String", O);
};

},{"./_export":"1Tgvm","./_fails":"iAFH1","./_defined":"4Lj5U"}],"7nKCA":[function(require,module,exports) {
"use strict";
// B.2.3.3 String.prototype.big()
require("./_string-html")("big", function(createHTML) {
    return function big() {
        return createHTML(this, "big", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"jbxAT":[function(require,module,exports) {
"use strict";
// B.2.3.4 String.prototype.blink()
require("./_string-html")("blink", function(createHTML) {
    return function blink() {
        return createHTML(this, "blink", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"4MfGp":[function(require,module,exports) {
"use strict";
// B.2.3.5 String.prototype.bold()
require("./_string-html")("bold", function(createHTML) {
    return function bold() {
        return createHTML(this, "b", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"4y2Bb":[function(require,module,exports) {
"use strict";
// B.2.3.6 String.prototype.fixed()
require("./_string-html")("fixed", function(createHTML) {
    return function fixed() {
        return createHTML(this, "tt", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"lmhCi":[function(require,module,exports) {
"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
require("./_string-html")("fontcolor", function(createHTML) {
    return function fontcolor(color) {
        return createHTML(this, "font", "color", color);
    };
});

},{"./_string-html":"8eGZd"}],"hL89C":[function(require,module,exports) {
"use strict";
// B.2.3.8 String.prototype.fontsize(size)
require("./_string-html")("fontsize", function(createHTML) {
    return function fontsize(size) {
        return createHTML(this, "font", "size", size);
    };
});

},{"./_string-html":"8eGZd"}],"iwOAc":[function(require,module,exports) {
"use strict";
// B.2.3.9 String.prototype.italics()
require("./_string-html")("italics", function(createHTML) {
    return function italics() {
        return createHTML(this, "i", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"e07IC":[function(require,module,exports) {
"use strict";
// B.2.3.10 String.prototype.link(url)
require("./_string-html")("link", function(createHTML) {
    return function link(url) {
        return createHTML(this, "a", "href", url);
    };
});

},{"./_string-html":"8eGZd"}],"2MSNU":[function(require,module,exports) {
"use strict";
// B.2.3.11 String.prototype.small()
require("./_string-html")("small", function(createHTML) {
    return function small() {
        return createHTML(this, "small", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"8kiXd":[function(require,module,exports) {
"use strict";
// B.2.3.12 String.prototype.strike()
require("./_string-html")("strike", function(createHTML) {
    return function strike() {
        return createHTML(this, "strike", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"iprh9":[function(require,module,exports) {
"use strict";
// B.2.3.13 String.prototype.sub()
require("./_string-html")("sub", function(createHTML) {
    return function sub() {
        return createHTML(this, "sub", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"doHpa":[function(require,module,exports) {
"use strict";
// B.2.3.14 String.prototype.sup()
require("./_string-html")("sup", function(createHTML) {
    return function sup() {
        return createHTML(this, "sup", "", "");
    };
});

},{"./_string-html":"8eGZd"}],"4HGro":[function(require,module,exports) {
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require("./_export");
$export($export.S, "Date", {
    now: function() {
        return new Date().getTime();
    }
});

},{"./_export":"1Tgvm"}],"7Glbw":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var toObject = require("./_to-object");
var toPrimitive = require("./_to-primitive");
$export($export.P + $export.F * require("./_fails")(function() {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
        toISOString: function() {
            return 1;
        }
    }) !== 1;
}), "Date", {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive(O);
        return typeof pv == "number" && !isFinite(pv) ? null : O.toISOString();
    }
});

},{"./_export":"1Tgvm","./_to-object":"7HHXi","./_to-primitive":"4Oubb","./_fails":"iAFH1"}],"hQdLT":[function(require,module,exports) {
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require("./_export");
var toISOString = require("./_date-to-iso-string");
// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), "Date", {
    toISOString: toISOString
});

},{"./_export":"1Tgvm","./_date-to-iso-string":"aJh30"}],"aJh30":[function(require,module,exports) {
"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require("./_fails");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;
var lz = function(num) {
    return num > 9 ? num : "0" + num;
};
// PhantomJS / old WebKit has a broken implementations
module.exports = fails(function() {
    return $toISOString.call(new Date(-50000000000000 - 1)) != "0385-07-25T07:06:39.999Z";
}) || !fails(function() {
    $toISOString.call(new Date(NaN));
}) ? function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError("Invalid time value");
    var d = this;
    var y = d.getUTCFullYear();
    var m = d.getUTCMilliseconds();
    var s = y < 0 ? "-" : y > 9999 ? "+" : "";
    return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99 ? m : "0" + lz(m)) + "Z";
} : $toISOString;

},{"./_fails":"iAFH1"}],"d3yLX":[function(require,module,exports) {
var DateProto = Date.prototype;
var INVALID_DATE = "Invalid Date";
var TO_STRING = "toString";
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + "" != INVALID_DATE) require("./_redefine")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
});

},{"./_redefine":"9vAu7"}],"hoeNq":[function(require,module,exports) {
var TO_PRIMITIVE = require("./_wks")("toPrimitive");
var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) require("./_hide")(proto, TO_PRIMITIVE, require("./_date-to-primitive"));

},{"./_wks":"eaoKZ","./_hide":"ddpVq","./_date-to-primitive":"i1V0X"}],"i1V0X":[function(require,module,exports) {
"use strict";
var anObject = require("./_an-object");
var toPrimitive = require("./_to-primitive");
var NUMBER = "number";
module.exports = function(hint) {
    if (hint !== "string" && hint !== NUMBER && hint !== "default") throw TypeError("Incorrect hint");
    return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":"kiL2X","./_to-primitive":"4Oubb"}],"5g48E":[function(require,module,exports) {
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require("./_export");
$export($export.S, "Array", {
    isArray: require("./_is-array")
});

},{"./_export":"1Tgvm","./_is-array":"dTLRt"}],"i3Nvz":[function(require,module,exports) {
"use strict";
var ctx = require("./_ctx");
var $export = require("./_export");
var toObject = require("./_to-object");
var call = require("./_iter-call");
var isArrayIter = require("./_is-array-iter");
var toLength = require("./_to-length");
var createProperty = require("./_create-property");
var getIterFn = require("./core.get-iterator-method");
$export($export.S + $export.F * !require("./_iter-detect")(function(iter) {
    Array.from(iter);
}), "Array", {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
        var O = toObject(arrayLike);
        var C = typeof this == "function" ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = getIterFn(O);
        var length, result, step, iterator;
        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) for(iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++)createProperty(result, index, mapping ? call(iterator, mapfn, [
            step.value,
            index
        ], true) : step.value);
        else {
            length = toLength(O.length);
            for(result = new C(length); length > index; index++)createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
        result.length = index;
        return result;
    }
});

},{"./_ctx":"4rQSm","./_export":"1Tgvm","./_to-object":"7HHXi","./_iter-call":"hZ7Tf","./_is-array-iter":"ipP6u","./_to-length":"irYfS","./_create-property":"8UZLF","./core.get-iterator-method":"hb865","./_iter-detect":"3KQwU"}],"hZ7Tf":[function(require,module,exports) {
// call something on iterator step with safe closing on error
var anObject = require("./_an-object");
module.exports = function(iterator, fn, value, entries) {
    try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
        var ret = iterator["return"];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
    }
};

},{"./_an-object":"kiL2X"}],"ipP6u":[function(require,module,exports) {
// check on default Array iterator
var Iterators = require("./_iterators");
var ITERATOR = require("./_wks")("iterator");
var ArrayProto = Array.prototype;
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":"dITQr","./_wks":"eaoKZ"}],"8UZLF":[function(require,module,exports) {
"use strict";
var $defineProperty = require("./_object-dp");
var createDesc = require("./_property-desc");
module.exports = function(object, index, value) {
    if (index in object) $defineProperty.f(object, index, createDesc(0, value));
    else object[index] = value;
};

},{"./_object-dp":"cLcWd","./_property-desc":"825qY"}],"hb865":[function(require,module,exports) {
var classof = require("./_classof");
var ITERATOR = require("./_wks")("iterator");
var Iterators = require("./_iterators");
module.exports = require("./_core").getIteratorMethod = function(it) {
    if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
};

},{"./_classof":"5TIen","./_wks":"eaoKZ","./_iterators":"dITQr","./_core":"4o9Ko"}],"3KQwU":[function(require,module,exports) {
var ITERATOR = require("./_wks")("iterator");
var SAFE_CLOSING = false;
try {
    var riter = [
        7
    ][ITERATOR]();
    riter["return"] = function() {
        SAFE_CLOSING = true;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function() {
        throw 2;
    });
} catch (e) {}
module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
        var arr = [
            7
        ];
        var iter = arr[ITERATOR]();
        iter.next = function() {
            return {
                done: safe = true
            };
        };
        arr[ITERATOR] = function() {
            return iter;
        };
        exec(arr);
    } catch (e) {}
    return safe;
};

},{"./_wks":"eaoKZ"}],"aLmME":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var createProperty = require("./_create-property");
// WebKit Array.of isn't generic
$export($export.S + $export.F * require("./_fails")(function() {
    function F() {}
    return !(Array.of.call(F) instanceof F);
}), "Array", {
    // 22.1.2.3 Array.of( ...items)
    of: function of() {
        var index = 0;
        var aLen = arguments.length;
        var result = new (typeof this == "function" ? this : Array)(aLen);
        while(aLen > index)createProperty(result, index, arguments[index++]);
        result.length = aLen;
        return result;
    }
});

},{"./_export":"1Tgvm","./_create-property":"8UZLF","./_fails":"iAFH1"}],"lQMhQ":[function(require,module,exports) {
"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var $export = require("./_export");
var toIObject = require("./_to-iobject");
var arrayJoin = [].join;
// fallback for not array-like strings
$export($export.P + $export.F * (require("./_iobject") != Object || !require("./_strict-method")(arrayJoin)), "Array", {
    join: function join(separator) {
        return arrayJoin.call(toIObject(this), separator === undefined ? "," : separator);
    }
});

},{"./_export":"1Tgvm","./_to-iobject":"f9RCz","./_iobject":"24JwK","./_strict-method":"7xXNH"}],"7xXNH":[function(require,module,exports) {
"use strict";
var fails = require("./_fails");
module.exports = function(method, arg) {
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call
        arg ? method.call(null, function() {}, 1) : method.call(null);
    });
};

},{"./_fails":"iAFH1"}],"4E6IU":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var html = require("./_html");
var cof = require("./_cof");
var toAbsoluteIndex = require("./_to-absolute-index");
var toLength = require("./_to-length");
var arraySlice = [].slice;
// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require("./_fails")(function() {
    if (html) arraySlice.call(html);
}), "Array", {
    slice: function slice(begin, end) {
        var len = toLength(this.length);
        var klass = cof(this);
        end = end === undefined ? len : end;
        if (klass == "Array") return arraySlice.call(this, begin, end);
        var start = toAbsoluteIndex(begin, len);
        var upTo = toAbsoluteIndex(end, len);
        var size = toLength(upTo - start);
        var cloned = new Array(size);
        var i = 0;
        for(; i < size; i++)cloned[i] = klass == "String" ? this.charAt(start + i) : this[start + i];
        return cloned;
    }
});

},{"./_export":"1Tgvm","./_html":"lPhWk","./_cof":"frIbo","./_to-absolute-index":"1lPjf","./_to-length":"irYfS","./_fails":"iAFH1"}],"lAyeU":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var aFunction = require("./_a-function");
var toObject = require("./_to-object");
var fails = require("./_fails");
var $sort = [].sort;
var test = [
    1,
    2,
    3
];
$export($export.P + $export.F * (fails(function() {
    // IE8-
    test.sort(undefined);
}) || !fails(function() {
    // V8 bug
    test.sort(null);
// Old WebKit
}) || !require("./_strict-method")($sort)), "Array", {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
        return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
    }
});

},{"./_export":"1Tgvm","./_a-function":"55L9l","./_to-object":"7HHXi","./_fails":"iAFH1","./_strict-method":"7xXNH"}],"7cxLy":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $forEach = require("./_array-methods")(0);
var STRICT = require("./_strict-method")([].forEach, true);
$export($export.P + $export.F * !STRICT, "Array", {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */ ) {
        return $forEach(this, callbackfn, arguments[1]);
    }
});

},{"./_export":"1Tgvm","./_array-methods":"9C3tD","./_strict-method":"7xXNH"}],"9C3tD":[function(require,module,exports) {
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require("./_ctx");
var IObject = require("./_iobject");
var toObject = require("./_to-object");
var toLength = require("./_to-length");
var asc = require("./_array-species-create");
module.exports = function(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function($this, callbackfn, that) {
        var O = toObject($this);
        var self = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            val = self[index];
            res = f(val, index, O);
            if (TYPE) {
                if (IS_MAP) result[index] = res; // map
                else if (res) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return val; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        result.push(val); // filter
                }
                else if (IS_EVERY) return false; // every
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
};

},{"./_ctx":"4rQSm","./_iobject":"24JwK","./_to-object":"7HHXi","./_to-length":"irYfS","./_array-species-create":"93xs6"}],"93xs6":[function(require,module,exports) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require("./_array-species-constructor");
module.exports = function(original, length) {
    return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":"9JYoz"}],"9JYoz":[function(require,module,exports) {
var isObject = require("./_is-object");
var isArray = require("./_is-array");
var SPECIES = require("./_wks")("species");
module.exports = function(original) {
    var C;
    if (isArray(original)) {
        C = original.constructor;
        // cross-realm fallback
        if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = undefined;
        if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return C === undefined ? Array : C;
};

},{"./_is-object":"eIE5K","./_is-array":"dTLRt","./_wks":"eaoKZ"}],"j4ARR":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $map = require("./_array-methods")(1);
$export($export.P + $export.F * !require("./_strict-method")([].map, true), "Array", {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */ ) {
        return $map(this, callbackfn, arguments[1]);
    }
});

},{"./_export":"1Tgvm","./_array-methods":"9C3tD","./_strict-method":"7xXNH"}],"5vJuE":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $filter = require("./_array-methods")(2);
$export($export.P + $export.F * !require("./_strict-method")([].filter, true), "Array", {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */ ) {
        return $filter(this, callbackfn, arguments[1]);
    }
});

},{"./_export":"1Tgvm","./_array-methods":"9C3tD","./_strict-method":"7xXNH"}],"iKQGA":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $some = require("./_array-methods")(3);
$export($export.P + $export.F * !require("./_strict-method")([].some, true), "Array", {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn /* , thisArg */ ) {
        return $some(this, callbackfn, arguments[1]);
    }
});

},{"./_export":"1Tgvm","./_array-methods":"9C3tD","./_strict-method":"7xXNH"}],"5xxJY":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $every = require("./_array-methods")(4);
$export($export.P + $export.F * !require("./_strict-method")([].every, true), "Array", {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn /* , thisArg */ ) {
        return $every(this, callbackfn, arguments[1]);
    }
});

},{"./_export":"1Tgvm","./_array-methods":"9C3tD","./_strict-method":"7xXNH"}],"8tM5y":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $reduce = require("./_array-reduce");
$export($export.P + $export.F * !require("./_strict-method")([].reduce, true), "Array", {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */ ) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], false);
    }
});

},{"./_export":"1Tgvm","./_array-reduce":"743Di","./_strict-method":"7xXNH"}],"743Di":[function(require,module,exports) {
var aFunction = require("./_a-function");
var toObject = require("./_to-object");
var IObject = require("./_iobject");
var toLength = require("./_to-length");
module.exports = function(that, callbackfn, aLen, memo, isRight) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IObject(O);
    var length = toLength(O.length);
    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2) for(;;){
        if (index in self) {
            memo = self[index];
            index += i;
            break;
        }
        index += i;
        if (isRight ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value");
    }
    for(; isRight ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
    return memo;
};

},{"./_a-function":"55L9l","./_to-object":"7HHXi","./_iobject":"24JwK","./_to-length":"irYfS"}],"aNHFx":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $reduce = require("./_array-reduce");
$export($export.P + $export.F * !require("./_strict-method")([].reduceRight, true), "Array", {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], true);
    }
});

},{"./_export":"1Tgvm","./_array-reduce":"743Di","./_strict-method":"7xXNH"}],"76kRN":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $indexOf = require("./_array-includes")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [
    1
].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !require("./_strict-method")($native)), "Array", {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
        return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
});

},{"./_export":"1Tgvm","./_array-includes":"1Ebaw","./_strict-method":"7xXNH"}],"lEw3U":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var toIObject = require("./_to-iobject");
var toInteger = require("./_to-integer");
var toLength = require("./_to-length");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [
    1
].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !require("./_strict-method")($native)), "Array", {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */ ) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
        var O = toIObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;
        for(; index >= 0; index--)if (index in O) {
            if (O[index] === searchElement) return index || 0;
        }
        return -1;
    }
});

},{"./_export":"1Tgvm","./_to-iobject":"f9RCz","./_to-integer":"cb0GT","./_to-length":"irYfS","./_strict-method":"7xXNH"}],"4xbJW":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require("./_export");
$export($export.P, "Array", {
    copyWithin: require("./_array-copy-within")
});
require("./_add-to-unscopables")("copyWithin");

},{"./_export":"1Tgvm","./_array-copy-within":"55wbB","./_add-to-unscopables":"ltQTG"}],"55wbB":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
"use strict";
var toObject = require("./_to-object");
var toAbsoluteIndex = require("./_to-absolute-index");
var toLength = require("./_to-length");
module.exports = [].copyWithin || function copyWithin(target /* = 0 */ , start /* = 0, end = @length */ ) {
    var O = toObject(this);
    var len = toLength(O.length);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
    }
    while(count-- > 0){
        if (from in O) O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
    }
    return O;
};

},{"./_to-object":"7HHXi","./_to-absolute-index":"1lPjf","./_to-length":"irYfS"}],"ltQTG":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require("./_wks")("unscopables");
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require("./_hide")(ArrayProto, UNSCOPABLES, {});
module.exports = function(key) {
    ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_wks":"eaoKZ","./_hide":"ddpVq"}],"bimjQ":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require("./_export");
$export($export.P, "Array", {
    fill: require("./_array-fill")
});
require("./_add-to-unscopables")("fill");

},{"./_export":"1Tgvm","./_array-fill":"dXwYX","./_add-to-unscopables":"ltQTG"}],"dXwYX":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
"use strict";
var toObject = require("./_to-object");
var toAbsoluteIndex = require("./_to-absolute-index");
var toLength = require("./_to-length");
module.exports = function fill(value /* , start = 0, end = @length */ ) {
    var O = toObject(this);
    var length = toLength(O.length);
    var aLen = arguments.length;
    var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
};

},{"./_to-object":"7HHXi","./_to-absolute-index":"1lPjf","./_to-length":"irYfS"}],"cKonp":[function(require,module,exports) {
"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require("./_export");
var $find = require("./_array-methods")(5);
var KEY = "find";
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function() {
    forced = false;
});
$export($export.P + $export.F * forced, "Array", {
    find: function find(callbackfn /* , that = undefined */ ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
require("./_add-to-unscopables")(KEY);

},{"./_export":"1Tgvm","./_array-methods":"9C3tD","./_add-to-unscopables":"ltQTG"}],"t506G":[function(require,module,exports) {
"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require("./_export");
var $find = require("./_array-methods")(6);
var KEY = "findIndex";
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function() {
    forced = false;
});
$export($export.P + $export.F * forced, "Array", {
    findIndex: function findIndex(callbackfn /* , that = undefined */ ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
require("./_add-to-unscopables")(KEY);

},{"./_export":"1Tgvm","./_array-methods":"9C3tD","./_add-to-unscopables":"ltQTG"}],"2S6HD":[function(require,module,exports) {
require("./_set-species")("Array");

},{"./_set-species":"1qQNM"}],"1qQNM":[function(require,module,exports) {
"use strict";
var global = require("./_global");
var dP = require("./_object-dp");
var DESCRIPTORS = require("./_descriptors");
var SPECIES = require("./_wks")("species");
module.exports = function(KEY) {
    var C = global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"./_global":"8xCse","./_object-dp":"cLcWd","./_descriptors":"dr2tY","./_wks":"eaoKZ"}],"1xhrt":[function(require,module,exports) {
"use strict";
var addToUnscopables = require("./_add-to-unscopables");
var step = require("./_iter-step");
var Iterators = require("./_iterators");
var toIObject = require("./_to-iobject");
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require("./_iter-define")(Array, "Array", function(iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
    }
    if (kind == "keys") return step(0, index);
    if (kind == "values") return step(0, O[index]);
    return step(0, [
        index,
        O[index]
    ]);
}, "values");
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");

},{"./_add-to-unscopables":"ltQTG","./_iter-step":"6kbrW","./_iterators":"dITQr","./_to-iobject":"f9RCz","./_iter-define":"egJhK"}],"6kbrW":[function(require,module,exports) {
module.exports = function(done, value) {
    return {
        value: value,
        done: !!done
    };
};

},{}],"gc5Or":[function(require,module,exports) {
var global = require("./_global");
var inheritIfRequired = require("./_inherit-if-required");
var dP = require("./_object-dp").f;
var gOPN = require("./_object-gopn").f;
var isRegExp = require("./_is-regexp");
var $flags = require("./_flags");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;
if (require("./_descriptors") && (!CORRECT_NEW || require("./_fails")(function() {
    re2[require("./_wks")("match")] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, "i") != "/a/i";
}))) {
    $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp;
        var piRE = isRegExp(p);
        var fiU = f === undefined;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
    };
    var proxy = function(key) {
        key in $RegExp || dP($RegExp, key, {
            configurable: true,
            get: function() {
                return Base[key];
            },
            set: function(it) {
                Base[key] = it;
            }
        });
    };
    for(var keys = gOPN(Base), i = 0; keys.length > i;)proxy(keys[i++]);
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    require("./_redefine")(global, "RegExp", $RegExp);
}
require("./_set-species")("RegExp");

},{"./_global":"8xCse","./_inherit-if-required":"9GGeZ","./_object-dp":"cLcWd","./_object-gopn":"jK0Om","./_is-regexp":"aGcfF","./_flags":"KuZtV","./_descriptors":"dr2tY","./_fails":"iAFH1","./_wks":"eaoKZ","./_redefine":"9vAu7","./_set-species":"1qQNM"}],"KuZtV":[function(require,module,exports) {
"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require("./_an-object");
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.unicode) result += "u";
    if (that.sticky) result += "y";
    return result;
};

},{"./_an-object":"kiL2X"}],"fcvkD":[function(require,module,exports) {
"use strict";
var regexpExec = require("./_regexp-exec");
require("./_export")({
    target: "RegExp",
    proto: true,
    forced: regexpExec !== /./.exec
}, {
    exec: regexpExec
});

},{"./_regexp-exec":"lUZX6","./_export":"1Tgvm"}],"lUZX6":[function(require,module,exports) {
"use strict";
var regexpFlags = require("./_flags");
var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = "lastIndex";
var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/, re2 = /b*/g;
    nativeExec.call(re1, "a");
    nativeExec.call(re2, "a");
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}();
// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
if (PATCH) patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    if (NPCG_INCLUDED) reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);
    if (UPDATES_LAST_INDEX_WRONG && match) re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
    // eslint-disable-next-line no-loop-func
    nativeReplace.call(match[0], reCopy, function() {
        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
    });
    return match;
};
module.exports = patchedExec;

},{"./_flags":"KuZtV"}],"aX2Wn":[function(require,module,exports) {
"use strict";
require("./es6.regexp.flags");
var anObject = require("./_an-object");
var $flags = require("./_flags");
var DESCRIPTORS = require("./_descriptors");
var TO_STRING = "toString";
var $toString = /./[TO_STRING];
var define = function(fn) {
    require("./_redefine")(RegExp.prototype, TO_STRING, fn, true);
};
// 21.2.5.14 RegExp.prototype.toString()
if (require("./_fails")(function() {
    return $toString.call({
        source: "a",
        flags: "b"
    }) != "/a/b";
})) define(function toString() {
    var R = anObject(this);
    return "/".concat(R.source, "/", "flags" in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
});
else if ($toString.name != TO_STRING) define(function toString() {
    return $toString.call(this);
});

},{"./es6.regexp.flags":"4cXUu","./_an-object":"kiL2X","./_flags":"KuZtV","./_descriptors":"dr2tY","./_redefine":"9vAu7","./_fails":"iAFH1"}],"4cXUu":[function(require,module,exports) {
// 21.2.5.3 get RegExp.prototype.flags()
if (require("./_descriptors") && /./g.flags != "g") require("./_object-dp").f(RegExp.prototype, "flags", {
    configurable: true,
    get: require("./_flags")
});

},{"./_descriptors":"dr2tY","./_object-dp":"cLcWd","./_flags":"KuZtV"}],"93slC":[function(require,module,exports) {
"use strict";
var anObject = require("./_an-object");
var toLength = require("./_to-length");
var advanceStringIndex = require("./_advance-string-index");
var regExpExec = require("./_regexp-exec-abstract");
// @@match logic
require("./_fix-re-wks")("match", 1, function(defined, MATCH, $match, maybeCallNative) {
    return [
        // `String.prototype.match` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.match
        function match(regexp) {
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[MATCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
        function(regexp) {
            var res = maybeCallNative($match, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while((result = regExpExec(rx, S)) !== null){
                var matchStr = String(result[0]);
                A[n] = matchStr;
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
            }
            return n === 0 ? null : A;
        }
    ];
});

},{"./_an-object":"kiL2X","./_to-length":"irYfS","./_advance-string-index":"dBZmz","./_regexp-exec-abstract":"27rgt","./_fix-re-wks":"80W9B"}],"dBZmz":[function(require,module,exports) {
"use strict";
var at = require("./_string-at")(true);
// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function(S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
};

},{"./_string-at":"rbgP0"}],"27rgt":[function(require,module,exports) {
"use strict";
var classof = require("./_classof");
var builtinExec = RegExp.prototype.exec;
// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function(R, S) {
    var exec = R.exec;
    if (typeof exec === "function") {
        var result = exec.call(R, S);
        if (typeof result !== "object") throw new TypeError("RegExp exec method returned something other than an Object or null");
        return result;
    }
    if (classof(R) !== "RegExp") throw new TypeError("RegExp#exec called on incompatible receiver");
    return builtinExec.call(R, S);
};

},{"./_classof":"5TIen"}],"80W9B":[function(require,module,exports) {
"use strict";
require("./es6.regexp.exec");
var redefine = require("./_redefine");
var hide = require("./_hide");
var fails = require("./_fails");
var defined = require("./_defined");
var wks = require("./_wks");
var regexpExec = require("./_regexp-exec");
var SPECIES = wks("species");
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: "7"
        };
        return result;
    };
    return "".replace(re, "$<a>") !== "7";
});
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    };
    var result = "ab".split(re);
    return result.length === 2 && result[0] === "a" && result[1] === "b";
}();
module.exports = function(KEY, length, exec) {
    var SYMBOL = wks(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
        // String methods call symbol-named RegEp methods
        var O = {};
        O[SYMBOL] = function() {
            return 7;
        };
        return ""[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        re.exec = function() {
            execCalled = true;
            return null;
        };
        if (KEY === "split") {
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function() {
                return re;
            };
        }
        re[SYMBOL]("");
        return !execCalled;
    }) : undefined;
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
        var nativeRegExpMethod = /./[SYMBOL];
        var fns = exec(defined, SYMBOL, ""[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                };
                return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        });
        var strfn = fns[0];
        var rxfn = fns[1];
        redefine(String.prototype, KEY, strfn);
        hide(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
            return rxfn.call(string, this, arg);
        } : function(string) {
            return rxfn.call(string, this);
        });
    }
};

},{"./es6.regexp.exec":"fcvkD","./_redefine":"9vAu7","./_hide":"ddpVq","./_fails":"iAFH1","./_defined":"4Lj5U","./_wks":"eaoKZ","./_regexp-exec":"lUZX6"}],"bsjVi":[function(require,module,exports) {
"use strict";
var anObject = require("./_an-object");
var toObject = require("./_to-object");
var toLength = require("./_to-length");
var toInteger = require("./_to-integer");
var advanceStringIndex = require("./_advance-string-index");
var regExpExec = require("./_regexp-exec-abstract");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
var maybeToString = function(it) {
    return it === undefined ? it : String(it);
};
// @@replace logic
require("./_fix-re-wks")("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
    return [
        // `String.prototype.replace` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
            var O = defined(this);
            var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
            return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
        function(regexp, replaceValue) {
            var res = maybeCallNative($replace, regexp, this, replaceValue);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === "function";
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global = rx.global;
            if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            var results = [];
            while(true){
                var result = regExpExec(rx, S);
                if (result === null) break;
                results.push(result);
                if (!global) break;
                var matchStr = String(result[0]);
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for(var i = 0; i < results.length; i++){
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = [];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = [
                        matched
                    ].concat(captures, position, S);
                    if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                if (position >= nextSourcePosition) {
                    accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
        }
    ];
    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
        }
        return $replace.call(replacement, symbols, function(match, ch) {
            var capture;
            switch(ch.charAt(0)){
                case "$":
                    return "$";
                case "&":
                    return matched;
                case "`":
                    return str.slice(0, position);
                case "'":
                    return str.slice(tailPos);
                case "<":
                    capture = namedCaptures[ch.slice(1, -1)];
                    break;
                default:
                    var n = +ch;
                    if (n === 0) return match;
                    if (n > m) {
                        var f = floor(n / 10);
                        if (f === 0) return match;
                        if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                        return match;
                    }
                    capture = captures[n - 1];
            }
            return capture === undefined ? "" : capture;
        });
    }
});

},{"./_an-object":"kiL2X","./_to-object":"7HHXi","./_to-length":"irYfS","./_to-integer":"cb0GT","./_advance-string-index":"dBZmz","./_regexp-exec-abstract":"27rgt","./_fix-re-wks":"80W9B"}],"ldewt":[function(require,module,exports) {
"use strict";
var anObject = require("./_an-object");
var sameValue = require("./_same-value");
var regExpExec = require("./_regexp-exec-abstract");
// @@search logic
require("./_fix-re-wks")("search", 1, function(defined, SEARCH, $search, maybeCallNative) {
    return [
        // `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function search(regexp) {
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[SEARCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function(regexp) {
            var res = maybeCallNative($search, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var previousLastIndex = rx.lastIndex;
            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
            var result = regExpExec(rx, S);
            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
            return result === null ? -1 : result.index;
        }
    ];
});

},{"./_an-object":"kiL2X","./_same-value":"94M5S","./_regexp-exec-abstract":"27rgt","./_fix-re-wks":"80W9B"}],"iJScv":[function(require,module,exports) {
"use strict";
var isRegExp = require("./_is-regexp");
var anObject = require("./_an-object");
var speciesConstructor = require("./_species-constructor");
var advanceStringIndex = require("./_advance-string-index");
var toLength = require("./_to-length");
var callRegExpExec = require("./_regexp-exec-abstract");
var regexpExec = require("./_regexp-exec");
var fails = require("./_fails");
var $min = Math.min;
var $push = [].push;
var $SPLIT = "split";
var LENGTH = "length";
var LAST_INDEX = "lastIndex";
var MAX_UINT32 = 0xffffffff;
// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function() {
    RegExp(MAX_UINT32, "y");
});
// @@split logic
require("./_fix-re-wks")("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if ("abbc"[$SPLIT](/(b)*/)[1] == "c" || "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH]) // based on es5-shim implementation, need to rework it
    internalSplit = function(separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + "g");
        var match, lastIndex, lastLength;
        while(match = regexpExec.call(separatorCopy, string)){
            lastIndex = separatorCopy[LAST_INDEX];
            if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                lastLength = match[0][LENGTH];
                lastLastIndex = lastIndex;
                if (output[LENGTH] >= splitLimit) break;
            }
            if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
            if (lastLength || !separatorCopy.test("")) output.push("");
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    else if ("0"[$SPLIT](undefined, 0)[LENGTH]) internalSplit = function(separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
    else internalSplit = $split;
    return [
        // `String.prototype.split` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
            var O = defined(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [
                S
            ] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while(q < S.length){
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                var e;
                if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) return A;
                    for(var i = 1; i <= z.length - 1; i++){
                        A.push(z[i]);
                        if (A.length === lim) return A;
                    }
                    q = p = e;
                }
            }
            A.push(S.slice(p));
            return A;
        }
    ];
});

},{"./_is-regexp":"aGcfF","./_an-object":"kiL2X","./_species-constructor":"8Vo8d","./_advance-string-index":"dBZmz","./_to-length":"irYfS","./_regexp-exec-abstract":"27rgt","./_regexp-exec":"lUZX6","./_fails":"iAFH1","./_fix-re-wks":"80W9B"}],"8Vo8d":[function(require,module,exports) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require("./_an-object");
var aFunction = require("./_a-function");
var SPECIES = require("./_wks")("species");
module.exports = function(O, D) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_an-object":"kiL2X","./_a-function":"55L9l","./_wks":"eaoKZ"}],"2sSjP":[function(require,module,exports) {
"use strict";
var LIBRARY = require("./_library");
var global = require("./_global");
var ctx = require("./_ctx");
var classof = require("./_classof");
var $export = require("./_export");
var isObject = require("./_is-object");
var aFunction = require("./_a-function");
var anInstance = require("./_an-instance");
var forOf = require("./_for-of");
var speciesConstructor = require("./_species-constructor");
var task = require("./_task").set;
var microtask = require("./_microtask")();
var newPromiseCapabilityModule = require("./_new-promise-capability");
var perform = require("./_perform");
var userAgent = require("./_user-agent");
var promiseResolve = require("./_promise-resolve");
var PROMISE = "Promise";
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || "";
var $Promise = global[PROMISE];
var isNode = classof(process) == "process";
var empty = function() {};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function() {
    try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[require("./_wks")("species")] = function(exec) {
            exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1;
    } catch (e) {}
}();
// helpers
var isThenable = function(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == "function" ? then : false;
};
var notify = function(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function() {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;
        var run = function(reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
                if (handler) {
                    if (!ok) {
                        if (promise._h == 2) onHandleUnhandled(promise);
                        promise._h = 1;
                    }
                    if (handler === true) result = value;
                    else {
                        if (domain) domain.enter();
                        result = handler(value); // may throw
                        if (domain) {
                            domain.exit();
                            exited = true;
                        }
                    }
                    if (result === reaction.promise) reject(TypeError("Promise-chain cycle"));
                    else if (then = isThenable(result)) then.call(result, resolve, reject);
                    else resolve(result);
                } else reject(value);
            } catch (e) {
                if (domain && !exited) domain.exit();
                reject(e);
            }
        };
        while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
    });
};
var onUnhandled = function(promise) {
    task.call(global, function() {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
            result = perform(function() {
                if (isNode) process.emit("unhandledRejection", value, promise);
                else if (handler = global.onunhandledrejection) handler({
                    promise: promise,
                    reason: value
                });
                else if ((console = global.console) && console.error) console.error("Unhandled promise rejection", value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        }
        promise._a = undefined;
        if (unhandled && result.e) throw result.v;
    });
};
var isUnhandled = function(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function(promise) {
    task.call(global, function() {
        var handler;
        if (isNode) process.emit("rejectionHandled", promise);
        else if (handler = global.onrejectionhandled) handler({
            promise: promise,
            reason: promise._v
        });
    });
};
var $reject = function(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
};
var $resolve = function(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) microtask(function() {
            var wrapper = {
                _w: promise,
                _d: false
            }; // wrap
            try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
                $reject.call(wrapper, e);
            }
        });
        else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
        }
    } catch (e) {
        $reject.call({
            _w: promise,
            _d: false
        }, e); // wrap
    }
};
// constructor polyfill
if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, "_h");
        aFunction(executor);
        Internal.call(this);
        try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
            $reject.call(this, err);
        }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
        this._c = []; // <- awaiting reactions
        this._a = undefined; // <- checked in isUnhandled reactions
        this._s = 0; // <- state
        this._d = false; // <- done
        this._v = undefined; // <- value
        this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false; // <- notify
    };
    Internal.prototype = require("./_redefine-all")($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
            reaction.fail = typeof onRejected == "function" && onRejected;
            reaction.domain = isNode ? process.domain : undefined;
            this._c.push(reaction);
            if (this._a) this._a.push(reaction);
            if (this._s) notify(this, false);
            return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        "catch": function(onRejected) {
            return this.then(undefined, onRejected);
        }
    });
    OwnPromiseCapability = function() {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
    Promise: $Promise
});
require("./_set-to-string-tag")($Promise, PROMISE);
require("./_set-species")(PROMISE);
Wrapper = require("./_core")[PROMISE];
// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
    }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
        return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
    }
});
$export($export.S + $export.F * !(USE_NATIVE && require("./_iter-detect")(function(iter) {
    $Promise.all(iter)["catch"](empty);
})), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var values = [];
            var index = 0;
            var remaining = 1;
            forOf(iterable, false, function(promise) {
                var $index = index++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                C.resolve(promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                }, reject);
            });
            --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function() {
            forOf(iterable, false, function(promise) {
                C.resolve(promise).then(capability.resolve, reject);
            });
        });
        if (result.e) reject(result.v);
        return capability.promise;
    }
});

},{"./_library":"lmtqY","./_global":"8xCse","./_ctx":"4rQSm","./_classof":"5TIen","./_export":"1Tgvm","./_is-object":"eIE5K","./_a-function":"55L9l","./_an-instance":"ivm35","./_for-of":"9a8I8","./_species-constructor":"8Vo8d","./_task":"bPiT9","./_microtask":"8lwWF","./_new-promise-capability":"clM6P","./_perform":"7Nx5Z","./_user-agent":"9eCfU","./_promise-resolve":"58Dua","./_wks":"eaoKZ","./_redefine-all":"6Mnp5","./_set-to-string-tag":"7YXlq","./_set-species":"1qQNM","./_core":"4o9Ko","./_iter-detect":"3KQwU"}],"ivm35":[function(require,module,exports) {
module.exports = function(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) throw TypeError(name + ": incorrect invocation!");
    return it;
};

},{}],"9a8I8":[function(require,module,exports) {
var ctx = require("./_ctx");
var call = require("./_iter-call");
var isArrayIter = require("./_is-array-iter");
var anObject = require("./_an-object");
var toLength = require("./_to-length");
var getIterFn = require("./core.get-iterator-method");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function() {
        return iterable;
    } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != "function") throw TypeError(iterable + " is not iterable!");
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for(length = toLength(iterable.length); length > index; index++){
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
    }
    else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done;){
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
    }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_ctx":"4rQSm","./_iter-call":"hZ7Tf","./_is-array-iter":"ipP6u","./_an-object":"kiL2X","./_to-length":"irYfS","./core.get-iterator-method":"hb865"}],"bPiT9":[function(require,module,exports) {
var ctx = require("./_ctx");
var invoke = require("./_invoke");
var html = require("./_html");
var cel = require("./_dom-create");
var global = require("./_global");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var defer, channel, port;
var run = function() {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var listener = function(event) {
    run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while(arguments.length > i)args.push(arguments[i++]);
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func
            invoke(typeof fn == "function" ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
    };
    clearTask = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (require("./_cof")(process) == "process") defer = function(id) {
        process.nextTick(ctx(run, id, 1));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(ctx(run, id, 1));
    };
    else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == "function" && !global.importScripts) {
        defer = function(id) {
            global.postMessage(id + "", "*");
        };
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in cel("script")) defer = function(id) {
        html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
        };
    };
    else defer = function(id) {
        setTimeout(ctx(run, id, 1), 0);
    };
}
module.exports = {
    set: setTask,
    clear: clearTask
};

},{"./_ctx":"4rQSm","./_invoke":"c7Bab","./_html":"lPhWk","./_dom-create":"2qBag","./_global":"8xCse","./_cof":"frIbo"}],"8lwWF":[function(require,module,exports) {
var global = require("./_global");
var macrotask = require("./_task").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require("./_cof")(process) == "process";
module.exports = function() {
    var head, last, notify;
    var flush = function() {
        var parent, fn;
        if (isNode && (parent = process.domain)) parent.exit();
        while(head){
            fn = head.fn;
            head = head.next;
            try {
                fn();
            } catch (e) {
                if (head) notify();
                else last = undefined;
                throw e;
            }
        }
        last = undefined;
        if (parent) parent.enter();
    };
    // Node.js
    if (isNode) notify = function() {
        process.nextTick(flush);
    };
    else if (Observer && !(global.navigator && global.navigator.standalone)) {
        var toggle = true;
        var node = document.createTextNode("");
        new Observer(flush).observe(node, {
            characterData: true
        }); // eslint-disable-line no-new
        notify = function() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise.resolve(undefined);
        notify = function() {
            promise.then(flush);
        };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else notify = function() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
    };
    return function(fn) {
        var task = {
            fn: fn,
            next: undefined
        };
        if (last) last.next = task;
        if (!head) {
            head = task;
            notify();
        }
        last = task;
    };
};

},{"./_global":"8xCse","./_task":"bPiT9","./_cof":"frIbo"}],"clM6P":[function(require,module,exports) {
"use strict";
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require("./_a-function");
function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
}
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"./_a-function":"55L9l"}],"7Nx5Z":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return {
            e: false,
            v: exec()
        };
    } catch (e) {
        return {
            e: true,
            v: e
        };
    }
};

},{}],"9eCfU":[function(require,module,exports) {
var global = require("./_global");
var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || "";

},{"./_global":"8xCse"}],"58Dua":[function(require,module,exports) {
var anObject = require("./_an-object");
var isObject = require("./_is-object");
var newPromiseCapability = require("./_new-promise-capability");
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"./_an-object":"kiL2X","./_is-object":"eIE5K","./_new-promise-capability":"clM6P"}],"6Mnp5":[function(require,module,exports) {
var redefine = require("./_redefine");
module.exports = function(target, src, safe) {
    for(var key in src)redefine(target, key, src[key], safe);
    return target;
};

},{"./_redefine":"9vAu7"}],"1kXi9":[function(require,module,exports) {
"use strict";
var strong = require("./_collection-strong");
var validate = require("./_validate-collection");
var MAP = "Map";
// 23.1 Map Objects
module.exports = require("./_collection")(MAP, function(get) {
    return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
}, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
    }
}, strong, true);

},{"./_collection-strong":"65T55","./_validate-collection":"8oFKK","./_collection":"6SH4d"}],"65T55":[function(require,module,exports) {
"use strict";
var dP = require("./_object-dp").f;
var create = require("./_object-create");
var redefineAll = require("./_redefine-all");
var ctx = require("./_ctx");
var anInstance = require("./_an-instance");
var forOf = require("./_for-of");
var $iterDefine = require("./_iter-define");
var step = require("./_iter-step");
var setSpecies = require("./_set-species");
var DESCRIPTORS = require("./_descriptors");
var fastKey = require("./_meta").fastKey;
var validate = require("./_validate-collection");
var SIZE = DESCRIPTORS ? "_s" : "size";
var getEntry = function(that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== "F") return that._i[index];
    // frozen object case
    for(entry = that._f; entry; entry = entry.n){
        if (entry.k == key) return entry;
    }
};
module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME, "_i");
            that._t = NAME; // collection type
            that._i = create(null); // index
            that._f = undefined; // first entry
            that._l = undefined; // last entry
            that[SIZE] = 0; // size
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
                for(var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n){
                    entry.r = true;
                    if (entry.p) entry.p = entry.p.n = undefined;
                    delete data[entry.i];
                }
                that._f = that._l = undefined;
                that[SIZE] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            "delete": function(key) {
                var that = validate(this, NAME);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.n;
                    var prev = entry.p;
                    delete that._i[entry.i];
                    entry.r = true;
                    if (prev) prev.n = next;
                    if (next) next.p = prev;
                    if (that._f == entry) that._f = next;
                    if (that._l == entry) that._l = prev;
                    that[SIZE]--;
                }
                return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach(callbackfn /* , that = undefined */ ) {
                validate(this, NAME);
                var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;
                while(entry = entry ? entry.n : this._f){
                    f(entry.v, entry.k, this);
                    // revert to the last existing entry
                    while(entry && entry.r)entry = entry.p;
                }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
                return !!getEntry(validate(this, NAME), key);
            }
        });
        if (DESCRIPTORS) dP(C.prototype, "size", {
            get: function() {
                return validate(this, NAME)[SIZE];
            }
        });
        return C;
    },
    def: function(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        // change existing entry
        if (entry) entry.v = value;
        else {
            that._l = entry = {
                i: index = fastKey(key, true),
                k: key,
                v: value,
                p: prev = that._l,
                n: undefined,
                r: false // <- removed
            };
            if (!that._f) that._f = entry;
            if (prev) prev.n = entry;
            that[SIZE]++;
            // add to index
            if (index !== "F") that._i[index] = entry;
        }
        return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        $iterDefine(C, NAME, function(iterated, kind) {
            this._t = validate(iterated, NAME); // target
            this._k = kind; // kind
            this._l = undefined; // previous
        }, function() {
            var that = this;
            var kind = that._k;
            var entry = that._l;
            // revert to the last existing entry
            while(entry && entry.r)entry = entry.p;
            // get next entry
            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                // or finish the iteration
                that._t = undefined;
                return step(1);
            }
            // return step by kind
            if (kind == "keys") return step(0, entry.k);
            if (kind == "values") return step(0, entry.v);
            return step(0, [
                entry.k,
                entry.v
            ]);
        }, IS_MAP ? "entries" : "values", !IS_MAP, true);
        // add [@@species], 23.1.2.2, 23.2.2.2
        setSpecies(NAME);
    }
};

},{"./_object-dp":"cLcWd","./_object-create":"b4m8n","./_redefine-all":"6Mnp5","./_ctx":"4rQSm","./_an-instance":"ivm35","./_for-of":"9a8I8","./_iter-define":"egJhK","./_iter-step":"6kbrW","./_set-species":"1qQNM","./_descriptors":"dr2tY","./_meta":"043Qa","./_validate-collection":"8oFKK"}],"8oFKK":[function(require,module,exports) {
var isObject = require("./_is-object");
module.exports = function(it, TYPE) {
    if (!isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
    return it;
};

},{"./_is-object":"eIE5K"}],"6SH4d":[function(require,module,exports) {
"use strict";
var global = require("./_global");
var $export = require("./_export");
var redefine = require("./_redefine");
var redefineAll = require("./_redefine-all");
var meta = require("./_meta");
var forOf = require("./_for-of");
var anInstance = require("./_an-instance");
var isObject = require("./_is-object");
var fails = require("./_fails");
var $iterDetect = require("./_iter-detect");
var setToStringTag = require("./_set-to-string-tag");
var inheritIfRequired = require("./_inherit-if-required");
module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? "set" : "add";
    var proto = C && C.prototype;
    var O = {};
    var fixMethod = function(KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY, KEY == "delete" ? function(a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == "has" ? function has(a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == "get" ? function get(a) {
            return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == "add" ? function add(a) {
            fn.call(this, a === 0 ? 0 : a);
            return this;
        } : function set(a, b) {
            fn.call(this, a === 0 ? 0 : a, b);
            return this;
        });
    };
    if (typeof C != "function" || !(IS_WEAK || proto.forEach && !fails(function() {
        new C().entries().next();
    }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
    } else {
        var instance = new C();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        var ACCEPT_ITERABLES = $iterDetect(function(iter) {
            new C(iter);
        }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new C();
            var index = 5;
            while(index--)$instance[ADDER](index, index);
            return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
            C = wrapper(function(target, iterable) {
                anInstance(target, C, NAME);
                var that = inheritIfRequired(new Base(), target, C);
                if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                return that;
            });
            C.prototype = proto;
            proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && proto.clear) delete proto.clear;
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
};

},{"./_global":"8xCse","./_export":"1Tgvm","./_redefine":"9vAu7","./_redefine-all":"6Mnp5","./_meta":"043Qa","./_for-of":"9a8I8","./_an-instance":"ivm35","./_is-object":"eIE5K","./_fails":"iAFH1","./_iter-detect":"3KQwU","./_set-to-string-tag":"7YXlq","./_inherit-if-required":"9GGeZ"}],"61Y2Y":[function(require,module,exports) {
"use strict";
var strong = require("./_collection-strong");
var validate = require("./_validate-collection");
var SET = "Set";
// 23.2 Set Objects
module.exports = require("./_collection")(SET, function(get) {
    return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
}, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
        return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
    }
}, strong);

},{"./_collection-strong":"65T55","./_validate-collection":"8oFKK","./_collection":"6SH4d"}],"dAOwL":[function(require,module,exports) {
"use strict";
var global = require("./_global");
var each = require("./_array-methods")(0);
var redefine = require("./_redefine");
var meta = require("./_meta");
var assign = require("./_object-assign");
var weak = require("./_collection-weak");
var isObject = require("./_is-object");
var validate = require("./_validate-collection");
var NATIVE_WEAK_MAP = require("./_validate-collection");
var IS_IE11 = !global.ActiveXObject && "ActiveXObject" in global;
var WEAK_MAP = "WeakMap";
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;
var wrapper = function(get) {
    return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
};
var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
        if (isObject(key)) {
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
            return data ? data[this._i] : undefined;
        }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
    }
};
// 23.3 WeakMap Objects
var $WeakMap = module.exports = require("./_collection")(WEAK_MAP, wrapper, methods, weak, true, true);
// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each([
        "delete",
        "has",
        "get",
        "set"
    ], function(key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function(a, b) {
            // store frozen objects on internal weakmap shim
            if (isObject(a) && !isExtensible(a)) {
                if (!this._f) this._f = new InternalMap();
                var result = this._f[key](a, b);
                return key == "set" ? this : result;
            // store all the rest on native weakmap
            }
            return method.call(this, a, b);
        });
    });
}

},{"./_global":"8xCse","./_array-methods":"9C3tD","./_redefine":"9vAu7","./_meta":"043Qa","./_object-assign":"h8iBq","./_collection-weak":"lBiRK","./_is-object":"eIE5K","./_validate-collection":"8oFKK","./_collection":"6SH4d"}],"lBiRK":[function(require,module,exports) {
"use strict";
var redefineAll = require("./_redefine-all");
var getWeak = require("./_meta").getWeak;
var anObject = require("./_an-object");
var isObject = require("./_is-object");
var anInstance = require("./_an-instance");
var forOf = require("./_for-of");
var createArrayMethod = require("./_array-methods");
var $has = require("./_has");
var validate = require("./_validate-collection");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;
// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that) {
    return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
    this.a = [];
};
var findUncaughtFrozen = function(store, key) {
    return arrayFind(store.a, function(it) {
        return it[0] === key;
    });
};
UncaughtFrozenStore.prototype = {
    get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
    },
    has: function(key) {
        return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;
        else this.a.push([
            key,
            value
        ]);
    },
    "delete": function(key) {
        var index = arrayFindIndex(this.a, function(it) {
            return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
    }
};
module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME, "_i");
            that._t = NAME; // collection type
            that._i = id++; // collection id
            that._l = undefined; // leak store for uncaught frozen objects
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            "delete": function(key) {
                if (!isObject(key)) return false;
                var data = getWeak(key);
                if (data === true) return uncaughtFrozenStore(validate(this, NAME))["delete"](key);
                return data && $has(data, this._i) && delete data[this._i];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has(key) {
                if (!isObject(key)) return false;
                var data = getWeak(key);
                if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
                return data && $has(data, this._i);
            }
        });
        return C;
    },
    def: function(that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);
        else data[that._i] = value;
        return that;
    },
    ufstore: uncaughtFrozenStore
};

},{"./_redefine-all":"6Mnp5","./_meta":"043Qa","./_an-object":"kiL2X","./_is-object":"eIE5K","./_an-instance":"ivm35","./_for-of":"9a8I8","./_array-methods":"9C3tD","./_has":"biQ7v","./_validate-collection":"8oFKK"}],"blRp6":[function(require,module,exports) {
"use strict";
var weak = require("./_collection-weak");
var validate = require("./_validate-collection");
var WEAK_SET = "WeakSet";
// 23.4 WeakSet Objects
require("./_collection")(WEAK_SET, function(get) {
    return function WeakSet() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
}, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
        return weak.def(validate(this, WEAK_SET), value, true);
    }
}, weak, false, true);

},{"./_collection-weak":"lBiRK","./_validate-collection":"8oFKK","./_collection":"6SH4d"}],"dp2Nn":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var $typed = require("./_typed");
var buffer = require("./_typed-buffer");
var anObject = require("./_an-object");
var toAbsoluteIndex = require("./_to-absolute-index");
var toLength = require("./_to-length");
var isObject = require("./_is-object");
var ArrayBuffer = require("./_global").ArrayBuffer;
var speciesConstructor = require("./_species-constructor");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = "ArrayBuffer";
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
    ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
        return $isView && $isView(it) || isObject(it) && VIEW in it;
    }
});
$export($export.P + $export.U + $export.F * require("./_fails")(function() {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
        if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
        var len = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, len);
        var fin = toAbsoluteIndex(end === undefined ? len : end, len);
        var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
        var viewS = new $DataView(this);
        var viewT = new $DataView(result);
        var index = 0;
        while(first < fin)viewT.setUint8(index++, viewS.getUint8(first++));
        return result;
    }
});
require("./_set-species")(ARRAY_BUFFER);

},{"./_export":"1Tgvm","./_typed":"euXsj","./_typed-buffer":"bO20V","./_an-object":"kiL2X","./_to-absolute-index":"1lPjf","./_to-length":"irYfS","./_is-object":"eIE5K","./_global":"8xCse","./_species-constructor":"8Vo8d","./_fails":"iAFH1","./_set-species":"1qQNM"}],"euXsj":[function(require,module,exports) {
var global = require("./_global");
var hide = require("./_hide");
var uid = require("./_uid");
var TYPED = uid("typed_array");
var VIEW = uid("view");
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
while(i < l)if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
} else CONSTR = false;
module.exports = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
};

},{"./_global":"8xCse","./_hide":"ddpVq","./_uid":"gBq6n"}],"bO20V":[function(require,module,exports) {
"use strict";
var global = require("./_global");
var DESCRIPTORS = require("./_descriptors");
var LIBRARY = require("./_library");
var $typed = require("./_typed");
var hide = require("./_hide");
var redefineAll = require("./_redefine-all");
var fails = require("./_fails");
var anInstance = require("./_an-instance");
var toInteger = require("./_to-integer");
var toLength = require("./_to-length");
var toIndex = require("./_to-index");
var gOPN = require("./_object-gopn").f;
var dP = require("./_object-dp").f;
var arrayFill = require("./_array-fill");
var setToStringTag = require("./_set-to-string-tag");
var ARRAY_BUFFER = "ArrayBuffer";
var DATA_VIEW = "DataView";
var PROTOTYPE = "prototype";
var WRONG_LENGTH = "Wrong length!";
var WRONG_INDEX = "Wrong index!";
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = "buffer";
var BYTE_LENGTH = "byteLength";
var BYTE_OFFSET = "byteOffset";
var $BUFFER = DESCRIPTORS ? "_b" : BUFFER;
var $LENGTH = DESCRIPTORS ? "_l" : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? "_o" : BYTE_OFFSET;
// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
    var buffer = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs(value);
    // eslint-disable-next-line no-self-compare
    if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
    } else {
        e = floor(log(value) / LN2);
        if (value * (c = pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * pow(2, eBias - 1) * pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
    buffer[--i] |= s * 128;
    return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer[i--];
    var e = s & 127;
    var m;
    s >>= 7;
    for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : s ? -Infinity : Infinity;
    else {
        m = m + pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * pow(2, e - mLen);
}
function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
    return [
        it & 0xff
    ];
}
function packI16(it) {
    return [
        it & 0xff,
        it >> 8 & 0xff
    ];
}
function packI32(it) {
    return [
        it & 0xff,
        it >> 8 & 0xff,
        it >> 16 & 0xff,
        it >> 24 & 0xff
    ];
}
function packF64(it) {
    return packIEEE754(it, 52, 8);
}
function packF32(it) {
    return packIEEE754(it, 23, 4);
}
function addGetter(C, key, internal) {
    dP(C[PROTOTYPE], key, {
        get: function() {
            return this[internal];
        }
    });
}
function get(view, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = conversion(+value);
    for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}
if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = toIndex(length);
        this._b = arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
    };
    $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError("Wrong offset!");
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
    };
    if (DESCRIPTORS) {
        addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
        addGetter($DataView, BUFFER, "_b");
        addGetter($DataView, BYTE_LENGTH, "_l");
        addGetter($DataView, BYTE_OFFSET, "_o");
    }
    redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset /* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset /* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset /* , littleEndian */ ) {
            return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset /* , littleEndian */ ) {
            return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset /* , littleEndian */ ) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset /* , littleEndian */ ) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value /* , littleEndian */ ) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value /* , littleEndian */ ) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value /* , littleEndian */ ) {
            set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
    });
} else {
    if (!fails(function() {
        $ArrayBuffer(1);
    }) || !fails(function() {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
    }) || fails(function() {
        new $ArrayBuffer(); // eslint-disable-line no-new
        new $ArrayBuffer(1.5); // eslint-disable-line no-new
        new $ArrayBuffer(NaN); // eslint-disable-line no-new
        return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
        $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer);
            return new BaseBuffer(toIndex(length));
        };
        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
        for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;)if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
        if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
    }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_global":"8xCse","./_descriptors":"dr2tY","./_library":"lmtqY","./_typed":"euXsj","./_hide":"ddpVq","./_redefine-all":"6Mnp5","./_fails":"iAFH1","./_an-instance":"ivm35","./_to-integer":"cb0GT","./_to-length":"irYfS","./_to-index":"3tbBZ","./_object-gopn":"jK0Om","./_object-dp":"cLcWd","./_array-fill":"dXwYX","./_set-to-string-tag":"7YXlq"}],"3tbBZ":[function(require,module,exports) {
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require("./_to-integer");
var toLength = require("./_to-length");
module.exports = function(it) {
    if (it === undefined) return 0;
    var number = toInteger(it);
    var length = toLength(number);
    if (number !== length) throw RangeError("Wrong length!");
    return length;
};

},{"./_to-integer":"cb0GT","./_to-length":"irYfS"}],"FLhcC":[function(require,module,exports) {
var $export = require("./_export");
$export($export.G + $export.W + $export.F * !require("./_typed").ABV, {
    DataView: require("./_typed-buffer").DataView
});

},{"./_export":"1Tgvm","./_typed":"euXsj","./_typed-buffer":"bO20V"}],"2PtAR":[function(require,module,exports) {
require("./_typed-array")("Int8", 1, function(init) {
    return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"heDu8":[function(require,module,exports) {
"use strict";
if (require("./_descriptors")) {
    var LIBRARY = require("./_library");
    var global = require("./_global");
    var fails = require("./_fails");
    var $export = require("./_export");
    var $typed = require("./_typed");
    var $buffer = require("./_typed-buffer");
    var ctx = require("./_ctx");
    var anInstance = require("./_an-instance");
    var propertyDesc = require("./_property-desc");
    var hide = require("./_hide");
    var redefineAll = require("./_redefine-all");
    var toInteger = require("./_to-integer");
    var toLength = require("./_to-length");
    var toIndex = require("./_to-index");
    var toAbsoluteIndex = require("./_to-absolute-index");
    var toPrimitive = require("./_to-primitive");
    var has = require("./_has");
    var classof = require("./_classof");
    var isObject = require("./_is-object");
    var toObject = require("./_to-object");
    var isArrayIter = require("./_is-array-iter");
    var create = require("./_object-create");
    var getPrototypeOf = require("./_object-gpo");
    var gOPN = require("./_object-gopn").f;
    var getIterFn = require("./core.get-iterator-method");
    var uid = require("./_uid");
    var wks = require("./_wks");
    var createArrayMethod = require("./_array-methods");
    var createArrayIncludes = require("./_array-includes");
    var speciesConstructor = require("./_species-constructor");
    var ArrayIterators = require("./es6.array.iterator");
    var Iterators = require("./_iterators");
    var $iterDetect = require("./_iter-detect");
    var setSpecies = require("./_set-species");
    var arrayFill = require("./_array-fill");
    var arrayCopyWithin = require("./_array-copy-within");
    var $DP = require("./_object-dp");
    var $GOPD = require("./_object-gopd");
    var dP = $DP.f;
    var gOPD = $GOPD.f;
    var RangeError = global.RangeError;
    var TypeError = global.TypeError;
    var Uint8Array = global.Uint8Array;
    var ARRAY_BUFFER = "ArrayBuffer";
    var SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
    var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
    var PROTOTYPE = "prototype";
    var ArrayProto = Array[PROTOTYPE];
    var $ArrayBuffer = $buffer.ArrayBuffer;
    var $DataView = $buffer.DataView;
    var arrayForEach = createArrayMethod(0);
    var arrayFilter = createArrayMethod(2);
    var arraySome = createArrayMethod(3);
    var arrayEvery = createArrayMethod(4);
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var arrayIncludes = createArrayIncludes(true);
    var arrayIndexOf = createArrayIncludes(false);
    var arrayValues = ArrayIterators.values;
    var arrayKeys = ArrayIterators.keys;
    var arrayEntries = ArrayIterators.entries;
    var arrayLastIndexOf = ArrayProto.lastIndexOf;
    var arrayReduce = ArrayProto.reduce;
    var arrayReduceRight = ArrayProto.reduceRight;
    var arrayJoin = ArrayProto.join;
    var arraySort = ArrayProto.sort;
    var arraySlice = ArrayProto.slice;
    var arrayToString = ArrayProto.toString;
    var arrayToLocaleString = ArrayProto.toLocaleString;
    var ITERATOR = wks("iterator");
    var TAG = wks("toStringTag");
    var TYPED_CONSTRUCTOR = uid("typed_constructor");
    var DEF_CONSTRUCTOR = uid("def_constructor");
    var ALL_CONSTRUCTORS = $typed.CONSTR;
    var TYPED_ARRAY = $typed.TYPED;
    var VIEW = $typed.VIEW;
    var WRONG_LENGTH = "Wrong length!";
    var $map = createArrayMethod(1, function(O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });
    var LITTLE_ENDIAN = fails(function() {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([
            1
        ]).buffer)[0] === 1;
    });
    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function() {
        new Uint8Array(1).set({});
    });
    var toOffset = function(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError("Wrong offset!");
        return offset;
    };
    var validate = function(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + " is not a typed array!");
    };
    var allocate = function(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) throw TypeError("It is not a typed array constructor!");
        return new C(length);
    };
    var speciesFromList = function(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };
    var fromList = function(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);
        while(length > index)result[index] = list[index++];
        return result;
    };
    var addGetter = function(it, key, internal) {
        dP(it, key, {
            get: function() {
                return this._d[internal];
            }
        });
    };
    var $from = function from(source /* , mapfn, thisArg */ ) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;
        if (iterFn != undefined && !isArrayIter(iterFn)) {
            for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++)values.push(step.value);
            O = values;
        }
        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
        for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++)result[i] = mapping ? mapfn(O[i], i) : O[i];
        return result;
    };
    var $of = function of() {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);
        while(length > index)result[index] = arguments[index++];
        return result;
    };
    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function() {
        arrayToLocaleString.call(new Uint8Array(1));
    });
    var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };
    var proto = {
        copyWithin: function copyWithin(target, start /* , end */ ) {
            return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn /* , thisArg */ ) {
            return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value /* , start, end */ ) {
            return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn /* , thisArg */ ) {
            return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate /* , thisArg */ ) {
            return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate /* , thisArg */ ) {
            return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn /* , thisArg */ ) {
            arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement /* , fromIndex */ ) {
            return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement /* , fromIndex */ ) {
            return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
            return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */ ) {
            return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn /* , thisArg */ ) {
            return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn /* , initialValue */ ) {
            return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
            return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
            var that = this;
            var length = validate(that).length;
            var middle = Math.floor(length / 2);
            var index = 0;
            var value;
            while(index < middle){
                value = that[index];
                that[index++] = that[--length];
                that[length] = value;
            }
            return that;
        },
        some: function some(callbackfn /* , thisArg */ ) {
            return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
            return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
            var O = validate(this);
            var length = O.length;
            var $begin = toAbsoluteIndex(begin, length);
            return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
        }
    };
    var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };
    var $set = function set(arrayLike /* , offset */ ) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);
        while(index < len)this[offset + index] = src[index++];
    };
    var $iterators = {
        entries: function entries() {
            return arrayEntries.call(validate(this));
        },
        keys: function keys() {
            return arrayKeys.call(validate(this));
        },
        values: function values() {
            return arrayValues.call(validate(this));
        }
    };
    var isTAIndex = function(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && typeof key != "symbol" && key in target && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };
    var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, "value") && !has(desc, "get") && !has(desc, "set") && !desc.configurable && (!has(desc, "writable") || desc.writable) && (!has(desc, "enumerable") || desc.enumerable)) {
            target[key] = desc.value;
            return target;
        }
        return dP(target, key, desc);
    };
    if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
    }
    $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
    });
    if (fails(function() {
        arrayToString.call({});
    })) arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
    };
    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function() {},
        toString: arrayToString,
        toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, "buffer", "b");
    addGetter($TypedArrayPrototype$, "byteOffset", "o");
    addGetter($TypedArrayPrototype$, "byteLength", "l");
    addGetter($TypedArrayPrototype$, "length", "e");
    dP($TypedArrayPrototype$, TAG, {
        get: function() {
            return this[TYPED_ARRAY];
        }
    });
    // eslint-disable-next-line max-statements
    module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? "Clamped" : "") + "Array";
        var GETTER = "get" + KEY;
        var SETTER = "set" + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
        var getter = function(that, index) {
            var data = that._d;
            return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };
        var setter = function(that, index, value) {
            var data = that._d;
            if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
            data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };
        var addElement = function(that, index) {
            dP(that, index, {
                get: function() {
                    return getter(this, index);
                },
                set: function(value) {
                    return setter(this, index, value);
                },
                enumerable: true
            });
        };
        if (FORCED) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
                anInstance(that, TypedArray, NAME, "_d");
                var index = 0;
                var offset = 0;
                var buffer, byteLength, length, klass;
                if (!isObject(data)) {
                    length = toIndex(data);
                    byteLength = length * BYTES;
                    buffer = new $ArrayBuffer(byteLength);
                } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                    buffer = data;
                    offset = toOffset($offset, BYTES);
                    var $len = data.byteLength;
                    if ($length === undefined) {
                        if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                        byteLength = $len - offset;
                        if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                    } else {
                        byteLength = toLength($length) * BYTES;
                        if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                    }
                    length = byteLength / BYTES;
                } else if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                else return $from.call(TypedArray, data);
                hide(that, "_d", {
                    b: buffer,
                    o: offset,
                    l: byteLength,
                    e: length,
                    v: new $DataView(buffer)
                });
                while(index < length)addElement(that, index++);
            });
            TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
            hide(TypedArrayPrototype, "constructor", TypedArray);
        } else if (!fails(function() {
            TypedArray(1);
        }) || !fails(function() {
            new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function(iter) {
            new TypedArray(); // eslint-disable-line no-new
            new TypedArray(null); // eslint-disable-line no-new
            new TypedArray(1.5); // eslint-disable-line no-new
            new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
                anInstance(that, TypedArray, NAME);
                var klass;
                // `ws` module bug, temporarily remove validation length for Uint8Array
                // https://github.com/websockets/ws/pull/645
                if (!isObject(data)) return new Base(toIndex(data));
                if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
                if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                return $from.call(TypedArray, data);
            });
            arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
                if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
            });
            TypedArray[PROTOTYPE] = TypedArrayPrototype;
            if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }
        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == "values" || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) dP(TypedArrayPrototype, TAG, {
            get: function() {
                return NAME;
            }
        });
        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
            BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails(function() {
            Base.of.call(TypedArray, 1);
        }), NAME, {
            from: $from,
            of: $of
        });
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
            set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export($export.P + $export.F * fails(function() {
            new TypedArray(1).slice();
        }), NAME, {
            slice: $slice
        });
        $export($export.P + $export.F * (fails(function() {
            return [
                1,
                2
            ].toLocaleString() != new TypedArray([
                1,
                2
            ]).toLocaleString();
        }) || !fails(function() {
            TypedArrayPrototype.toLocaleString.call([
                1,
                2
            ]);
        })), NAME, {
            toLocaleString: $toLocaleString
        });
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
} else module.exports = function() {};

},{"./_descriptors":"dr2tY","./_library":"lmtqY","./_global":"8xCse","./_fails":"iAFH1","./_export":"1Tgvm","./_typed":"euXsj","./_typed-buffer":"bO20V","./_ctx":"4rQSm","./_an-instance":"ivm35","./_property-desc":"825qY","./_hide":"ddpVq","./_redefine-all":"6Mnp5","./_to-integer":"cb0GT","./_to-length":"irYfS","./_to-index":"3tbBZ","./_to-absolute-index":"1lPjf","./_to-primitive":"4Oubb","./_has":"biQ7v","./_classof":"5TIen","./_is-object":"eIE5K","./_to-object":"7HHXi","./_is-array-iter":"ipP6u","./_object-create":"b4m8n","./_object-gpo":"4uFAD","./_object-gopn":"jK0Om","./core.get-iterator-method":"hb865","./_uid":"gBq6n","./_wks":"eaoKZ","./_array-methods":"9C3tD","./_array-includes":"1Ebaw","./_species-constructor":"8Vo8d","./es6.array.iterator":"1xhrt","./_iterators":"dITQr","./_iter-detect":"3KQwU","./_set-species":"1qQNM","./_array-fill":"dXwYX","./_array-copy-within":"55wbB","./_object-dp":"cLcWd","./_object-gopd":"4bAUG"}],"g4j5m":[function(require,module,exports) {
require("./_typed-array")("Uint8", 1, function(init) {
    return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"68vHx":[function(require,module,exports) {
require("./_typed-array")("Uint8", 1, function(init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
}, true);

},{"./_typed-array":"heDu8"}],"iZyZL":[function(require,module,exports) {
require("./_typed-array")("Int16", 2, function(init) {
    return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"4Jyn3":[function(require,module,exports) {
require("./_typed-array")("Uint16", 2, function(init) {
    return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"dSRiX":[function(require,module,exports) {
require("./_typed-array")("Int32", 4, function(init) {
    return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"lKCGR":[function(require,module,exports) {
require("./_typed-array")("Uint32", 4, function(init) {
    return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"fASXR":[function(require,module,exports) {
require("./_typed-array")("Float32", 4, function(init) {
    return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"e3YAQ":[function(require,module,exports) {
require("./_typed-array")("Float64", 8, function(init) {
    return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"./_typed-array":"heDu8"}],"kstrm":[function(require,module,exports) {
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require("./_export");
var aFunction = require("./_a-function");
var anObject = require("./_an-object");
var rApply = (require("./_global").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require("./_fails")(function() {
    rApply(function() {});
}), "Reflect", {
    apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
});

},{"./_export":"1Tgvm","./_a-function":"55L9l","./_an-object":"kiL2X","./_global":"8xCse","./_fails":"iAFH1"}],"fXcT1":[function(require,module,exports) {
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require("./_export");
var create = require("./_object-create");
var aFunction = require("./_a-function");
var anObject = require("./_an-object");
var isObject = require("./_is-object");
var fails = require("./_fails");
var bind = require("./_bind");
var rConstruct = (require("./_global").Reflect || {}).construct;
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function() {
    function F() {}
    return !(rConstruct(function() {}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function() {
    rConstruct(function() {});
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
    construct: function construct(Target, args /* , newTarget */ ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch(args.length){
                case 0:
                    return new Target();
                case 1:
                    return new Target(args[0]);
                case 2:
                    return new Target(args[0], args[1]);
                case 3:
                    return new Target(args[0], args[1], args[2]);
                case 4:
                    return new Target(args[0], args[1], args[2], args[3]);
            }
            // w/o altered newTarget, lot of arguments case
            var $args = [
                null
            ];
            $args.push.apply($args, args);
            return new (bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
    }
});

},{"./_export":"1Tgvm","./_object-create":"b4m8n","./_a-function":"55L9l","./_an-object":"kiL2X","./_is-object":"eIE5K","./_fails":"iAFH1","./_bind":"2xSTE","./_global":"8xCse"}],"kibOK":[function(require,module,exports) {
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require("./_object-dp");
var $export = require("./_export");
var anObject = require("./_an-object");
var toPrimitive = require("./_to-primitive");
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require("./_fails")(function() {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(dP.f({}, 1, {
        value: 1
    }), 1, {
        value: 2
    });
}), "Reflect", {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);
        try {
            dP.f(target, propertyKey, attributes);
            return true;
        } catch (e) {
            return false;
        }
    }
});

},{"./_object-dp":"cLcWd","./_export":"1Tgvm","./_an-object":"kiL2X","./_to-primitive":"4Oubb","./_fails":"iAFH1"}],"2NlGq":[function(require,module,exports) {
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require("./_export");
var gOPD = require("./_object-gopd").f;
var anObject = require("./_an-object");
$export($export.S, "Reflect", {
    deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
    }
});

},{"./_export":"1Tgvm","./_object-gopd":"4bAUG","./_an-object":"kiL2X"}],"iKC7x":[function(require,module,exports) {
"use strict";
// 26.1.5 Reflect.enumerate(target)
var $export = require("./_export");
var anObject = require("./_an-object");
var Enumerate = function(iterated) {
    this._t = anObject(iterated); // target
    this._i = 0; // next index
    var keys = this._k = []; // keys
    var key;
    for(key in iterated)keys.push(key);
};
require("./_iter-create")(Enumerate, "Object", function() {
    var that = this;
    var keys = that._k;
    var key;
    do {
        if (that._i >= keys.length) return {
            value: undefined,
            done: true
        };
    }while (!((key = keys[that._i++]) in that._t));
    return {
        value: key,
        done: false
    };
});
$export($export.S, "Reflect", {
    enumerate: function enumerate(target) {
        return new Enumerate(target);
    }
});

},{"./_export":"1Tgvm","./_an-object":"kiL2X","./_iter-create":"eTcx3"}],"dIqbe":[function(require,module,exports) {
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require("./_object-gopd");
var getPrototypeOf = require("./_object-gpo");
var has = require("./_has");
var $export = require("./_export");
var isObject = require("./_is-object");
var anObject = require("./_an-object");
function get(target, propertyKey /* , receiver */ ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = gOPD.f(target, propertyKey)) return has(desc, "value") ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}
$export($export.S, "Reflect", {
    get: get
});

},{"./_object-gopd":"4bAUG","./_object-gpo":"4uFAD","./_has":"biQ7v","./_export":"1Tgvm","./_is-object":"eIE5K","./_an-object":"kiL2X"}],"lSfAN":[function(require,module,exports) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require("./_object-gopd");
var $export = require("./_export");
var anObject = require("./_an-object");
$export($export.S, "Reflect", {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
    }
});

},{"./_object-gopd":"4bAUG","./_export":"1Tgvm","./_an-object":"kiL2X"}],"aO9N4":[function(require,module,exports) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require("./_export");
var getProto = require("./_object-gpo");
var anObject = require("./_an-object");
$export($export.S, "Reflect", {
    getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
    }
});

},{"./_export":"1Tgvm","./_object-gpo":"4uFAD","./_an-object":"kiL2X"}],"4HzcT":[function(require,module,exports) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require("./_export");
$export($export.S, "Reflect", {
    has: function has(target, propertyKey) {
        return propertyKey in target;
    }
});

},{"./_export":"1Tgvm"}],"dmYlo":[function(require,module,exports) {
// 26.1.10 Reflect.isExtensible(target)
var $export = require("./_export");
var anObject = require("./_an-object");
var $isExtensible = Object.isExtensible;
$export($export.S, "Reflect", {
    isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
    }
});

},{"./_export":"1Tgvm","./_an-object":"kiL2X"}],"15duj":[function(require,module,exports) {
// 26.1.11 Reflect.ownKeys(target)
var $export = require("./_export");
$export($export.S, "Reflect", {
    ownKeys: require("./_own-keys")
});

},{"./_export":"1Tgvm","./_own-keys":"h4xsg"}],"h4xsg":[function(require,module,exports) {
// all object keys, includes non-enumerable and symbols
var gOPN = require("./_object-gopn");
var gOPS = require("./_object-gops");
var anObject = require("./_an-object");
var Reflect = require("./_global").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
    var keys = gOPN.f(anObject(it));
    var getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_object-gopn":"jK0Om","./_object-gops":"5oH2C","./_an-object":"kiL2X","./_global":"8xCse"}],"cC4pR":[function(require,module,exports) {
// 26.1.12 Reflect.preventExtensions(target)
var $export = require("./_export");
var anObject = require("./_an-object");
var $preventExtensions = Object.preventExtensions;
$export($export.S, "Reflect", {
    preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
            if ($preventExtensions) $preventExtensions(target);
            return true;
        } catch (e) {
            return false;
        }
    }
});

},{"./_export":"1Tgvm","./_an-object":"kiL2X"}],"dl5fS":[function(require,module,exports) {
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require("./_object-dp");
var gOPD = require("./_object-gopd");
var getPrototypeOf = require("./_object-gpo");
var has = require("./_has");
var $export = require("./_export");
var createDesc = require("./_property-desc");
var anObject = require("./_an-object");
var isObject = require("./_is-object");
function set(target, propertyKey, V /* , receiver */ ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDesc = gOPD.f(anObject(target), propertyKey);
    var existingDescriptor, proto;
    if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) return set(proto, propertyKey, V, receiver);
        ownDesc = createDesc(0);
    }
    if (has(ownDesc, "value")) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;
        if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
            existingDescriptor.value = V;
            dP.f(receiver, propertyKey, existingDescriptor);
        } else dP.f(receiver, propertyKey, createDesc(0, V));
        return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}
$export($export.S, "Reflect", {
    set: set
});

},{"./_object-dp":"cLcWd","./_object-gopd":"4bAUG","./_object-gpo":"4uFAD","./_has":"biQ7v","./_export":"1Tgvm","./_property-desc":"825qY","./_an-object":"kiL2X","./_is-object":"eIE5K"}],"jH9nI":[function(require,module,exports) {
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require("./_export");
var setProto = require("./_set-proto");
if (setProto) $export($export.S, "Reflect", {
    setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);
        try {
            setProto.set(target, proto);
            return true;
        } catch (e) {
            return false;
        }
    }
});

},{"./_export":"1Tgvm","./_set-proto":"ltEMf"}],"9KPxe":[function(require,module,exports) {
"use strict";
// https://github.com/tc39/Array.prototype.includes
var $export = require("./_export");
var $includes = require("./_array-includes")(true);
$export($export.P, "Array", {
    includes: function includes(el /* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
require("./_add-to-unscopables")("includes");

},{"./_export":"1Tgvm","./_array-includes":"1Ebaw","./_add-to-unscopables":"ltQTG"}],"lKIEm":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require("./_export");
var flattenIntoArray = require("./_flatten-into-array");
var toObject = require("./_to-object");
var toLength = require("./_to-length");
var aFunction = require("./_a-function");
var arraySpeciesCreate = require("./_array-species-create");
$export($export.P, "Array", {
    flatMap: function flatMap(callbackfn /* , thisArg */ ) {
        var O = toObject(this);
        var sourceLen, A;
        aFunction(callbackfn);
        sourceLen = toLength(O.length);
        A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
        return A;
    }
});
require("./_add-to-unscopables")("flatMap");

},{"./_export":"1Tgvm","./_flatten-into-array":"1UpmY","./_to-object":"7HHXi","./_to-length":"irYfS","./_a-function":"55L9l","./_array-species-create":"93xs6","./_add-to-unscopables":"ltQTG"}],"1UpmY":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require("./_is-array");
var isObject = require("./_is-object");
var toLength = require("./_to-length");
var ctx = require("./_ctx");
var IS_CONCAT_SPREADABLE = require("./_wks")("isConcatSpreadable");
function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
    var element, spreadable;
    while(sourceIndex < sourceLen){
        if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            spreadable = false;
            if (isObject(element)) {
                spreadable = element[IS_CONCAT_SPREADABLE];
                spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
            }
            if (spreadable && depth > 0) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            else {
                if (targetIndex >= 0x1fffffffffffff) throw TypeError();
                target[targetIndex] = element;
            }
            targetIndex++;
        }
        sourceIndex++;
    }
    return targetIndex;
}
module.exports = flattenIntoArray;

},{"./_is-array":"dTLRt","./_is-object":"eIE5K","./_to-length":"irYfS","./_ctx":"4rQSm","./_wks":"eaoKZ"}],"lpb4z":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = require("./_export");
var flattenIntoArray = require("./_flatten-into-array");
var toObject = require("./_to-object");
var toLength = require("./_to-length");
var toInteger = require("./_to-integer");
var arraySpeciesCreate = require("./_array-species-create");
$export($export.P, "Array", {
    flatten: function flatten() {
        var depthArg = arguments[0];
        var O = toObject(this);
        var sourceLen = toLength(O.length);
        var A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
        return A;
    }
});
require("./_add-to-unscopables")("flatten");

},{"./_export":"1Tgvm","./_flatten-into-array":"1UpmY","./_to-object":"7HHXi","./_to-length":"irYfS","./_to-integer":"cb0GT","./_array-species-create":"93xs6","./_add-to-unscopables":"ltQTG"}],"eVq5h":[function(require,module,exports) {
"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var $export = require("./_export");
var $at = require("./_string-at")(true);
$export($export.P, "String", {
    at: function at(pos) {
        return $at(this, pos);
    }
});

},{"./_export":"1Tgvm","./_string-at":"rbgP0"}],"kxeDX":[function(require,module,exports) {
"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require("./_export");
var $pad = require("./_string-pad");
var userAgent = require("./_user-agent");
// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, "String", {
    padStart: function padStart(maxLength /* , fillString = ' ' */ ) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
});

},{"./_export":"1Tgvm","./_string-pad":"7gHpZ","./_user-agent":"9eCfU"}],"7gHpZ":[function(require,module,exports) {
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require("./_to-length");
var repeat = require("./_string-repeat");
var defined = require("./_defined");
module.exports = function(that, maxLength, fillString, left) {
    var S = String(defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? " " : String(fillString);
    var intMaxLength = toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == "") return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
};

},{"./_to-length":"irYfS","./_string-repeat":"2JEgf","./_defined":"4Lj5U"}],"6j6XE":[function(require,module,exports) {
"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require("./_export");
var $pad = require("./_string-pad");
var userAgent = require("./_user-agent");
// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, "String", {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */ ) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
});

},{"./_export":"1Tgvm","./_string-pad":"7gHpZ","./_user-agent":"9eCfU"}],"4dYUb":[function(require,module,exports) {
"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require("./_string-trim")("trimLeft", function($trim) {
    return function trimLeft() {
        return $trim(this, 1);
    };
}, "trimStart");

},{"./_string-trim":"9YCA9"}],"5yndh":[function(require,module,exports) {
"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require("./_string-trim")("trimRight", function($trim) {
    return function trimRight() {
        return $trim(this, 2);
    };
}, "trimEnd");

},{"./_string-trim":"9YCA9"}],"cZhYH":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var $export = require("./_export");
var defined = require("./_defined");
var toLength = require("./_to-length");
var isRegExp = require("./_is-regexp");
var getFlags = require("./_flags");
var RegExpProto = RegExp.prototype;
var $RegExpStringIterator = function(regexp, string) {
    this._r = regexp;
    this._s = string;
};
require("./_iter-create")($RegExpStringIterator, "RegExp String", function next() {
    var match = this._r.exec(this._s);
    return {
        value: match,
        done: match === null
    };
});
$export($export.P, "String", {
    matchAll: function matchAll(regexp) {
        defined(this);
        if (!isRegExp(regexp)) throw TypeError(regexp + " is not a regexp!");
        var S = String(this);
        var flags = "flags" in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
        var rx = new RegExp(regexp.source, ~flags.indexOf("g") ? flags : "g" + flags);
        rx.lastIndex = toLength(regexp.lastIndex);
        return new $RegExpStringIterator(rx, S);
    }
});

},{"./_export":"1Tgvm","./_defined":"4Lj5U","./_to-length":"irYfS","./_is-regexp":"aGcfF","./_flags":"KuZtV","./_iter-create":"eTcx3"}],"8vHXs":[function(require,module,exports) {
require("./_wks-define")("asyncIterator");

},{"./_wks-define":"28rGc"}],"jDpxk":[function(require,module,exports) {
require("./_wks-define")("observable");

},{"./_wks-define":"28rGc"}],"k5woh":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require("./_export");
var ownKeys = require("./_own-keys");
var toIObject = require("./_to-iobject");
var gOPD = require("./_object-gopd");
var createProperty = require("./_create-property");
$export($export.S, "Object", {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIObject(object);
        var getDesc = gOPD.f;
        var keys = ownKeys(O);
        var result = {};
        var i = 0;
        var key, desc;
        while(keys.length > i){
            desc = getDesc(O, key = keys[i++]);
            if (desc !== undefined) createProperty(result, key, desc);
        }
        return result;
    }
});

},{"./_export":"1Tgvm","./_own-keys":"h4xsg","./_to-iobject":"f9RCz","./_object-gopd":"4bAUG","./_create-property":"8UZLF"}],"kQJLQ":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require("./_export");
var $values = require("./_object-to-array")(false);
$export($export.S, "Object", {
    values: function values(it) {
        return $values(it);
    }
});

},{"./_export":"1Tgvm","./_object-to-array":"1U0IC"}],"1U0IC":[function(require,module,exports) {
var getKeys = require("./_object-keys");
var toIObject = require("./_to-iobject");
var isEnum = require("./_object-pie").f;
module.exports = function(isEntries) {
    return function(it) {
        var O = toIObject(it);
        var keys = getKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while(length > i)if (isEnum.call(O, key = keys[i++])) result.push(isEntries ? [
            key,
            O[key]
        ] : O[key]);
        return result;
    };
};

},{"./_object-keys":"98CC0","./_to-iobject":"f9RCz","./_object-pie":"2aUxV"}],"7zW9M":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require("./_export");
var $entries = require("./_object-to-array")(true);
$export($export.S, "Object", {
    entries: function entries(it) {
        return $entries(it);
    }
});

},{"./_export":"1Tgvm","./_object-to-array":"1U0IC"}],"92ysW":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var toObject = require("./_to-object");
var aFunction = require("./_a-function");
var $defineProperty = require("./_object-dp");
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
    __defineGetter__: function __defineGetter__(P, getter) {
        $defineProperty.f(toObject(this), P, {
            get: aFunction(getter),
            enumerable: true,
            configurable: true
        });
    }
});

},{"./_export":"1Tgvm","./_to-object":"7HHXi","./_a-function":"55L9l","./_object-dp":"cLcWd","./_descriptors":"dr2tY","./_object-forced-pam":"9kndE"}],"9kndE":[function(require,module,exports) {
"use strict";
// Forced replacement prototype accessors methods
module.exports = require("./_library") || !require("./_fails")(function() {
    var K = Math.random();
    // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call
    __defineSetter__.call(null, K, function() {});
    delete require("./_global")[K];
});

},{"./_library":"lmtqY","./_fails":"iAFH1","./_global":"8xCse"}],"emt8A":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var toObject = require("./_to-object");
var aFunction = require("./_a-function");
var $defineProperty = require("./_object-dp");
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
    __defineSetter__: function __defineSetter__(P, setter) {
        $defineProperty.f(toObject(this), P, {
            set: aFunction(setter),
            enumerable: true,
            configurable: true
        });
    }
});

},{"./_export":"1Tgvm","./_to-object":"7HHXi","./_a-function":"55L9l","./_object-dp":"cLcWd","./_descriptors":"dr2tY","./_object-forced-pam":"9kndE"}],"9LH3Q":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var toObject = require("./_to-object");
var toPrimitive = require("./_to-primitive");
var getPrototypeOf = require("./_object-gpo");
var getOwnPropertyDescriptor = require("./_object-gopd").f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
    __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject(this);
        var K = toPrimitive(P, true);
        var D;
        do {
            if (D = getOwnPropertyDescriptor(O, K)) return D.get;
        }while (O = getPrototypeOf(O));
    }
});

},{"./_export":"1Tgvm","./_to-object":"7HHXi","./_to-primitive":"4Oubb","./_object-gpo":"4uFAD","./_object-gopd":"4bAUG","./_descriptors":"dr2tY","./_object-forced-pam":"9kndE"}],"kEN8G":[function(require,module,exports) {
"use strict";
var $export = require("./_export");
var toObject = require("./_to-object");
var toPrimitive = require("./_to-primitive");
var getPrototypeOf = require("./_object-gpo");
var getOwnPropertyDescriptor = require("./_object-gopd").f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
require("./_descriptors") && $export($export.P + require("./_object-forced-pam"), "Object", {
    __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject(this);
        var K = toPrimitive(P, true);
        var D;
        do {
            if (D = getOwnPropertyDescriptor(O, K)) return D.set;
        }while (O = getPrototypeOf(O));
    }
});

},{"./_export":"1Tgvm","./_to-object":"7HHXi","./_to-primitive":"4Oubb","./_object-gpo":"4uFAD","./_object-gopd":"4bAUG","./_descriptors":"dr2tY","./_object-forced-pam":"9kndE"}],"7iBxS":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require("./_export");
$export($export.P + $export.R, "Map", {
    toJSON: require("./_collection-to-json")("Map")
});

},{"./_export":"1Tgvm","./_collection-to-json":"jHAmP"}],"jHAmP":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require("./_classof");
var from = require("./_array-from-iterable");
module.exports = function(NAME) {
    return function toJSON() {
        if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
        return from(this);
    };
};

},{"./_classof":"5TIen","./_array-from-iterable":"dANMj"}],"dANMj":[function(require,module,exports) {
var forOf = require("./_for-of");
module.exports = function(iter, ITERATOR) {
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
};

},{"./_for-of":"9a8I8"}],"exanP":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require("./_export");
$export($export.P + $export.R, "Set", {
    toJSON: require("./_collection-to-json")("Set")
});

},{"./_export":"1Tgvm","./_collection-to-json":"jHAmP"}],"dT1Dc":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require("./_set-collection-of")("Map");

},{"./_set-collection-of":"dCQc8"}],"dCQc8":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require("./_export");
module.exports = function(COLLECTION) {
    $export($export.S, COLLECTION, {
        of: function of() {
            var length = arguments.length;
            var A = new Array(length);
            while(length--)A[length] = arguments[length];
            return new this(A);
        }
    });
};

},{"./_export":"1Tgvm"}],"jSRTa":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require("./_set-collection-of")("Set");

},{"./_set-collection-of":"dCQc8"}],"39wfA":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require("./_set-collection-of")("WeakMap");

},{"./_set-collection-of":"dCQc8"}],"ikieO":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
require("./_set-collection-of")("WeakSet");

},{"./_set-collection-of":"dCQc8"}],"2MGKl":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require("./_set-collection-from")("Map");

},{"./_set-collection-from":"5uH1y"}],"5uH1y":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require("./_export");
var aFunction = require("./_a-function");
var ctx = require("./_ctx");
var forOf = require("./_for-of");
module.exports = function(COLLECTION) {
    $export($export.S, COLLECTION, {
        from: function from(source /* , mapFn, thisArg */ ) {
            var mapFn = arguments[1];
            var mapping, A, n, cb;
            aFunction(this);
            mapping = mapFn !== undefined;
            if (mapping) aFunction(mapFn);
            if (source == undefined) return new this();
            A = [];
            if (mapping) {
                n = 0;
                cb = ctx(mapFn, arguments[2], 2);
                forOf(source, false, function(nextItem) {
                    A.push(cb(nextItem, n++));
                });
            } else forOf(source, false, A.push, A);
            return new this(A);
        }
    });
};

},{"./_export":"1Tgvm","./_a-function":"55L9l","./_ctx":"4rQSm","./_for-of":"9a8I8"}],"3AF6v":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require("./_set-collection-from")("Set");

},{"./_set-collection-from":"5uH1y"}],"23jtR":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require("./_set-collection-from")("WeakMap");

},{"./_set-collection-from":"5uH1y"}],"hJc4O":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
require("./_set-collection-from")("WeakSet");

},{"./_set-collection-from":"5uH1y"}],"lshq0":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require("./_export");
$export($export.G, {
    global: require("./_global")
});

},{"./_export":"1Tgvm","./_global":"8xCse"}],"aLRNx":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require("./_export");
$export($export.S, "System", {
    global: require("./_global")
});

},{"./_export":"1Tgvm","./_global":"8xCse"}],"3xhVh":[function(require,module,exports) {
// https://github.com/ljharb/proposal-is-error
var $export = require("./_export");
var cof = require("./_cof");
$export($export.S, "Error", {
    isError: function isError(it) {
        return cof(it) === "Error";
    }
});

},{"./_export":"1Tgvm","./_cof":"frIbo"}],"bZ0NA":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require("./_export");
$export($export.S, "Math", {
    clamp: function clamp(x, lower, upper) {
        return Math.min(upper, Math.max(lower, x));
    }
});

},{"./_export":"1Tgvm"}],"gOGEZ":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require("./_export");
$export($export.S, "Math", {
    DEG_PER_RAD: Math.PI / 180
});

},{"./_export":"1Tgvm"}],"cdQDY":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require("./_export");
var RAD_PER_DEG = 180 / Math.PI;
$export($export.S, "Math", {
    degrees: function degrees(radians) {
        return radians * RAD_PER_DEG;
    }
});

},{"./_export":"1Tgvm"}],"fR5LK":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require("./_export");
var scale = require("./_math-scale");
var fround = require("./_math-fround");
$export($export.S, "Math", {
    fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
        return fround(scale(x, inLow, inHigh, outLow, outHigh));
    }
});

},{"./_export":"1Tgvm","./_math-scale":"6rAjD","./_math-fround":"9TbbN"}],"6rAjD":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
    if (arguments.length === 0 || x != x || inLow != inLow || inHigh != inHigh || outLow != outLow || outHigh != outHigh) return NaN;
    if (x === Infinity || x === -Infinity) return x;
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

},{}],"5Jbi2":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require("./_export");
$export($export.S, "Math", {
    iaddh: function iaddh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0;
        var $x1 = x1 >>> 0;
        var $y0 = y0 >>> 0;
        return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
    }
});

},{"./_export":"1Tgvm"}],"hrxFs":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require("./_export");
$export($export.S, "Math", {
    isubh: function isubh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0;
        var $x1 = x1 >>> 0;
        var $y0 = y0 >>> 0;
        return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
    }
});

},{"./_export":"1Tgvm"}],"i4YiT":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require("./_export");
$export($export.S, "Math", {
    imulh: function imulh(u, v) {
        var UINT16 = 0xffff;
        var $u = +u;
        var $v = +v;
        var u0 = $u & UINT16;
        var v0 = $v & UINT16;
        var u1 = $u >> 16;
        var v1 = $v >> 16;
        var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
    }
});

},{"./_export":"1Tgvm"}],"il4w2":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require("./_export");
$export($export.S, "Math", {
    RAD_PER_DEG: 180 / Math.PI
});

},{"./_export":"1Tgvm"}],"7RQmX":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require("./_export");
var DEG_PER_RAD = Math.PI / 180;
$export($export.S, "Math", {
    radians: function radians(degrees) {
        return degrees * DEG_PER_RAD;
    }
});

},{"./_export":"1Tgvm"}],"jOPwg":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require("./_export");
$export($export.S, "Math", {
    scale: require("./_math-scale")
});

},{"./_export":"1Tgvm","./_math-scale":"6rAjD"}],"8NRee":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require("./_export");
$export($export.S, "Math", {
    umulh: function umulh(u, v) {
        var UINT16 = 0xffff;
        var $u = +u;
        var $v = +v;
        var u0 = $u & UINT16;
        var v0 = $v & UINT16;
        var u1 = $u >>> 16;
        var v1 = $v >>> 16;
        var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
    }
});

},{"./_export":"1Tgvm"}],"ePksm":[function(require,module,exports) {
// http://jfbastien.github.io/papers/Math.signbit.html
var $export = require("./_export");
$export($export.S, "Math", {
    signbit: function signbit(x) {
        // eslint-disable-next-line no-self-compare
        return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
    }
});

},{"./_export":"1Tgvm"}],"2JMTL":[function(require,module,exports) {
// https://github.com/tc39/proposal-promise-finally
"use strict";
var $export = require("./_export");
var core = require("./_core");
var global = require("./_global");
var speciesConstructor = require("./_species-constructor");
var promiseResolve = require("./_promise-resolve");
$export($export.P + $export.R, "Promise", {
    "finally": function(onFinally) {
        var C = speciesConstructor(this, core.Promise || global.Promise);
        var isFunction = typeof onFinally == "function";
        return this.then(isFunction ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});

},{"./_export":"1Tgvm","./_core":"4o9Ko","./_global":"8xCse","./_species-constructor":"8Vo8d","./_promise-resolve":"58Dua"}],"2RsT8":[function(require,module,exports) {
"use strict";
// https://github.com/tc39/proposal-promise-try
var $export = require("./_export");
var newPromiseCapability = require("./_new-promise-capability");
var perform = require("./_perform");
$export($export.S, "Promise", {
    "try": function(callbackfn) {
        var promiseCapability = newPromiseCapability.f(this);
        var result = perform(callbackfn);
        (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
        return promiseCapability.promise;
    }
});

},{"./_export":"1Tgvm","./_new-promise-capability":"clM6P","./_perform":"7Nx5Z"}],"iQ9qT":[function(require,module,exports) {
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;
metadata.exp({
    defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X"}],"gajc8":[function(require,module,exports) {
var Map = require("./es6.map");
var $export = require("./_export");
var shared = require("./_shared")("metadata");
var store = shared.store || (shared.store = new (require("./es6.weak-map"))());
var getOrCreateMetadataMap = function(target, targetKey, create) {
    var targetMetadata = store.get(target);
    if (!targetMetadata) {
        if (!create) return undefined;
        store.set(target, targetMetadata = new Map());
    }
    var keyMetadata = targetMetadata.get(targetKey);
    if (!keyMetadata) {
        if (!create) return undefined;
        targetMetadata.set(targetKey, keyMetadata = new Map());
    }
    return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P) {
    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey) {
    var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
    var keys = [];
    if (metadataMap) metadataMap.forEach(function(_, key) {
        keys.push(key);
    });
    return keys;
};
var toMetaKey = function(it) {
    return it === undefined || typeof it == "symbol" ? it : String(it);
};
var exp = function(O) {
    $export($export.S, "Reflect", O);
};
module.exports = {
    store: store,
    map: getOrCreateMetadataMap,
    has: ordinaryHasOwnMetadata,
    get: ordinaryGetOwnMetadata,
    set: ordinaryDefineOwnMetadata,
    keys: ordinaryOwnMetadataKeys,
    key: toMetaKey,
    exp: exp
};

},{"./es6.map":"1kXi9","./_export":"1Tgvm","./_shared":"9XC5J","./es6.weak-map":"dAOwL"}],"4glRb":[function(require,module,exports) {
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;
metadata.exp({
    deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */ ) {
        var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
        var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
        if (metadataMap === undefined || !metadataMap["delete"](metadataKey)) return false;
        if (metadataMap.size) return true;
        var targetMetadata = store.get(target);
        targetMetadata["delete"](targetKey);
        return !!targetMetadata.size || store["delete"](target);
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X"}],"kmvi8":[function(require,module,exports) {
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var getPrototypeOf = require("./_object-gpo");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;
var ordinaryGetMetadata = function(MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};
metadata.exp({
    getMetadata: function getMetadata(metadataKey, target /* , targetKey */ ) {
        return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X","./_object-gpo":"4uFAD"}],"6bA9p":[function(require,module,exports) {
var Set = require("./es6.set");
var from = require("./_array-from-iterable");
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var getPrototypeOf = require("./_object-gpo");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;
var ordinaryMetadataKeys = function(O, P) {
    var oKeys = ordinaryOwnMetadataKeys(O, P);
    var parent = getPrototypeOf(O);
    if (parent === null) return oKeys;
    var pKeys = ordinaryMetadataKeys(parent, P);
    return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};
metadata.exp({
    getMetadataKeys: function getMetadataKeys(target /* , targetKey */ ) {
        return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    }
});

},{"./es6.set":"61Y2Y","./_array-from-iterable":"dANMj","./_metadata":"gajc8","./_an-object":"kiL2X","./_object-gpo":"4uFAD"}],"jebxh":[function(require,module,exports) {
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;
metadata.exp({
    getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */ ) {
        return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X"}],"jGnWP":[function(require,module,exports) {
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;
metadata.exp({
    getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */ ) {
        return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X"}],"bZiK8":[function(require,module,exports) {
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var getPrototypeOf = require("./_object-gpo");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;
var ordinaryHasMetadata = function(MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return true;
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};
metadata.exp({
    hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */ ) {
        return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X","./_object-gpo":"4uFAD"}],"khZMr":[function(require,module,exports) {
var metadata = require("./_metadata");
var anObject = require("./_an-object");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;
metadata.exp({
    hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */ ) {
        return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X"}],"dQNHX":[function(require,module,exports) {
var $metadata = require("./_metadata");
var anObject = require("./_an-object");
var aFunction = require("./_a-function");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;
$metadata.exp({
    metadata: function metadata(metadataKey, metadataValue) {
        return function decorator(target, targetKey) {
            ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
        };
    }
});

},{"./_metadata":"gajc8","./_an-object":"kiL2X","./_a-function":"55L9l"}],"eXG8y":[function(require,module,exports) {
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = require("./_export");
var microtask = require("./_microtask")();
var process = require("./_global").process;
var isNode = require("./_cof")(process) == "process";
$export($export.G, {
    asap: function asap(fn) {
        var domain = isNode && process.domain;
        microtask(domain ? domain.bind(fn) : fn);
    }
});

},{"./_export":"1Tgvm","./_microtask":"8lwWF","./_global":"8xCse","./_cof":"frIbo"}],"dqE8O":[function(require,module,exports) {
"use strict";
// https://github.com/zenparsing/es-observable
var $export = require("./_export");
var global = require("./_global");
var core = require("./_core");
var microtask = require("./_microtask")();
var OBSERVABLE = require("./_wks")("observable");
var aFunction = require("./_a-function");
var anObject = require("./_an-object");
var anInstance = require("./_an-instance");
var redefineAll = require("./_redefine-all");
var hide = require("./_hide");
var forOf = require("./_for-of");
var RETURN = forOf.RETURN;
var getMethod = function(fn) {
    return fn == null ? undefined : aFunction(fn);
};
var cleanupSubscription = function(subscription) {
    var cleanup = subscription._c;
    if (cleanup) {
        subscription._c = undefined;
        cleanup();
    }
};
var subscriptionClosed = function(subscription) {
    return subscription._o === undefined;
};
var closeSubscription = function(subscription) {
    if (!subscriptionClosed(subscription)) {
        subscription._o = undefined;
        cleanupSubscription(subscription);
    }
};
var Subscription = function(observer, subscriber) {
    anObject(observer);
    this._c = undefined;
    this._o = observer;
    observer = new SubscriptionObserver(this);
    try {
        var cleanup = subscriber(observer);
        var subscription = cleanup;
        if (cleanup != null) {
            if (typeof cleanup.unsubscribe === "function") cleanup = function() {
                subscription.unsubscribe();
            };
            else aFunction(cleanup);
            this._c = cleanup;
        }
    } catch (e) {
        observer.error(e);
        return;
    }
    if (subscriptionClosed(this)) cleanupSubscription(this);
};
Subscription.prototype = redefineAll({}, {
    unsubscribe: function unsubscribe() {
        closeSubscription(this);
    }
});
var SubscriptionObserver = function(subscription) {
    this._s = subscription;
};
SubscriptionObserver.prototype = redefineAll({}, {
    next: function next(value) {
        var subscription = this._s;
        if (!subscriptionClosed(subscription)) {
            var observer = subscription._o;
            try {
                var m = getMethod(observer.next);
                if (m) return m.call(observer, value);
            } catch (e) {
                try {
                    closeSubscription(subscription);
                } finally{
                    throw e;
                }
            }
        }
    },
    error: function error(value) {
        var subscription = this._s;
        if (subscriptionClosed(subscription)) throw value;
        var observer = subscription._o;
        subscription._o = undefined;
        try {
            var m = getMethod(observer.error);
            if (!m) throw value;
            value = m.call(observer, value);
        } catch (e) {
            try {
                cleanupSubscription(subscription);
            } finally{
                throw e;
            }
        }
        cleanupSubscription(subscription);
        return value;
    },
    complete: function complete(value) {
        var subscription = this._s;
        if (!subscriptionClosed(subscription)) {
            var observer = subscription._o;
            subscription._o = undefined;
            try {
                var m = getMethod(observer.complete);
                value = m ? m.call(observer, value) : undefined;
            } catch (e) {
                try {
                    cleanupSubscription(subscription);
                } finally{
                    throw e;
                }
            }
            cleanupSubscription(subscription);
            return value;
        }
    }
});
var $Observable = function Observable(subscriber) {
    anInstance(this, $Observable, "Observable", "_f")._f = aFunction(subscriber);
};
redefineAll($Observable.prototype, {
    subscribe: function subscribe(observer) {
        return new Subscription(observer, this._f);
    },
    forEach: function forEach(fn) {
        var that = this;
        return new (core.Promise || global.Promise)(function(resolve, reject) {
            aFunction(fn);
            var subscription = that.subscribe({
                next: function(value) {
                    try {
                        return fn(value);
                    } catch (e) {
                        reject(e);
                        subscription.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve
            });
        });
    }
});
redefineAll($Observable, {
    from: function from(x) {
        var C = typeof this === "function" ? this : $Observable;
        var method = getMethod(anObject(x)[OBSERVABLE]);
        if (method) {
            var observable = anObject(method.call(x));
            return observable.constructor === C ? observable : new C(function(observer) {
                return observable.subscribe(observer);
            });
        }
        return new C(function(observer) {
            var done = false;
            microtask(function() {
                if (!done) {
                    try {
                        if (forOf(x, false, function(it) {
                            observer.next(it);
                            if (done) return RETURN;
                        }) === RETURN) return;
                    } catch (e) {
                        if (done) throw e;
                        observer.error(e);
                        return;
                    }
                    observer.complete();
                }
            });
            return function() {
                done = true;
            };
        });
    },
    of: function of() {
        for(var i = 0, l = arguments.length, items = new Array(l); i < l;)items[i] = arguments[i++];
        return new (typeof this === "function" ? this : $Observable)(function(observer) {
            var done = false;
            microtask(function() {
                if (!done) {
                    for(var j = 0; j < items.length; ++j){
                        observer.next(items[j]);
                        if (done) return;
                    }
                    observer.complete();
                }
            });
            return function() {
                done = true;
            };
        });
    }
});
hide($Observable.prototype, OBSERVABLE, function() {
    return this;
});
$export($export.G, {
    Observable: $Observable
});
require("./_set-species")("Observable");

},{"./_export":"1Tgvm","./_global":"8xCse","./_core":"4o9Ko","./_microtask":"8lwWF","./_wks":"eaoKZ","./_a-function":"55L9l","./_an-object":"kiL2X","./_an-instance":"ivm35","./_redefine-all":"6Mnp5","./_hide":"ddpVq","./_for-of":"9a8I8","./_set-species":"1qQNM"}],"dl3SO":[function(require,module,exports) {
// ie9- setTimeout & setInterval additional parameters fix
var global = require("./_global");
var $export = require("./_export");
var userAgent = require("./_user-agent");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function(set) {
    return function(fn, time /* , ...args */ ) {
        var boundArgs = arguments.length > 2;
        var args = boundArgs ? slice.call(arguments, 2) : false;
        return set(boundArgs ? function() {
            // eslint-disable-next-line no-new-func
            (typeof fn == "function" ? fn : Function(fn)).apply(this, args);
        } : fn, time);
    };
};
$export($export.G + $export.B + $export.F * MSIE, {
    setTimeout: wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
});

},{"./_global":"8xCse","./_export":"1Tgvm","./_user-agent":"9eCfU"}],"49tUX":[function(require,module,exports) {
var $export = require("./_export");
var $task = require("./_task");
$export($export.G + $export.B, {
    setImmediate: $task.set,
    clearImmediate: $task.clear
});

},{"./_export":"1Tgvm","./_task":"bPiT9"}],"iv8Qo":[function(require,module,exports) {
var $iterators = require("./es6.array.iterator");
var getKeys = require("./_object-keys");
var redefine = require("./_redefine");
var global = require("./_global");
var hide = require("./_hide");
var Iterators = require("./_iterators");
var wks = require("./_wks");
var ITERATOR = wks("iterator");
var TO_STRING_TAG = wks("toStringTag");
var ArrayValues = Iterators.Array;
var DOMIterables = {
    CSSRuleList: true,
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
};
for(var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++){
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = global[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
        if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
        if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = ArrayValues;
        if (explicit) {
            for(key in $iterators)if (!proto[key]) redefine(proto, key, $iterators[key], true);
        }
    }
}

},{"./es6.array.iterator":"1xhrt","./_object-keys":"98CC0","./_redefine":"9vAu7","./_global":"8xCse","./_hide":"ddpVq","./_iterators":"dITQr","./_wks":"eaoKZ"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */ var global = arguments[3];
!function(global) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var inModule = true;
    var runtime = global.regeneratorRuntime;
    if (runtime) {
        if (inModule) // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
        // Don't bother evaluating the rest of this file if the runtime was
        // already defined globally.
        return;
    }
    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};
    function wrap(innerFn, outerFn, self1, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self1, context);
        return generator;
    }
    runtime.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function() {
        return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            prototype[method] = function(arg) {
                return this._invoke(method, arg);
            };
        });
    }
    runtime.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    runtime.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) genFun[toStringTagSymbol] = "GeneratorFunction";
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return Promise.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return Promise.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration. If the Promise is rejected, however, the
                    // result for this iteration will be rejected with the same
                    // reason. Note that rejections of yielded Promises are not
                    // thrown back into the generator function, as is the case
                    // when an awaited Promise is rejected. This difference in
                    // behavior between yield and await is important, because it
                    // allows the consumer to decide what to do with the yielded
                    // rejection (swallow it and continue, manually .throw it back
                    // into the generator, abandon iteration, whatever). With
                    // await, by contrast, there is no opportunity to examine the
                    // rejection reason outside the generator function, so the
                    // only option is to throw it from the await expression, and
                    // let the generator function handle the exception.
                    result.value = unwrapped;
                    resolve(result);
                }, reject);
            }
        }
        if (typeof global.process === "object" && global.process.domain) invoke = global.process.domain.bind(invoke);
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new Promise(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
    };
    runtime.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function(innerFn, outerFn, self1, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self1, tryLocsList));
        return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self1, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self1, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                if (delegate.iterator.return) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator";
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
        return this;
    };
    Gp.toString = function() {
        return "[object Generator]";
    };
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    runtime.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    runtime.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
}(// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : this);

},{}],"4Rfsd":[function(require,module,exports) {
require("../../modules/core.regexp.escape");
module.exports = require("../../modules/_core").RegExp.escape;

},{"../../modules/core.regexp.escape":"kwUMR","../../modules/_core":"4o9Ko"}],"kwUMR":[function(require,module,exports) {
// https://github.com/benjamingr/RexExp.escape
var $export = require("./_export");
var $re = require("./_replacer")(/[\\^$*+?.()|[\]{}]/g, "\\$&");
$export($export.S, "RegExp", {
    escape: function escape(it) {
        return $re(it);
    }
});

},{"./_export":"1Tgvm","./_replacer":"gaojh"}],"gaojh":[function(require,module,exports) {
module.exports = function(regExp, replace) {
    var replacer = replace === Object(replace) ? function(part) {
        return replace[part];
    } : replace;
    return function(it) {
        return String(it).replace(regExp, replacer);
    };
};

},{}],"2hecu":[function(require,module,exports) {
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
    console.log("endpoint.fhirBaseUrl: " + endpoint.fhirBaseUrl); // DH
    // console.log("endpoint.fhirBaseUrl.slice(-1):" + endpoint.fhirBaseUrl.slice(-1)); // DH
    // console.log("endpoint.fhirBaseUrl.slice(-1) === '/'?: " + (endpoint.fhirBaseUrl.slice(-1) === '/').toString());
    const fhirBaseUrl = endpoint.fhirBaseUrl + (endpoint.fhirBaseUrl.slice(-1) === "/" ? "" : "/");
    console.log("fhirBaseUrl: " + fhirBaseUrl);
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
            // scope: 'launch/patient patient/*.read', // V1 obsolete I think
            scope: "patient/.rs",
            scope: "patient/Patient.rs",
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2psyE":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11cDl":[function(require,module,exports) {
"use strict";
const strictUriEncode = require("strict-uri-encode");
const decodeComponent = require("decode-uri-component");
const splitOnFirst = require("split-on-first");
const filterObject = require("filter-obj");
const isNullOrUndefined = (value)=>value === null || value === undefined;
const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
function encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case "index":
            return (key)=>(result, value)=>{
                    const index = result.length;
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            "[",
                            index,
                            "]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            "[",
                            encode(index, options),
                            "]=",
                            encode(value, options)
                        ].join("")
                    ];
                };
        case "bracket":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            "[]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            "[]=",
                            encode(value, options)
                        ].join("")
                    ];
                };
        case "colon-list-separator":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            ":list="
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            ":list=",
                            encode(value, options)
                        ].join("")
                    ];
                };
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                        // Translate null to an empty string so that it doesn't serialize as 'null'
                        value = value === null ? "" : value;
                        if (result.length === 0) return [
                            [
                                encode(key, options),
                                keyValueSep,
                                encode(value, options)
                            ].join("")
                        ];
                        return [
                            [
                                result,
                                encode(value, options)
                            ].join(options.arrayFormatSeparator)
                        ];
                    };
            }
        default:
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        encode(key, options)
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            "=",
                            encode(value, options)
                        ].join("")
                    ];
                };
    }
}
function parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case "index":
            return (key, value, accumulator)=>{
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) accumulator[key] = {};
                accumulator[key][result[1]] = value;
            };
        case "bracket":
            return (key, value, accumulator)=>{
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "colon-list-separator":
            return (key, value, accumulator)=>{
                result = /(:list)$/.exec(key);
                key = key.replace(/:list$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "comma":
        case "separator":
            return (key, value, accumulator)=>{
                const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
                const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
                value = isEncodedArray ? decode(value, options) : value;
                const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item)=>decode(item, options)) : value === null ? value : decode(value, options);
                accumulator[key] = newValue;
            };
        case "bracket-separator":
            return (key, value, accumulator)=>{
                const isArray = /(\[\])$/.test(key);
                key = key.replace(/\[\]$/, "");
                if (!isArray) {
                    accumulator[key] = value ? decode(value, options) : value;
                    return;
                }
                const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item)=>decode(item, options));
                if (accumulator[key] === undefined) {
                    accumulator[key] = arrayValue;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], arrayValue);
            };
        default:
            return (key, value, accumulator)=>{
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string");
}
function encode(value, options) {
    if (options.encode) return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    return value;
}
function decode(value, options) {
    if (options.decode) return decodeComponent(value);
    return value;
}
function keysSorter(input) {
    if (Array.isArray(input)) return input.sort();
    if (typeof input === "object") return keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)).map((key)=>input[key]);
    return input;
}
function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) input = input.slice(0, hashStart);
    return input;
}
function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) hash = url.slice(hashStart);
    return hash;
}
function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) return "";
    return input.slice(queryStart + 1);
}
function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") value = Number(value);
    else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) value = value.toLowerCase() === "true";
    return value;
}
function parse(query, options) {
    options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    // Create an object with no prototype
    const ret = Object.create(null);
    if (typeof query !== "string") return ret;
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) return ret;
    for (const param of query.split("&")){
        if (param === "") continue;
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            "comma",
            "separator",
            "bracket-separator"
        ].includes(options.arrayFormat) ? value : decode(value, options);
        formatter(decode(key, options), value, ret);
    }
    for (const key1 of Object.keys(ret)){
        const value1 = ret[key1];
        if (typeof value1 === "object" && value1 !== null) for (const k of Object.keys(value1))value1[k] = parseValue(value1[k], options);
        else ret[key1] = parseValue(value1, options);
    }
    if (options.sort === false) return ret;
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key)=>{
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) // Sort object keys, not values
        result[key] = keysSorter(value);
        else result[key] = value;
        return result;
    }, Object.create(null));
}
exports.extract = extract;
exports.parse = parse;
exports.stringify = (object, options)=>{
    if (!object) return "";
    options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object))if (!shouldFilter(key)) objectCopy[key] = object[key];
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) keys.sort(options.sort);
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) return "";
        if (value === null) return encode(key, options);
        if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") return encode(key, options) + "[]";
            return value.reduce(formatter(key), []).join("&");
        }
        return encode(key, options) + "=" + encode(value, options);
    }).filter((x)=>x.length > 0).join("&");
};
exports.parseUrl = (url, options)=>{
    options = Object.assign({
        decode: true
    }, options);
    const [url_, hash] = splitOnFirst(url, "#");
    return Object.assign({
        url: url_.split("?")[0] || "",
        query: parse(extract(url), options)
    }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: decode(hash, options)
    } : {});
};
exports.stringifyUrl = (object, options)=>{
    options = Object.assign({
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, {
        sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString = exports.stringify(query, options);
    if (queryString) queryString = `?${queryString}`;
    let hash = getHash(object.url);
    if (object.fragmentIdentifier) hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    return `${url}${queryString}${hash}`;
};
exports.pick = (input, filter, options)=>{
    options = Object.assign({
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false
    }, options);
    const { url , query , fragmentIdentifier  } = exports.parseUrl(input, options);
    return exports.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
    }, options);
};
exports.exclude = (input, filter, options)=>{
    const exclusionFilter = Array.isArray(filter) ? (key)=>!filter.includes(key) : (key, value)=>!filter(key, value);
    return exports.pick(input, exclusionFilter, options);
};

},{"strict-uri-encode":"72Fvn","decode-uri-component":"1clyr","split-on-first":"70WYe","filter-obj":"1up0E"}],"72Fvn":[function(require,module,exports) {
"use strict";
module.exports = (str)=>encodeURIComponent(str).replace(/[!'()*]/g, (x)=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`);

},{}],"1clyr":[function(require,module,exports) {
"use strict";
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp(token, "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
    try {
        // Try to decode the entire string first
        return decodeURIComponent(components.join(""));
    } catch (err) {
    // Do nothing
    }
    if (components.length === 1) return components;
    split = split || 1;
    // Split the array in 2 parts
    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
    try {
        return decodeURIComponent(input);
    } catch (err) {
        var tokens = input.match(singleMatcher);
        for(var i = 1; i < tokens.length; i++){
            input = decodeComponents(tokens, i).join("");
            tokens = input.match(singleMatcher);
        }
        return input;
    }
}
function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    };
    var match = multiMatcher.exec(input);
    while(match){
        try {
            // Decode as big chunks as possible
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) replaceMap[match[0]] = result;
        }
        match = multiMatcher.exec(input);
    }
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap["%C2"] = "�";
    var entries = Object.keys(replaceMap);
    for(var i = 0; i < entries.length; i++){
        // Replace all decoded components
        var key = entries[i];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
    }
    return input;
}
module.exports = function(encodedURI) {
    if (typeof encodedURI !== "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
    try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        // Try the built in decoder first
        return decodeURIComponent(encodedURI);
    } catch (err) {
        // Fallback to a more advanced decoder
        return customDecodeURIComponent(encodedURI);
    }
};

},{}],"70WYe":[function(require,module,exports) {
"use strict";
module.exports = (string, separator)=>{
    if (!(typeof string === "string" && typeof separator === "string")) throw new TypeError("Expected the arguments to be of type `string`");
    if (separator === "") return [
        string
    ];
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) return [
        string
    ];
    return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
    ];
};

},{}],"1up0E":[function(require,module,exports) {
"use strict";
module.exports = function(obj, predicate) {
    var ret = {};
    var keys = Object.keys(obj);
    var isArr = Array.isArray(predicate);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) ret[key] = val;
    }
    return ret;
};

},{}],"44Ppo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _epicJson = require("./epic.json");
var _epicJsonDefault = parcelHelpers.interopDefault(_epicJson);
var _cernerJson = require("./cerner.json");
var _cernerJsonDefault = parcelHelpers.interopDefault(_cernerJson);
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
    },
    {
        fhirBaseUrl: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/",
        name: "Fhir.epic.com Sandbox - R4",
        tags: [
            "sandbox",
            "epic"
        ]
    },
    {
        fhirBaseUrl: "https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/",
        name: "Fhir.epic.com Sandbox - DSTU2",
        tags: [
            "sandbox",
            "cerner"
        ]
    },
    {
        fhirBaseUrl: "https://fhir-myrecord.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/",
        name: "Fhir.epic.com Sandbox - R4",
        tags: [
            "sandbox",
            "cerner"
        ]
    }
];
const epicProductionEndpoints = (0, _epicJsonDefault.default).Entries.map((e)=>({
        fhirBaseUrl: e.FHIRPatientFacingURI,
        name: e.OrganizationName,
        tags: [
            "production",
            "epic"
        ]
    }));
const cernerProductionEndpoints = (0, _cernerJsonDefault.default).Entries.map((e)=>({
        fhirBaseUrl: e.FHIRPatientFacingURI,
        name: e.OrganizationName,
        tags: [
            "production",
            "cerner"
        ]
    }));
// const endpoints = sandboxEndpoints.concat(epicProductionEndpoints).concat(cernerEndpointsJson)
const endpoints = sandboxEndpoints.concat(epicProductionEndpoints, cernerProductionEndpoints);
exports.default = endpoints;

},{"./epic.json":"bM3md","./cerner.json":"2cBTx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bM3md":[function(require,module,exports) {
module.exports = JSON.parse('{"Entries":[{"OrganizationName":"Access Community Health Network","FHIRPatientFacingURI":"https://eprescribing.accesscommunityhealth.net/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Adult & Pediatric Ear, Nose & Throat - Kalamazoo","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"AdvantageCare Physicians","FHIRPatientFacingURI":"https://epwebapps.acpny.com/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"AdventHealth","FHIRPatientFacingURI":"https://mobile.adventhealth.com/oauth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Akron Children\'s Hospital","FHIRPatientFacingURI":"https://haiku-canto-prod.chmca.org/ARR-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Alameda Health System","FHIRPatientFacingURI":"https://epicproxy.et1075.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Allegheny Health Network","FHIRPatientFacingURI":"https://epicprisfd.ahn.org/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Allina Health System","FHIRPatientFacingURI":"https://webproxy.allina.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Altais","FHIRPatientFacingURI":"https://epicproxy.et1138.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"AltaMed","FHIRPatientFacingURI":"https://epicproxy.et1123.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Altru Health System","FHIRPatientFacingURI":"https://epicsoap.altru.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"AnMed Health","FHIRPatientFacingURI":"https://epicproxy.et0971.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Ann & Robert H. Lurie Children\'s Hospital of Chicago","FHIRPatientFacingURI":"https://epicmobile.luriechildrens.org/Interconnect-FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Ardent","FHIRPatientFacingURI":"https://epicproxy.ardenthealth.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Arizona Community Physicians","FHIRPatientFacingURI":"https://interconnect.azacp.com/interconnect-oauth2-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Arkansas Children\'s","FHIRPatientFacingURI":"https://fhir.archildrens.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Arrowhead Regional Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1152.epichosted.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Asante Health Systems","FHIRPatientFacingURI":"https://epicmobile.asante.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Ascension Illinois","FHIRPatientFacingURI":"https://epicmobile.presencehealth.org/fhirPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Ascension Providence","FHIRPatientFacingURI":"https://stofo.providence-waco.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Ascension Wisconsin","FHIRPatientFacingURI":"https://eprescribe.wfhc.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Aspen Valley Hospital","FHIRPatientFacingURI":"https://epicproxy.et1254.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Aspirus","FHIRPatientFacingURI":"https://erx.aspirus.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Atlantic Health","FHIRPatientFacingURI":"https://soapproxy.atlantichealth.org/FHIRPrd/api/FHIR/DSTU2/"},{"OrganizationName":"Atrium Health","FHIRPatientFacingURI":"https://epicproxy.et0905.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Atrium Health Wake Forest Baptist","FHIRPatientFacingURI":"https://w1soap.wakehealth.edu/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Atrius Health","FHIRPatientFacingURI":"https://iatrius.atriushealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Aurora Health Care - LiveWell","FHIRPatientFacingURI":"https://EpicFHIR.aurora.org/FHIR/LiveWell/api/FHIR/DSTU2/"},{"OrganizationName":"Austin Regional Clinic","FHIRPatientFacingURI":"https://mobileprod.arcmd.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Ballad Health","FHIRPatientFacingURI":"https://soap.wellmont.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Health – KY & IN","FHIRPatientFacingURI":"https://epicproxy.bhsi.com/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Health - Northeast Florida","FHIRPatientFacingURI":"https://epicproxy.et1206.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Health (Arkansas)","FHIRPatientFacingURI":"https://api.baptist-health.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Baptist Memorial Health Care","FHIRPatientFacingURI":"https://rxedi.bmhcc.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Bassett Healthcare","FHIRPatientFacingURI":"https://soap.bassett.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"BayCare Clinic - myBayCare","FHIRPatientFacingURI":"https://EpicFHIR.aurora.org/FHIR/MYBAYCARE/api/FHIR/DSTU2/"},{"OrganizationName":"Bayhealth Medical Center","FHIRPatientFacingURI":"https://epproxy.bayhealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Baylor College of Medicine","FHIRPatientFacingURI":"https://fhir.clinical.bcm.edu/Stage1Fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Baylor Scott & White Health","FHIRPatientFacingURI":"https://rxproxy.sw.org/FHIR-PRD/BSW/api/FHIR/DSTU2/"},{"OrganizationName":"Beaumont Health","FHIRPatientFacingURI":"https://moc.beaumont.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Bellin Health","FHIRPatientFacingURI":"https://arr.thedacare.org/FHIR/BLN/api/FHIR/DSTU2/"},{"OrganizationName":"Beth Israel Lahey Health","FHIRPatientFacingURI":"https://fhir.laheyhealth.org/proxy-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"BJC & Washington University","FHIRPatientFacingURI":"https://epicproxy.et0965.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Bon Secours Health System","FHIRPatientFacingURI":"https://haiku.bshsi.org/fhir/BSHSI_OAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Boston Medical Center","FHIRPatientFacingURI":"https://emerge-soap1.bmc.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Boulder Community Health","FHIRPatientFacingURI":"https://prevprox.bch.org/FHIRproxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Bozeman Health","FHIRPatientFacingURI":"https://revproxy.bh.bozemanhealth.org/Interconnect-Oauth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Bronson Healthcare Group","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Brookwood Baptist Health","FHIRPatientFacingURI":"https://epicproxy.bhsala.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Bryan Health","FHIRPatientFacingURI":"https://epicproxy.et1031.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Buffalo Medical Group","FHIRPatientFacingURI":"https://fhir.buffalomedicalgroup.com/fhir-arr/api/FHIR/DSTU2/"},{"OrganizationName":"Cambridge Health Alliance","FHIRPatientFacingURI":"https://epicmobile.challiance.org/Interconnect-oauth2/api/FHIR/DSTU2/"},{"OrganizationName":"Cape Cod Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1149.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cape Fear Valley Health","FHIRPatientFacingURI":"https://epicproxy.et1094.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Care New England","FHIRPatientFacingURI":"https://cnesp001.carene.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Carilion Clinic","FHIRPatientFacingURI":"https://fhir.carilionclinic.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Carle Foundation Hospital & Physician Group","FHIRPatientFacingURI":"https://epicproxy.et0316.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Caromont Health","FHIRPatientFacingURI":"https://spp.caromonthealth.org/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Catholic Health (Long Island NY)","FHIRPatientFacingURI":"https://epx1.chsli.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Catholic Health System (Buffalo)","FHIRPatientFacingURI":"https://epicproxy.et1144.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cedars-Sinai Health System","FHIRPatientFacingURI":"https://cslinkmobile.csmc.edu/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"CentraCare Health and Affiliates","FHIRPatientFacingURI":"https://epicmobile.centracare.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Centura Health","FHIRPatientFacingURI":"https://epic-p-mobile.centura.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Charlotte Eye Ear Nose & Throat Associates","FHIRPatientFacingURI":"https://fhirprd.ceenta.com/proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Chesapeake Regional Medical Center","FHIRPatientFacingURI":"https://haiku.bshsi.org/fhir/CRMC_OAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Cheyenne Regional Medical Center","FHIRPatientFacingURI":"https://soap.crmcwy.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"CHI Health","FHIRPatientFacingURI":"https://rp.chihealth.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI Memorial","FHIRPatientFacingURI":"https://rpsouth.catholichealth.net/fhir/FHIRMCT/api/FHIR/DSTU2/"},{"OrganizationName":"CHI Saint Joseph Health","FHIRPatientFacingURI":"https://rpsouth.catholichealth.net/fhir/FHIRKY/api/FHIR/DSTU2/"},{"OrganizationName":"CHI St. Alexius Health","FHIRPatientFacingURI":"https://rp.chihealth.com/fhir/FHIRSTA/api/FHIR/DSTU2/"},{"OrganizationName":"CHI St. Luke\'s Health","FHIRPatientFacingURI":"https://rpsouth.catholichealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"CHI St. Vincent","FHIRPatientFacingURI":"https://epic-fhir.mercy.net/PRDFHIRSGF/CHI/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Health System of Texas","FHIRPatientFacingURI":"https://fhir.childrens.com/prd/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Healthcare of Atlanta","FHIRPatientFacingURI":"https://wpprod.choa.org/FHIR_PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Hospital and Medical Center, Omaha Nebraska","FHIRPatientFacingURI":"https://EPROXY1.chsomaha.org/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Hospital Colorado","FHIRPatientFacingURI":"https://fhir.childrenscolorado.org/fhirprd/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Hospital of Philadelphia","FHIRPatientFacingURI":"https://epicnsproxy.chop.edu/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s of Alabama","FHIRPatientFacingURI":"https://epicproxy.et1246.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Children\'s Wisconsin","FHIRPatientFacingURI":"https://epicproxy.et0815.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"CHRISTUS Health","FHIRPatientFacingURI":"https://proxy.christushealth.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Cigna Medical Group","FHIRPatientFacingURI":"https://epicarr.healthcare.cigna.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Cincinnati Children\'s Hospital Medical Center","FHIRPatientFacingURI":"https://boomer.cchmc.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"City of Hope","FHIRPatientFacingURI":"https://epic-rproxyprod.coh.org/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Cleveland Clinic","FHIRPatientFacingURI":"https://api.ccf.org/mu/api/FHIR/DSTU2/"},{"OrganizationName":"Columbia Physicians","FHIRPatientFacingURI":"https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Columbus Regional Health","FHIRPatientFacingURI":"https://epicprdproxy.crh.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Community First Medical Center","FHIRPatientFacingURI":"https://proxy.cfmedicalcenter.com/FHIRProxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Community Health Network","FHIRPatientFacingURI":"https://esp.ecommunity.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Community Healthcare System","FHIRPatientFacingURI":"https://webproxy.comhs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Community Medical Centers","FHIRPatientFacingURI":"https://epicsoapprd.communitymedical.org/arr_fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Community Technology Cooperative","FHIRPatientFacingURI":"https://epicproxy.et1290.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"CommUnityCare Health Centers","FHIRPatientFacingURI":"https://epicproxy.et1164.epichosted.com/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cone Health","FHIRPatientFacingURI":"https://epsoap.conehealth.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Conemaugh Health System","FHIRPatientFacingURI":"https://fhir.conemaugh.org/arr-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Confluence Health","FHIRPatientFacingURI":"https://epicproxy.et0764.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Connecticut Children\'s Medical Center","FHIRPatientFacingURI":"https://epicproxy.connecticutchildrens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Contra Costa","FHIRPatientFacingURI":"https://icproxy.mycclink.org/proxy-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Cook Children’s Health Care System","FHIRPatientFacingURI":"https://cookicfg.cookchildrens.org/CookFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Cooper University Health Care","FHIRPatientFacingURI":"https://epicproxy.et0578.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Cottage Health","FHIRPatientFacingURI":"https://eparp.sbch.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Covenant Health","FHIRPatientFacingURI":"https://haiku.bshsi.org/fhir/COV_OAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Covenant HealthCare","FHIRPatientFacingURI":"https://epichaiku.chs-mi.com/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"CVS Health & Minute Clinic","FHIRPatientFacingURI":"https://retailepicfhir.cvshealth.com/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Dartmouth-Hitchcock","FHIRPatientFacingURI":"https://edhwebportal.hitchcock.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"DaVita Physician Solutions","FHIRPatientFacingURI":"https://epicproxy.et1087.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Dayton Children\'s Hospital","FHIRPatientFacingURI":"https://appprd.childrensdayton.org/interconnect-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Deaconess Health System","FHIRPatientFacingURI":"https://eprp.deaconess.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Denver Health","FHIRPatientFacingURI":"https://webservices.dhha.org/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Drexel Medicine","FHIRPatientFacingURI":"https://epicproxy.et4001.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Driscoll Children\'s Hospital","FHIRPatientFacingURI":"https://fhir.dchstx.org/FHIR-External/api/FHIR/DSTU2/"},{"OrganizationName":"Duke Health","FHIRPatientFacingURI":"https://health-apis.duke.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Duly Health and Care","FHIRPatientFacingURI":"https://epicproxy.et1296.epichosted.com/APIProxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"East Boston Neighborhood Health Center","FHIRPatientFacingURI":"https://ebmobile14.ebnhc.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Edward-Elmhurst Healthcare","FHIRPatientFacingURI":"https://fhirprd.edward.org/fhirprd/EEHOAUTH/api/FHIR/DSTU2/"},{"OrganizationName":"Eisenhower Medical Center","FHIRPatientFacingURI":"https://epicarr.emc.org/EMC_FHIR_PRD/api/FHIR/DSTU2/"},{"OrganizationName":"El Camino Hospital","FHIRPatientFacingURI":"https://rwebproxy.elcaminohospital.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"El Rio Health","FHIRPatientFacingURI":"https://epicproxy.et1240.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Emory Healthcare","FHIRPatientFacingURI":"https://epicrp-prd.eushc.org/OAUTH2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Englewood Hospital and Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1073.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Enloe Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1034.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"EPIC Management (Beaver Medical Group)","FHIRPatientFacingURI":"https://epicproxy.et1038.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Erlanger Health System","FHIRPatientFacingURI":"https://epicproxy.et0967.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Eskenazi Health","FHIRPatientFacingURI":"https://proxy.eskenazihealth.edu/FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Essentia Health","FHIRPatientFacingURI":"https://m.essentiahealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"EvergreenHealth","FHIRPatientFacingURI":"https://epicproxy.et1270.epichosted.com/apiproxyprd/api/FHIR/DSTU2/"},{"OrganizationName":"Evernorth","FHIRPatientFacingURI":"https://epicarr.healthcare.cigna.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Fairview Health Services","FHIRPatientFacingURI":"https://sfd.fairview.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Family Care Network","FHIRPatientFacingURI":"https://epicproxy.fcn.net/Fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Family Health Center (Michigan)","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"FastMed","FHIRPatientFacingURI":"https://external.fastmed.com/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"FirstHealth of the Carolinas","FHIRPatientFacingURI":"https://epicrp.firsthealth.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Foothill Family Clinic ","FHIRPatientFacingURI":"https://epicproxy.et4001.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Franciscan Alliance","FHIRPatientFacingURI":"https://ema.franciscanalliance.org/FHIR_PROXY/api/FHIR/DSTU2/"},{"OrganizationName":"Franciscan Missionaries of Our Lady Health System","FHIRPatientFacingURI":"https://epicproxy.et0830.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Fresenius Medical Care North America","FHIRPatientFacingURI":"https://epicproxy.et1041.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Froedtert Health","FHIRPatientFacingURI":"https://epicserviceGW.froedtert.com/FHIRProxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Garnet Health","FHIRPatientFacingURI":"https://epic.garnethealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Geisinger","FHIRPatientFacingURI":"https://geisapi.geisinger.edu/FHIR_PROD/api/FHIR/DSTU2/"},{"OrganizationName":"Genesis Healthcare System","FHIRPatientFacingURI":"https://fhir.genesishcs.org/api/FHIR/DSTU2/"},{"OrganizationName":"George Washington University Medical Faculty Associates","FHIRPatientFacingURI":"https://epicproxy.et1222.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Golden Valley Health Centers","FHIRPatientFacingURI":"https://ep-rps.gvhc.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Grady Health System","FHIRPatientFacingURI":"https://surescripts.gmh.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Greater Baltimore Medical Center","FHIRPatientFacingURI":"https://eportal.gbmc.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Group Health Cooperative - South Central Wisconsin","FHIRPatientFacingURI":"https://linkpoint.ghcscw.com/Interconnect-PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Gundersen Health System","FHIRPatientFacingURI":"https://scproxy.gundersenhealth.org/FHIRARR/api/FHIR/DSTU2/"},{"OrganizationName":"Hackensack Meridian Health","FHIRPatientFacingURI":"https://mepic.hmhn.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Harris Health System","FHIRPatientFacingURI":"https://fhir.harrishealth.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Hartford HealthCare","FHIRPatientFacingURI":"https://EpicProxy.hhchealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Hattiesburg Clinic and Forrest General Hospital","FHIRPatientFacingURI":"https://soapprod.hattiesburgclinic.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Hawaii Pacific Health","FHIRPatientFacingURI":"https://webservices.hawaiipacifichealth.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"HCA Central and West Texas","FHIRPatientFacingURI":"https://stdavidsfhirprd.app.medcity.net/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"HCA Mountain","FHIRPatientFacingURI":"https://mountainstarhealthfhirprd.app.medcity.net/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"HCA South Atlantic","FHIRPatientFacingURI":"https://memorialhealthfhirprd.app.medcity.net/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Health Choice Network","FHIRPatientFacingURI":"https://epicproxy.et1256.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"HealthEast Care System","FHIRPatientFacingURI":"https://sfd.fairview.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"HealthPartners","FHIRPatientFacingURI":"https://proxy.healthpartners.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hendricks Regional Health","FHIRPatientFacingURI":"https://sehproxy.stelizabeth.com/arr-fhir/HRH/api/FHIR/DSTU2/"},{"OrganizationName":"Hennepin Healthcare","FHIRPatientFacingURI":"https://hie.hcmed.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Henry Ford Health System","FHIRPatientFacingURI":"https://fhir.hfhs.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hill Physicians","FHIRPatientFacingURI":"https://epicproxy.et1013.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hoag Memorial Hospital Presbyterian","FHIRPatientFacingURI":"https://epicproxy.et1197.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"HonorHealth","FHIRPatientFacingURI":"https://interconnect.honorhealth.com/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Hospital for Special Surgery","FHIRPatientFacingURI":"https://epicproxy.et0927.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Hospital Sisters Health System (HSHS)","FHIRPatientFacingURI":"https://scripts.prevea.com/FHIR-ARR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Houston Methodist","FHIRPatientFacingURI":"https://epiclbsprxyprodpass.houstonmethodist.org/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Hurley Medical Center","FHIRPatientFacingURI":"https://fhir.hurleymc.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Illinois Bone & Joint Institute","FHIRPatientFacingURI":"https://epicproxy.et1195.epichosted.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Infirmary Health","FHIRPatientFacingURI":"https://ssproxyprod.infirmaryhealth.org/epicFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Inova and Valley Health","FHIRPatientFacingURI":"https://epicrpprd.inova.org/fhirrp/api/FHIR/DSTU2/"},{"OrganizationName":"Institute for Family Health","FHIRPatientFacingURI":"https://epicproxy.institute.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"INTEGRIS Health","FHIRPatientFacingURI":"https://FHIR.Integrisok.com/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Intermountain Healthcare","FHIRPatientFacingURI":"https://sclprdproxy.sclhs.net/FHIRPRD-2017/api/FHIR/DSTU2/"},{"OrganizationName":"Jefferson Health","FHIRPatientFacingURI":"https://fhir.jefferson.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"John Muir Health","FHIRPatientFacingURI":"https://fhir.johnmuirhealth.com/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Johns Hopkins Medicine","FHIRPatientFacingURI":"https://epicmobile.johnshopkins.edu/FHIR_PRD/api/FHIR/DSTU2/"},{"OrganizationName":"JPS Health Network","FHIRPatientFacingURI":"https://fhir.jpshealth.org:4431/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente -  Maryland/Virginia/Washington D.C.","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/170/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - California - Northern","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/312/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - California - Southern","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/212/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - Colorado","FHIRPatientFacingURI":"https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/140/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente – Georgia","FHIRPatientFacingURI":"https://fhir.kp.org/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/200/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente – Oregon – SW Washington","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/190/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente - Washington","FHIRPatientFacingURI":"https://fhir.kp.org/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Kaiser Permanente Hawaii / Maui Health System","FHIRPatientFacingURI":"https://FHIR.KP.ORG/service/ptnt_care/EpicEdiFhirRoutingSvc/v2014/esb-envlbl/130/api/FHIR/DSTU2/"},{"OrganizationName":"Kalamazoo College Student Health Center","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kalamazoo Foot Surgery","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kelsey-Seybold Clinic","FHIRPatientFacingURI":"https://ssrx.ksnet.com/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kennedy Krieger Institute","FHIRPatientFacingURI":"https://epicproxy.et1095.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Kettering Health Network","FHIRPatientFacingURI":"https://khnarr.ketthealth.com/FHIR-PROD/api/FHIR/DSTU2/"},{"OrganizationName":"KeyCare","FHIRPatientFacingURI":"https://epicproxy.et1284.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"King\'s Daughters Medical Center","FHIRPatientFacingURI":"https://arrprd.kdmc.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Kootenai Health","FHIRPatientFacingURI":"https://soapprod.multicare.org/FHIRProxy/KH/api/FHIR/DSTU2/"},{"OrganizationName":"Lacy C Kessler, MD, PA","FHIRPatientFacingURI":"https://rxproxy.sw.org/FHIR-PRD/CONNECT/api/FHIR/DSTU2/"},{"OrganizationName":"Lakeland Regional Health (FL)","FHIRPatientFacingURI":"https://epicapp.mylrh.org/OAuth2/api/FHIR/DSTU2/"},{"OrganizationName":"Lancaster General Health","FHIRPatientFacingURI":"https://epicproxy.lghealth.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"LCMC Health","FHIRPatientFacingURI":"https://interconnect.lcmchealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Lee Health","FHIRPatientFacingURI":"https://epicedi.leememorial.org/FHIR-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Legacy Health","FHIRPatientFacingURI":"https://lhspdxfhirprd.lhs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Lehigh Valley Health Network","FHIRPatientFacingURI":"https://proxy.lvh.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Leon Medical Centers","FHIRPatientFacingURI":"https://prodinterconnect.leonmedicalcenters.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Lexington Medical Center","FHIRPatientFacingURI":"https://lmcrcs.lexmed.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Licking Memorial Health Systems","FHIRPatientFacingURI":"https://epicproxy.et1168.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Lifespan","FHIRPatientFacingURI":"https://lsepprdsoap.lifespan.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Loma Linda University Health and CareConnect Partners","FHIRPatientFacingURI":"https://fhir.lluh.org/interconnect-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Loyola Medicine","FHIRPatientFacingURI":"https://rxhub.luhs.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Luminis Health","FHIRPatientFacingURI":"https://epicarr.aahs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Main Line Health","FHIRPatientFacingURI":"https://epicproxy.et1007.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"MaineHealth","FHIRPatientFacingURI":"https://fhir.mainehealth.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Marshall Medical Center","FHIRPatientFacingURI":"https://emrrp.ucdmc.ucdavis.edu/FHIR/MMC/api/FHIR/DSTU2/"},{"OrganizationName":"Mary Greeley Medical Center (Iowa)","FHIRPatientFacingURI":"https://emrproxy.mcfarlandclinic.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mary Washington Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1055.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mass General Brigham","FHIRPatientFacingURI":"https://ws-interconnect-fhir.partners.org/Interconnect-FHIR-MU-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Mayo Clinic","FHIRPatientFacingURI":"https://pep.api.mayo.edu/epicfhiroauth/vexternal/api/FHIR/DSTU2/"},{"OrganizationName":"McFarland Clinic (Iowa)","FHIRPatientFacingURI":"https://emrproxy.mcfarlandclinic.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"McLeod Health","FHIRPatientFacingURI":"https://epicproxy.et1267.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Medical University of South Carolina","FHIRPatientFacingURI":"https://fhirprod.musc.edu/fhirprod/api/FHIR/DSTU2/"},{"OrganizationName":"Medisys Health Network","FHIRPatientFacingURI":"https://eprescribe-p.medisys.org/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Memorial Healthcare System","FHIRPatientFacingURI":"https://mhssp.mhs.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Memorial Hospital and Health Care Center","FHIRPatientFacingURI":"https://arrprd.mhhcc.org/OAuth2/api/FHIR/DSTU2/"},{"OrganizationName":"MemorialCare","FHIRPatientFacingURI":"https://fhir.memorialcare.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health - OH, KY","FHIRPatientFacingURI":"https://chperx.health-partners.org/Proxy-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health (Arkansas, Louisiana, Mississippi and Texas)","FHIRPatientFacingURI":"https://epic-fhir.mercy.net/prdfhirstl/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health Services (MD)","FHIRPatientFacingURI":"https://surescripts.mdmercy.com/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Health System - WI","FHIRPatientFacingURI":"https://epicproxy.mhsjvl.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mercy Medical Center","FHIRPatientFacingURI":"https://eproxy.mercycare.org/oauth2/api/FHIR/DSTU2/"},{"OrganizationName":"Meritus","FHIRPatientFacingURI":"https://meritus-rev-prd.meritushealth.com/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Methodist Health System","FHIRPatientFacingURI":"https://epcapp.mhd.com/arr-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Methodist Hospitals","FHIRPatientFacingURI":"https://mychart.methodisthospitals.org/FHIR-ARR/api/FHIR/DSTU2/"},{"OrganizationName":"Metro Health - Michigan","FHIRPatientFacingURI":"https://arrprd.metrohealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"MetroHealth - OH","FHIRPatientFacingURI":"https://fhir.metrohealth.org/fhir_prd/api/FHIR/DSTU2/"},{"OrganizationName":"Michigan Medicine","FHIRPatientFacingURI":"https://mcproxyprd.med.umich.edu/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Middlesex Hospital","FHIRPatientFacingURI":"https://epicproxy.et1124.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mohawk Valley Health System","FHIRPatientFacingURI":"https://fhir.mvhealthsystem.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Molina Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1057.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Monroe Clinic","FHIRPatientFacingURI":"https://webproxyprd.monroeclinic.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Montage Health","FHIRPatientFacingURI":"https://epicproxy.et1058.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Montefiore Medical Center","FHIRPatientFacingURI":"https://soapepic.montefiore.org/FhirProxyPrd/api/FHIR/DSTU2/"},{"OrganizationName":"Monument Health","FHIRPatientFacingURI":"https://ehrmobile.regionalhealth.org/interconnect-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Mosaic Life Care","FHIRPatientFacingURI":"https://epicproxy.et1274.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Mount Auburn Hospital","FHIRPatientFacingURI":"https://fhir.mah.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Mount Sinai Health System","FHIRPatientFacingURI":"https://epicsoapproxyprd.mountsinai.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Mount Sinai Medical Center","FHIRPatientFacingURI":"https://epicfhir.msmc.com/proxysite-prd/api/FHIR/DSTU2/"},{"OrganizationName":"MultiCare Health System","FHIRPatientFacingURI":"https://soapprod.multicare.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Muscogee - Creek Nation Department of Health","FHIRPatientFacingURI":"https://epicproxy.et1221.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"MY DR NOW","FHIRPatientFacingURI":"https://epicproxy.et4001.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"MyMichigan Health","FHIRPatientFacingURI":"https://arrprod.midmichigan.net/ProdFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Nationwide Children\'s Hospital","FHIRPatientFacingURI":"https://hkc.nationwidechildrens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"NCH Healthcare System","FHIRPatientFacingURI":"https://epicproxy.et1233.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Nebraska Medicine","FHIRPatientFacingURI":"https://ocsoapprd.nebraskamed.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Nemours","FHIRPatientFacingURI":"https://iconnect.nemours.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Nephrology Center - Southwest Michigan","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"New Hanover Regional Medical Center","FHIRPatientFacingURI":"https://epicmobile.nhrmc.org/OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"New Jersey Urology","FHIRPatientFacingURI":"https://epicproxy.et1153.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"New York-Presbyterian","FHIRPatientFacingURI":"https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"NOMS Healthcare","FHIRPatientFacingURI":"https://prdproxy.nomshealthcare.com/prd-oauth2/api/FHIR/DSTU2/"},{"OrganizationName":"North Memorial Health","FHIRPatientFacingURI":"https://minerva.northmemorial.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"North Mississippi Health Services","FHIRPatientFacingURI":"https://eiclbext.nmhs.net/interconnect-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"North Oaks","FHIRPatientFacingURI":"https://soapproxyprd.northoaks.org/nohsfhir/api/FHIR/DSTU2/"},{"OrganizationName":"Northeast Georgia Health System","FHIRPatientFacingURI":"https://wpprod.nghs.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"NorthShore University Health System","FHIRPatientFacingURI":"https://haiku.northshore.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Northwest Community Hospital","FHIRPatientFacingURI":"https://epicprdproxy.nch.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Northwestern Medicine","FHIRPatientFacingURI":"https://nmepicproxy.nm.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Norton Healthcare","FHIRPatientFacingURI":"https://epicsoap.nortonhealthcare.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Novant Health","FHIRPatientFacingURI":"https://webproxy.mynovant.org/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"NOVO Health","FHIRPatientFacingURI":"https://rproxy.novohtg.com/OAUTHPRD/api/FHIR/DSTU2/"},{"OrganizationName":"NYC Health + Hospitals","FHIRPatientFacingURI":"https://epicproxypda.nychhc.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"NYU Langone Medical Center","FHIRPatientFacingURI":"https://epicfhir.nyumc.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"OB/GYN Associates of Waco - Dr. Rister, Dr. Koeritz","FHIRPatientFacingURI":"https://rxproxy.sw.org/FHIR-PRD/CONNECT/api/FHIR/DSTU2/"},{"OrganizationName":"OCHIN","FHIRPatientFacingURI":"https://webprd.ochin.org/prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Ochsner Health System","FHIRPatientFacingURI":"https://myc.ochsner.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"OhioHealth","FHIRPatientFacingURI":"https://ccpintconfg.ohiohealth.com/Interconnect-PRD-MUAPI/api/FHIR/DSTU2/"},{"OrganizationName":"Olmsted Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1077.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"One Brooklyn Health System","FHIRPatientFacingURI":"https://epicproxy.et0883.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"OptumCare East","FHIRPatientFacingURI":"https://epicarr.optum.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"OptumCare West","FHIRPatientFacingURI":"https://epicpnwarr.optum.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Oregon Health & Science University","FHIRPatientFacingURI":"https://epicmobile.ohsu.edu/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Orlando Health","FHIRPatientFacingURI":"https://epicproxy.et1131.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"OrthoCarolina","FHIRPatientFacingURI":"https://epwebapps.orthocarolina.com/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"OrthoVirginia","FHIRPatientFacingURI":"https://epicproxy.et1015.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"OSF HealthCare","FHIRPatientFacingURI":"https://ssproxy.osfhealthcare.org/fhir-proxy/api/FHIR/DSTU2/"},{"OrganizationName":"OU Health","FHIRPatientFacingURI":"https://epicproxy.et1181.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Overlake Hospital Medical Center","FHIRPatientFacingURI":"https://sfd.overlakehospital.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Owensboro Health","FHIRPatientFacingURI":"https://fhir.omhs.org/rp-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Pacific Dental Services","FHIRPatientFacingURI":"https://epicproxy.et1079.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Palos Health","FHIRPatientFacingURI":"https://epicproxy.et0946.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Parkland","FHIRPatientFacingURI":"https://pmh-vmhaiku-01.pmh.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Parkview Health","FHIRPatientFacingURI":"https://epicprod-mobile.parkview.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"PeaceHealth","FHIRPatientFacingURI":"https://soapproxy.peacehealth.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Pediatric Physicians Organization at Children\'s","FHIRPatientFacingURI":"https://fhir.chppoc.org/Fhir-External/api/FHIR/DSTU2/"},{"OrganizationName":"Penn Medicine","FHIRPatientFacingURI":"https://ssproxy.pennhealth.com/PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Phelps Health","FHIRPatientFacingURI":"https://epicproxy.et1134.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Piedmont Healthcare","FHIRPatientFacingURI":"https://webproxy.piedmont.org/ARR-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Pikeville Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1225.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Pine Rest Christian Mental Health Services","FHIRPatientFacingURI":"https://wecare.pinerest.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Planned Parenthood","FHIRPatientFacingURI":"https://epicproxy.et1154.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Premier Health","FHIRPatientFacingURI":"https://rx.premierhealthpartners.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Premise Health","FHIRPatientFacingURI":"https://epicproxy.et1052.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Presbyterian Healthcare Services","FHIRPatientFacingURI":"https://epicFHIR.phs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Prime Healthcare","FHIRPatientFacingURI":"https://phsfhir.primehealthcare.com/PHS-PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Prisma Health","FHIRPatientFacingURI":"https://epicproxy.et0915.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"ProHealth Care","FHIRPatientFacingURI":"https://soap.phci.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"ProMedica Health System","FHIRPatientFacingURI":"https://fhir.promedica.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Providence Health & Services - Alaska","FHIRPatientFacingURI":"https://haikuak.providence.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Providence Health & Services - Oregon/California","FHIRPatientFacingURI":"https://haikuor.providence.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Providence Health & Services - Washington/Montana","FHIRPatientFacingURI":"https://haikuwa.providence.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"QuadMed","FHIRPatientFacingURI":"https://epicicfore.quadmedical.com/fhirprd/api/FHIR/DSTU2/"},{"OrganizationName":"Rady Children\'s","FHIRPatientFacingURI":"https://epcppxl1.rchsd.org/fhirprd/api/FHIR/DSTU2/"},{"OrganizationName":"Reid Health","FHIRPatientFacingURI":"https://epicproxy.et1220.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Reliant Medical Group","FHIRPatientFacingURI":"https://fhirprd.reliantmedicalgroup.org/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Renown, Barton, CVMC","FHIRPatientFacingURI":"https://fhir.renown.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"River Valley","FHIRPatientFacingURI":"https://eprescribe.mercy.net/PRDFHIRSGF/MTSM/api/FHIR/DSTU2/"},{"OrganizationName":"Riverside Health System (Newport News, VA)","FHIRPatientFacingURI":"https://ep-rpfg.rivhs.com/Interconnect-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Riverside Medical Center","FHIRPatientFacingURI":"https://rpprod.riversidehealthcare.net/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Riverside Medical Clinic","FHIRPatientFacingURI":"https://sf1.rmcps.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Riverview Health","FHIRPatientFacingURI":"https://epic-fhir.mercy.net/prdfhirstl/RVH/api/FHIR/DSTU2/"},{"OrganizationName":"Rochester Regional Health","FHIRPatientFacingURI":"https://epicarr.rochesterregional.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Rush University Medical Center","FHIRPatientFacingURI":"https://epicproxy.rush.edu/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"RWJBarnabas Health","FHIRPatientFacingURI":"https://epicproxy.et1157.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Saint Francis Health System","FHIRPatientFacingURI":"https://eprdsoap000.saintfrancis.Com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Saint Francis Healthcare System","FHIRPatientFacingURI":"https://reverseproxy.sfmc.net/fhirproxyprd/api/FHIR/DSTU2/"},{"OrganizationName":"Saint Luke\'s Health System","FHIRPatientFacingURI":"https://epicmobile.corp.saint-lukes.org/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"Salem Health","FHIRPatientFacingURI":"https://prd.salemhealth.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Salinas Valley Memorial Healthcare Systems","FHIRPatientFacingURI":"https://epicproxy.et1146.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Samaritan Health Services","FHIRPatientFacingURI":"https://fhir.samhealth.org/fhir-arr/api/FHIR/DSTU2/"},{"OrganizationName":"San Francisco Department of Public Health","FHIRPatientFacingURI":"https://epicproxy.et1082.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Sanford Health","FHIRPatientFacingURI":"https://eprescribe.sanfordhealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Sansum Clinic","FHIRPatientFacingURI":"https://wavesurescripts.sansumclinic.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Santa Clara Valley Medical Center Hospitals and Clinics","FHIRPatientFacingURI":"https://scvhhsfhir.sccgov.org/interconnect-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Scotland Health Care System","FHIRPatientFacingURI":"https://epicproxy.et0905.epichosted.com/FHIRproxy/SCOT/api/FHIR/DSTU2/"},{"OrganizationName":"Scottish Rite for Children","FHIRPatientFacingURI":"https://epicproxy.et0970.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Scripps Health","FHIRPatientFacingURI":"https://haiku.scrippshealth.org/ARR-PRD-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Seattle Children\'s Hospital","FHIRPatientFacingURI":"https://fhir.seattlechildrens.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Select Medical","FHIRPatientFacingURI":"https://epicproxy.et0948.epichosted.com/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Self Regional Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1235.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Sentara Healthcare","FHIRPatientFacingURI":"https://epicfhir.sentara.com/ARR-FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Shannon Health","FHIRPatientFacingURI":"https://epicrpx.shannonhealth.org/FHIR_ARR/api/FHIR/DSTU2/"},{"OrganizationName":"Shriners Children\'s","FHIRPatientFacingURI":"https://epicproxy.et1283.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Singing River Health System","FHIRPatientFacingURI":"https://arr.mysrhs.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Skagit Regional Health","FHIRPatientFacingURI":"https://epicproxy.et1005.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"SolutionHealth","FHIRPatientFacingURI":"https://epicproxyprd.solutionhealth.org/FHIR_PROD/api/FHIR/DSTU2/"},{"OrganizationName":"South Georgia Medical Center","FHIRPatientFacingURI":"https://epicproxy.et1024.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"South Shore Health System","FHIRPatientFacingURI":"https://SSHIC.southshorehealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Southcoast Health","FHIRPatientFacingURI":"https://epicpproxy.southcoast.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Southeast Health","FHIRPatientFacingURI":"https://arrprd.southeasthealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Southern Illinois Healthcare","FHIRPatientFacingURI":"https://epicproxy.et0986.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Sparrow Health System","FHIRPatientFacingURI":"https://haiku.sparrow.org/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Spartanburg Regional Healthcare System","FHIRPatientFacingURI":"https://epicproxy.et0939.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Spectrum Health","FHIRPatientFacingURI":"https://epicarr02.spectrumhealth.org/EpicFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Spectrum Health Lakeland","FHIRPatientFacingURI":"https://fhir.lakelandregional.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"SSM Health","FHIRPatientFacingURI":"https://fhir.ssmhc.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"St. Charles Health System","FHIRPatientFacingURI":"https://epicproxy.et1030.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"St. Elizabeth Healthcare","FHIRPatientFacingURI":"https://sehproxy.stelizabeth.com/arr-fhir/SEH/api/FHIR/DSTU2/"},{"OrganizationName":"St. Joseph Hospital Health Center","FHIRPatientFacingURI":"https://mobileproxy.sjhsyr.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"St. Jude Children\'s Research Hospital","FHIRPatientFacingURI":"https://rp.stjude.org/oauth2-prd/api/FHIR/DSTU2/"},{"OrganizationName":"St. Luke’s Health System (Idaho & Eastern Oregon)","FHIRPatientFacingURI":"https://epmobile.slhs.org/Interconnect-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"St. Luke\'s Hospital (North Carolina)","FHIRPatientFacingURI":"https://epicproxy.et0905.epichosted.com/FHIRproxy/STLU/api/FHIR/DSTU2/"},{"OrganizationName":"St. Luke\'s University Health Network","FHIRPatientFacingURI":"https://fhir.slhn.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Stanford Children\'s Health","FHIRPatientFacingURI":"https://epicproxy.et0857.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Stanford Health Care","FHIRPatientFacingURI":"https://sfd.stanfordmed.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Stormont Vail Health","FHIRPatientFacingURI":"https://epicsoap.stormontvail.org/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Summa Health","FHIRPatientFacingURI":"https://epicproxy.et1289.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Summit Health","FHIRPatientFacingURI":"https://epicsoap.bmctotalcare.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"SUNY Upstate Medical University","FHIRPatientFacingURI":"https://epicedge.upstate.edu/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Sutter Health","FHIRPatientFacingURI":"https://apiservices.sutterhealth.org/ifs/api/FHIR/DSTU2/"},{"OrganizationName":"Tahoe Forest Health System","FHIRPatientFacingURI":"https://epic-fhir.mercy.net/PRDFHIRAOK2/TAO/api/FHIR/DSTU2/"},{"OrganizationName":"Tampa General Hospital","FHIRPatientFacingURI":"https://epicproxy.et0761.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Tanner Health System","FHIRPatientFacingURI":"https://epicproxy.et1098.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"TempleHealth","FHIRPatientFacingURI":"https://epicaccess.templehealth.org/FhirProxyPrd/api/FHIR/DSTU2/"},{"OrganizationName":"Texas Children\'s Hospital","FHIRPatientFacingURI":"https://mobileapps.texaschildrens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Texas Health Resources","FHIRPatientFacingURI":"https://epproxy.texashealth.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The Brooklyn Hospital Center","FHIRPatientFacingURI":"https://epicproxy.et1043.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"The Center","FHIRPatientFacingURI":"https://epicproxy.et4006.epichosted.com/FHIRProxyPRD/api/FHIR/DSTU2/"},{"OrganizationName":"The Christ Hospital","FHIRPatientFacingURI":"https://soapproxyprod.thechristhospital.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"The Everett Clinic","FHIRPatientFacingURI":"https://fhir.myeverettclinic.com/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"The Guthrie Clinic","FHIRPatientFacingURI":"https://fhir.guthrie.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"The Ohio State University Wexner Medical Center","FHIRPatientFacingURI":"https://ihismufhir.osumc.edu/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"The Portland Clinic","FHIRPatientFacingURI":"https://tpc-shield.tpcllp.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The Queen\'s Health Systems","FHIRPatientFacingURI":"https://mobileapps.queens.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The University of Texas Health Science Center at Houston","FHIRPatientFacingURI":"https://epicproxy.et1178.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"The University of Texas MD Anderson Cancer Center","FHIRPatientFacingURI":"https://fhir.mdanderson.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"The University of Vermont Health Network","FHIRPatientFacingURI":"https://epicproxy.uvmhealth.org/FHIR-ARR/api/FHIR/DSTU2/"},{"OrganizationName":"The Vancouver Clinic","FHIRPatientFacingURI":"https://soapprod.tvc.org/ARR-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"ThedaCare","FHIRPatientFacingURI":"https://arr.thedacare.org/FHIR/TC/api/FHIR/DSTU2/"},{"OrganizationName":"TidalHealth","FHIRPatientFacingURI":"https://eweb.peninsula.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"TMC HealthCare","FHIRPatientFacingURI":"https://fhir.tmcaz.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Tower Health","FHIRPatientFacingURI":"https://epicsoap.readinghospital.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"TriHealth","FHIRPatientFacingURI":"https://epicscripts.trihealth.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Trinity Health","FHIRPatientFacingURI":"https://epic-ext.trinity-health.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Trinity Health Of New England","FHIRPatientFacingURI":"https://epicprdext.stfranciscare.org/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Trinity Health Of New England Medical Group Springfield","FHIRPatientFacingURI":"https://rmgpxy.riverbendmedical.com/fhir_proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Tufts Medicine","FHIRPatientFacingURI":"https://intconfg-p.well-net.org/PRD-OAUTH2/api/FHIR/DSTU2/"},{"OrganizationName":"UC Davis Health","FHIRPatientFacingURI":"https://emrrp.ucdmc.ucdavis.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"UC Health","FHIRPatientFacingURI":"https://epic-soap.uchealth.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UChicago Medicine","FHIRPatientFacingURI":"https://interconapps.uchospitals.edu/PRD-FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"UCLA Medical Center","FHIRPatientFacingURI":"https://arrprox.mednet.ucla.edu/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"UConn Health","FHIRPatientFacingURI":"https://epicproxy.et0996.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UCSF Benioff Children\'s Hospital","FHIRPatientFacingURI":"https://unified-api.ucsf.edu/clinical/apex/api/FHIR/DSTU2/"},{"OrganizationName":"UCSF Health","FHIRPatientFacingURI":"https://unified-api.ucsf.edu/clinical/apex/api/FHIR/DSTU2/"},{"OrganizationName":"UF Health","FHIRPatientFacingURI":"https://epicsoap.shands.ufl.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"UHS San Antonio","FHIRPatientFacingURI":"https://epicproxy.et1130.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UI Health","FHIRPatientFacingURI":"https://epicproxy.et1085.epichosted.com/FHIRPROXY/api/FHIR/DSTU2/"},{"OrganizationName":"UK HealthCare","FHIRPatientFacingURI":"https://ukepicproxy.mc.uky.edu/Interconnect-PRD-OAuth2/api/FHIR/DSTU2/"},{"OrganizationName":"UMass Memorial Health Care","FHIRPatientFacingURI":"https://epicproxy.et0978.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UMC Southern Nevada","FHIRPatientFacingURI":"https://epicproxy.et1023.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UNC Health Care","FHIRPatientFacingURI":"https://epicfe.unch.unc.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"United Health Services New York (NYUHS)","FHIRPatientFacingURI":"https://epicproxy.et1127.epichosted.com/FHIRproxy/api/FHIR/DSTU2/"},{"OrganizationName":"United Regional Health Care System","FHIRPatientFacingURI":"https://epicproxy.et1096.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UnityPoint Health","FHIRPatientFacingURI":"https://epicfhir.unitypoint.org/ProdFHIR/api/FHIR/DSTU2/"},{"OrganizationName":"University Health Care System","FHIRPatientFacingURI":"https://soap.uhcs.org/IC-FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"University Hospital (New Jersey)","FHIRPatientFacingURI":"https://epicarrprod.uhnj.org/FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"University Hospitals Cleveland","FHIRPatientFacingURI":"https://uhhsportal.uhhospitals.org/oauth2-prd/api/FHIR/DSTU2/"},{"OrganizationName":"University of Arkansas for Medical Sciences","FHIRPatientFacingURI":"https://ucsoap.uams.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of California Irvine","FHIRPatientFacingURI":"https://epicproxy.et0502.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of California San Diego","FHIRPatientFacingURI":"https://epicproxy.et0502.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Colorado Health","FHIRPatientFacingURI":"https://ss.uch.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Iowa Health Care","FHIRPatientFacingURI":"https://myepicapps.uihealthcare.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Kansas Health System","FHIRPatientFacingURI":"https://fhir.kansashealthsystem.com/interconnect-prd_fhir/api/FHIR/DSTU2/"},{"OrganizationName":"University of Louisville Physicians","FHIRPatientFacingURI":"https://epicproxy.et1193.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Maryland Medical System","FHIRPatientFacingURI":"https://fhir.umm.edu/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"University of Miami (UHealth)","FHIRPatientFacingURI":"https://uhealthsoap.med.miami.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Mississippi Medical Center","FHIRPatientFacingURI":"https://soapproxy.umc.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"University of Pittsburgh Medical Center (UPMC)","FHIRPatientFacingURI":"https://epic-fhir-prd.upmc.com/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"University of Rochester Medical Center","FHIRPatientFacingURI":"https://ercd-sproxy.urmc.rochester.edu/mips/api/FHIR/DSTU2/"},{"OrganizationName":"University of Texas Medical Branch","FHIRPatientFacingURI":"https://epic-arr.utmb.edu/fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"University of Texas Southwestern Medical Center","FHIRPatientFacingURI":"https://EpicIntprxyPRD.swmed.edu/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"University of Toledo","FHIRPatientFacingURI":"https://icon.utoledo.edu/ic-oa2-prd/api/FHIR/DSTU2/"},{"OrganizationName":"University of Utah Healthcare","FHIRPatientFacingURI":"https://webproxyprd.med.utah.edu/FHIRMyChart/api/FHIR/DSTU2/"},{"OrganizationName":"UPMC Pinnacle","FHIRPatientFacingURI":"https://Epic-Arr.pinnaclehealth.org/PRD-FHIR-ARR/api/FHIR/DSTU2/"},{"OrganizationName":"UT Health San Antonio","FHIRPatientFacingURI":"https://epicproxy.et0582.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UVA Health System","FHIRPatientFacingURI":"https://hscsesoap.hscs.virginia.edu/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UW Health And Affiliates - Wisconsin","FHIRPatientFacingURI":"https://epicproxy.hosp.wisc.edu/FhirProxy/api/FHIR/DSTU2/"},{"OrganizationName":"UW Medicine (Washington)","FHIRPatientFacingURI":"https://fhir.epic.medical.washington.edu/FHIR-Proxy/api/FHIR/DSTU2/"},{"OrganizationName":"Valley Children\'s Healthcare","FHIRPatientFacingURI":"https://ic.valleychildrens.org/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Valley Health Systems","FHIRPatientFacingURI":"https://api.valleyhealth.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Valley Medical Center","FHIRPatientFacingURI":"https://FHIR.valleymed.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Valleywise Health","FHIRPatientFacingURI":"https://esoap.mihs.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Vanderbilt","FHIRPatientFacingURI":"https://arr01.service.vumc.org/FHIR-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"VCU Health","FHIRPatientFacingURI":"https://epicproxy.et1200.epichosted.com/OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Vidant Health","FHIRPatientFacingURI":"https://prd-proxy.vidanthealth.com/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Virginia Hospital Center","FHIRPatientFacingURI":"https://common.virginiahospitalcenter.com/FHIRPRD/api/FHIR/DSTU2/"},{"OrganizationName":"Virginia Mason Franciscan Health","FHIRPatientFacingURI":"https://rp.catholichealth.net/fhir/api/FHIR/DSTU2/"},{"OrganizationName":"Virtua Health","FHIRPatientFacingURI":"https://epicproxy.et1017.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Waco Family Medicine (Heart of Texas Community Health Center)","FHIRPatientFacingURI":"https://haiku.wacofhc.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"WakeMed Health and Hospitals","FHIRPatientFacingURI":"https://epic-soap.wakemed.org/FHIR/api/FHIR/DSTU2/"},{"OrganizationName":"Walmart","FHIRPatientFacingURI":"https://epicinterconnect.walmarthealth.com/Interconnect-OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"Washington Hospital Healthcare System","FHIRPatientFacingURI":"https://psacesoap.whhs.com/interconnect-fhir-prd/api/FHIR/DSTU2/"},{"OrganizationName":"Watson Clinic","FHIRPatientFacingURI":"https://epic-arr.watsonclinicad.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Weill Cornell Medicine","FHIRPatientFacingURI":"https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"WellSpan Health","FHIRPatientFacingURI":"https://interconnect.wellspan.org/interconnect-prd-fhir/api/FHIR/DSTU2/"},{"OrganizationName":"WellStar","FHIRPatientFacingURI":"https://epicsoap.wellstar.org/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"West Tennessee Healthcare","FHIRPatientFacingURI":"https://epicproxy.et1243.epichosted.com/OAuth2-PRD/api/FHIR/DSTU2/"},{"OrganizationName":"West Virginia University Medicine","FHIRPatientFacingURI":"https://apps.mywvuchart.com/fhirproxy/api/FHIR/DSTU2/"},{"OrganizationName":"Western Michigan University School of Medicine","FHIRPatientFacingURI":"https://hygieia.bronsonhg.org/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Yakima Valley Farm Workers Clinic","FHIRPatientFacingURI":"https://epicproxy.et0943.epichosted.com/FHIRProxy/api/FHIR/DSTU2/"},{"OrganizationName":"Yale New Haven Health System","FHIRPatientFacingURI":"https://patientfhirapis.ynhh.org/pff/api/FHIR/DSTU2/"},{"OrganizationName":"Yuma Regional Medical Center","FHIRPatientFacingURI":"https://yrmccare1.yumaregional.org/FHIR/api/FHIR/DSTU2/"}]}');

},{}],"2cBTx":[function(require,module,exports) {
module.exports = JSON.parse('{"Entries":[{"OrganizationName":"Oscar Matthews, MD","FHIRPatientFacingURI":"https://fhir-myrecord.cerner.com/r4/-KzIoYV6gk-ILcHOWbsH2m9KsSdDgi12/"}]}');

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire21e7")

//# sourceMappingURL=index.975ef6c8.js.map
