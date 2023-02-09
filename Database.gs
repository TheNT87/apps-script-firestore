/**
 * Create a database.
 *
 * @param {string} id Required. The ID to use for the database, which will become the final component of the database's resource name.
 * This value should be 4-63 characters. Valid characters are /[a-z][0-9]-/ with first character a letter and the last a letter or a number.
 * Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
 * "(default)" database id is also valid.
 * @param {Object} db The request body contains an instance of Database. See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases#Database
 * @return {Object} If successful, the response body contains a newly created instance of Operation. See https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation
 */
function create_database(id,db) { return post_(ENDPOINT.concat(`projects/${this.project_id}/databases?databaseId=${id}`),db); }

/**
 * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage.
 * Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created.
 * The output of an export may only be used once the associated operation is done.
 * If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
 * For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
 *
 * @param {Object} req See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases/exportDocuments#request-body
 * @return {Object} If successful, the response body contains an instance of Operation. See https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation
 */
function export_documents(req){ return post_(endpoint_(':exportDocuments'),req); }

/**
 * Gets information about a database.
 *
 * @return {Object} If successful, the response body contains an instance of Database. See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases#Database
 */
function get_database(){ return get_(endpoint_()); }

/**
 * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten.
 * The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created.
 * If an databases.importDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
 *
 * @param {Object} req See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases/importDocuments#request-body
 * @return {Object} If successful, the response body contains an instance of Operation. See https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation
 */
function import_database(req){ return post_(ENDPOINT.concat(':importDocuments'),req); }

/**
 * List all the databases in the project.
 *
 * @return {Object[]} The list of databases for a project.
 */
function list_databases(){ return get_(ENDPOINT.concat(`projects/${this.project_id}/databases`)).databases; }

/**
 * Updates a database.
 *
 * @param {string[]} mask The list of fields to be updated. This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".
 * @param {Object} db The request body contains an instance of Database. See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases#Database
 * @return {Object} If successful, the response body contains an instance of Operation. See https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation
 */
function patch_database(mask,db){ return patch_(endpoint_(`?updateMask=${mask.join(',')}`),db); }
