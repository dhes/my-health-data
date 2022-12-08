const fs = require("fs");
const bundles = require("./me/queensv2.json"); // where each 'bundle' is a array with one entry whose value is a Bundle resource
let bundleEntrys = []; // Entry stands for FHIR Bundle entry element, confusing because entry has many items
bundles.forEach((bundle) => bundleEntrys.push(bundle[0].entry)); // each 'bundleEntry is an array with one Bundle resource
let allBundleEntries = [];
allBundleEntries = bundleEntrys.flat(1);
fs.writeFile(
  "./me/allQueensResources.json",
  JSON.stringify(allBundleEntries),
  (err) => {
    if (err) throw err;
  }
);
// filter out all OperationOutcome resources
const filteredEntries = allBundleEntries.filter((value) => value.resource.resourceType != "OperationOutcome");
fs.writeFile(
  "./me/filteredEntries.json",
  JSON.stringify(filteredEntries),
  (err) => {
    if (err) throw err;
  }
);

