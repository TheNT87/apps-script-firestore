/**
 * Gets information about a location.
 *
 * @param {String} loc Resource name for the location.
 * @return {Object} If successful, the response body contains an instance of [Location](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.locations#Location).
 */
function get_location(loc) { return get_(ENDPOINT.concat(`projects/${this.project_id}`,`/locations/${loc}`)); }

/**
 * Lists information about the supported locations for this service.
 *
 * @param {Object} filter See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.locations/list#query-parameters
 * @return {Object} Response structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.locations/list#response-body
 */
function list_locations(filter){ return get_(ENDPOINT.concat(`projects/${this.project_id}/locations`,query_(filter))); }
