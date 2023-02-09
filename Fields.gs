/**
 * Gets the metadata and configuration for a [Field](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.fields#Field).
 *
 * @param {string} collectionId Collection Group to use
 * @param {string} field Field to look up
 * @return {Object} If successful, the response body contains an instance of Field.
 */
function get_field(collectionId,field) { return get_(endpoint_(`/collectionGroups/${collectionId}`,`/fields/${field}`)); }

/**
 * Lists the field configuration and metadata for this database.
 * Currently, [FirestoreAdmin.ListFields](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.fields/list#google.firestore.admin.v1.FirestoreAdmin.ListFields) only supports listing fields that have been explicitly overridden.
 * To issue this query, call [FirestoreAdmin.ListFields](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.fields/list#google.firestore.admin.v1.FirestoreAdmin.ListFields) with the filter set to `indexConfig.usesAncestorConfig:false`.
 *
 * @param {String} collectionId Collection Group to use
 * @param {Object} filter [Query Paramaters](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.fields/list#query-parameters)
 * @return {Object} If successful, the response body contains data with the following structure: https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.fields/list#response-body
 */
function list_fields(collectionId,filter){ return get_(endpoint_(`/collectionGroups/${collectionId}/fields`,query_(filter))); }

/**
 * Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to [FirestoreAdmin.UpdateField](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.fields/patch#google.firestore.admin.v1.FirestoreAdmin.UpdateField) should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "indexConfig" }`.

This call returns a [google.longrunning.Operation](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation) which may be used to track the status of the field update. The metadata for the operation will be the type [FieldOperationMetadata](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/FieldOperationMetadata).

To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{databaseId}/collectionGroups/__default__/fields/*`.
 *
 * @param {String} collectionId Collection Group to use
 * @param {String} field The field to patch
 * @param {String[]} mask A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
 * This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".
 * @param {Object} req The request body contains an instance of [Field](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.collectionGroups.fields#Field).
 * @return {Object} If successful, the response body contains an instance of [Operation](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation).
 */
function patch_fields(collectionId,field,mask,req){ return patch_(endpoint_(`/collectionGroups/${collectionId}`,`/fields/${field}`,mask ? '?'.concat(mask.join(',')) : ''),req); }
