const fs = require("fs");
const bundles = require("./me/queensv2.json"); // where each 'bundle' is a array with one entry whose value is a Bundle resource
let bundleEntrys = []; // Entry stands for FHIR Budle entry array
bundles.forEach((bundle) => bundleEntrys.push(bundle[0].entry)); // each 'bundleEntry is an array with one Bundle resourse
let allBundleEntries = [];
// this has the same effect as flattening..
// allBundleEntries = bundleEntrys.reduce((accumulator, currentValue) =>
//   accumulator.concat(...currentValue)
// );
allBundleEntries = bundleEntrys.flat(1);
// console.log(JSON.stringify(allBundleEntries).normalize() === JSON.stringify(flattenedBundleEntries).normalize()); // false
// fs.writeFile(
//   "./me/allBundleEntries.json",
//   JSON.stringify(allBundleEntries),
//   (err) => {
//     if (err) throw err;
//   }
// );
fs.writeFile(
  "./me/allBundleEntries.json",
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

// blah