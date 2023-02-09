/**
 * Creates a composite index. This returns a [google.longrunning.Operation](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation) which may be used to track the status of the creation. The metadata for the operation will be the type [IndexOperationMetadata](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/IndexOperationMetadata).
 *
 * @param {String} collectionId Collection Group to use.
 * @param {Object} req The request body contains an instance of [Index](The request body contains an instance of Index.).
 * @return {Object} If successful, the response body contains a newly created instance of [Operation](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation).
 */
function create_index(collectionId,req) { return post_(endpoint_(`/collectionGroups/${collectionId}/indexes`),req); }

/**
 * Deletes a composite index.
 *
 * @param {String} collectionId Collection Group to use.
 * @param {String} index_id ID of the index to delete
 * @return {void} If successful, the response body is empty.
 */
function delete_index(collectionId,index_id){ return delete_(endpoint_(`/collectionGroups/${collectionId}`,`/indexes/${index_id}`)); }

/**
 * Gets a composite index.
 *
 * @param {String} collectionId Collection Group to use.
 * @param {String} index_id ID of the index to delete
 * @return {Object} If successful, the response body contains an instance of [Index](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/FieldOperationMetadata#Index).
 */
function get_index(collectionId,index_id){ return get_(endpoint_(`/collectionGroups/${collectionId}`,`/indexes/${index_id}`)); }

/**
 * Lists composite indexes.
 *
 * @param {String} collectionId Collection Group to use.
 * @param {Object} filter Filter to apply. See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.indexes/list#query-parameters
 * @return {Object} If successful, the response body contains data with the following structure: https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.indexes/list#response-body
 */
function list_indexes(collectionId,filter){ return get_(endpoint_(`/collectionGroups/${collectionId}/indexes`,query_(filter))); }
