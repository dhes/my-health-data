const fs = require("fs");
const sourceFile = "../me/" + process.argv[2] + ".json";
const destFile = process.cwd() + "/me/" + process.argv[3] + ".json";
const filteredFile = process.cwd() + "/me/" + process.argv[3] + "Filtered.json";
console.log(sourceFile + " " + destFile);
const bundles = require(sourceFile); // where each 'bundle' is a array with one entry whose value is a Bundle resource
// console.log();
let bundleEntrys = []; // Entry stands for FHIR Bundle entry element, confusing because entry has many items
bundles.forEach((bundle) => bundleEntrys.push(bundle[0].entry)); // each 'bundleEntry is an array with one Bundle resource
let allBundleEntries = [];
allBundleEntries = bundleEntrys.flat(1);
fs.writeFile(
  destFile,
  JSON.stringify(allBundleEntries),
  (err) => {
    if (err) throw err;
  }
);
// filter out all OperationOutcome resources
const filteredEntries = allBundleEntries.filter(
  (value) => value.resource.resourceType != "OperationOutcome"
);
fs.writeFile(
  filteredFile,
  JSON.stringify(filteredEntries),
  (err) => {
    if (err) throw err;
  }
);
