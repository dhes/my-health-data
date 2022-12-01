import epicEndpointsJson from './epic.json'
import cernerEndpointsJson from './cerner.json'

const sandboxEndpoints = [{
    fhirBaseUrl: 'http://launch.smarthealthit.org/v/r2/sim/eyJoIjoiMSJ9/fhir',
    name: 'SMART Sandbox R2',
    tags: ['sandbox', 'smart']
}, {
    fhirBaseUrl: 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/',
    name: 'Epic Argonaut Sandbox',
    tags: ['sandbox', 'epic']
}, {
	fhirBaseUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/',
	name: 'Fhir.epic.com Sandbox - R4', // added by Dan
	tags: ['sandbox', 'epic']
}, {
	fhirBaseUrl: 'https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/',
	name: 'Fhir.epic.com Sandbox - DSTU2', // added by Dan
	tags: ['sandbox', 'cerner']
}, {
	fhirBaseUrl: 'https://fhir-myrecord.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/',
	name: 'Fhir.epic.com Sandbox - R4', // added by Dan
	tags: ['sandbox', 'cerner']
}]

const epicProductionEndpoints = epicEndpointsJson
    .Entries.map(e => ({
        fhirBaseUrl: e.FHIRPatientFacingURI,
        name: e.OrganizationName,
        tags: ['production', 'epic']
    }))

const cernerProductionEndpoints = cernerEndpointsJson
    .Entries.map(e => ({
        fhirBaseUrl: e.FHIRPatientFacingURI,
        name: e.OrganizationName,
        tags: ['production', 'cerner']
    }))

// const endpoints = sandboxEndpoints.concat(epicProductionEndpoints).concat(cernerEndpointsJson)
const endpoints = sandboxEndpoints.concat(epicProductionEndpoints, cernerProductionEndpoints)
export default endpoints