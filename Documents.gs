// @ts-nocheck
/**
 * Gets multiple documents.
 * Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
 *
 * @param {Object} docs See structure of body at https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/batchGet#request-body
 * @return {Object} If successful, the response body contains data with the following structure: The streamed response for (Firestore.BatchGetDocuments](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/batchGet#google.firestore.v1.Firestore.BatchGetDocuments).
 */
function batchGet(docs) { return post_(endpoint_('/documents:batchGet'),docs); }

/**
 * Applies a batch of write operations.
 * The documents.batchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the [BatchWriteResponse](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/batchWrite#body.BatchWriteResponse) for the success status of each write.
 * If you require an atomically applied set of writes, use [documents.commit](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/commit#google.firestore.v1.Firestore.Commit) instead.
 *
 * @param {Object} req For the body structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/batchWrite#request-body
 * @return {Object} For the response structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/batchWrite#response-body
 */
function batchWrite(req){ return post_(endpoint_('/documents:batchWrite'),req); }

/**
 * Starts a new transaction.
 *
 * @param {Object} tx For the body structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/beginTransaction#request-body
 * @return {String} The transaction that was started. A base64-encoded string.
 */
function beginTransaction(tx){ return post_(endpoint_('/documents:beginTransaction'),tx).transaction; }

/**
 * Commits a transaction, while optionally updating documents.
 *
 * @param {Object} req Request structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/commit#request-body
 * @return {Object} Response structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/commit#response-body
 */
function commit(req){ return post_(endpoint_('/documents:commit'),req); }

/**
 * Creates a new document.
 *
 * @param {String} doc_path See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/createDocument.
 * @param {String} collection_id Required. The collection ID, relative to parent, to list. For example: chatrooms.
 * @param {Object} doc The request body contains an instance of [Document](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document).
 * @param {String} doc_id The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
 * @param {Object} mask See https://firebase.google.com/docs/firestore/reference/rest/v1/DocumentMask
 * @return {Object} If successful, the response body contains an instance of [Document](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document).
 */
function createDocument(doc_path,collection_id,doc,doc_id,mask){
  let query_params = [], query_stirng = '';
  if(doc_id){ query_params.push(`documentId=${doc_id}`); }
  if(mask){ query_params.push('mask='.concat(JSON.stringify(mask)))}
  if( query_params.length ){ query_stirng = '?'.concat(query_params.join('&')); }
  return post_(endpoint_('documents',doc_path,`/${collection_id}`,query),doc);
}

/**
 * Deletes a document.
 *
 * @param {String} name Required. The resource name of the Document to delete.
 * @param {Object} precondition An optional precondition on the document. The request will fail if this is set and not met by the target document.
 * @return {void} If successful, the response body is empty.
 */
function deleteDocument(name,precondition){
  let query = precondition ? '?'.concat('currentDocument=',JSON.stringify(precondition)) : '';
  return delete_(endpoint_(`/documents/${name}`,query));
}

/**
 * Gets a single document.
 *
 * @param {String} name Required. The resource name of the Document to get.
 * @param {Object} params See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/get#query-parameters
 * @return {Object} If successful, the response body contains an instance of [Document](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document).
 */
function getDocument(name,params){ return get_(endpoint_(`/documents/${name}`,query_(params))); }

/**
 * Lists documents.
 *
 * @param {String} parent Required. The parent resource name.
 * @param {String} collectionId Optional. The collection ID, relative to parent, to list.
 * @param {Object} params See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/list#query-parameters
 * @return {Object} If successful, the response body contains an instance of [ListDocumentsResponse](https://firebase.google.com/docs/firestore/reference/rest/v1/ListDocumentsResponse).
 */
function listDocuments(parent,collectionId,params){ return get_(endpoint_('/documents',path_(parent),collectionId ? `/${collectionId}` : '',query_(params))); }

/**
 * Lists all the collection IDs underneath a document.
 *
 * @param {String} parent Required. The parent document.
 * @param {Object} req Request body structure can be seen: https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/listCollectionIds#request-body
 * @return {Object} If successful, the response body contains data with the following structure: The response from [Firestore.ListCollectionIds](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/listCollectionIds#google.firestore.v1.Firestore.ListCollectionIds).
 */
function listCollectionIds(parent,req){ return post_(endpoint_('/documents',path_(parent),':listCollectionIds'),req); }

/**
 * Lists documents.
 *
 * @param {String} parent Required. The parent resource name.
 * @param {String} Optional. The collection ID, relative to parent, to list. For example: chatrooms or messages. This is optional, and when not provided, Firestore will list documents from all collections under the provided parent.
 * @param {Object} params See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/listDocuments#query-parameters
 * @return {Object} If successful, the response body contains an instance of [ListDocumentsResponse](https://firebase.google.com/docs/firestore/reference/rest/v1/ListDocumentsResponse).
 */
function listDocuments(parent,collectionId=' ',params){ return get_(endpoint_('/documents',path_(parent),`/${collectionId}`, query_(params))); }

/**
 * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by documents.runQuery as starting/end points for the query results.
 *
 * @param {Object} req Request structure see: https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/partitionQuery#request-body
 * @return {Object} If successful, the response body contains data with the following structure: The response for [Firestore.PartitionQuery](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/partitionQuery#google.firestore.v1.Firestore.PartitionQuery).
 */
function partitionQuery(req){ return post_(endpoint_('/documents:partitionQuery'),req); }

/**
 * Updates or inserts a document.
 *
 * @param {String} name The resource name of the document.
 * @param {Object} params See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/patch#query-parameters
 * @param {Object} req The request body contains an instance of [Document](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document).
 * @return {Object} If successful, the response body contains an instance of [Document](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document).
 */
function patchDocument(name,params,req){ return patch_(endpoint_('/documents',path_(name),query_(params)),req); }

/**
 * Rolls back a transaction.
 *
 * @param {String} transaction Required. The transaction to roll back. A base64-encoded string.
 * @return {void} If successful, the response body is empty.
 */
function rollback(transaction){ return post_(endpoint_('/documents:rollback'),{transaction}); }

/**
 * Runs an aggregation query.
 * Rather than producing [Document](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document) results like [Firestore.RunQuery](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/runQuery#google.firestore.v1.Firestore.RunQuery), this API allows running an aggregation to produce a series of [AggregationResult](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/runAggregationQuery#AggregationResult) server-side.
 *
 * @param {String} parent Required. The parent resource name.
 * @param {Object} req Structure of request see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/runAggregationQuery#request-body
 * @return {Object} Returns [Firestore.RunAggregationQuery](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/runAggregationQuery#google.firestore.v1.Firestore.RunAggregationQuery).
 */
function runAggregationQuery(parent,req){ return post_(endpoint_('/documents',path_(parent),':runAggregationQuery'), req); }

/**
 * Runs a query.
 *
 * @param {String} parent Required. The parent resource name.
 * @param {Object} req Request structure seen https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/runQuery#request-body
 * @return {Object} Response structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/runQuery#response-body
 */
function runQuery(parent,req){ return post_(endpoint_('/documents',path_(parent),':runQuery'),req); }
