// Endpoints are hardcoded here. No need to bundle hundreds of KB of epic.json/cerner.json.
// Add or remove endpoints as needed.

const endpoints = [
  {
    name: 'SMART Sandbox R2',
    fhirBaseUrl: 'http://launch.smarthealthit.org/v/r2/sim/eyJoIjoiMSJ9/fhir',
    tags: ['sandbox', 'smart'],
  },
  {
    name: 'Epic Argonaut Sandbox',
    fhirBaseUrl: 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/',
    tags: ['sandbox', 'epic'],
  },
  {
    name: 'Epic Sandbox R4',
    fhirBaseUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/',
    tags: ['sandbox', 'epic'],
  },
  {
    name: 'Cerner Sandbox DSTU2',
    fhirBaseUrl: 'https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/',
    tags: ['sandbox', 'cerner'],
  },
  {
    name: 'Cerner Sandbox R4',
    fhirBaseUrl: 'https://fhir-myrecord.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/',
    tags: ['sandbox', 'cerner'],
  },
  {
    name: "The Queen's Health Systems R4",
    fhirBaseUrl: 'https://mobileapps.queens.org/FHIR/MYCHART/api/FHIR/R4/',
    tags: ['production', 'epic'],
  },
  {
    name: 'Hawaii Pacific Health R4',
    fhirBaseUrl: 'https://webservices.hawaiipacifichealth.org/fhir/api/FHIR/R4/',
    tags: ['production', 'epic'],
  },
];

export default endpoints;
