/**
 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use [Operations.GetOperation](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.operations/get#google.longrunning.Operations.GetOperation) or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation#FIELDS.error) value with a [google.rpc.Status.code](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation#Status.FIELDS.code) of 1, corresponding to `Code.CANCELLED`.
 *
 * @param {String} operation The name of the operation resource to be cancelled.
 * @return {void} If successful, the response body is empty.
 */
function cancel_operation(operation) { return post_(endpoint_(`/operations/${operation}:cancel`)); }

/**
 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
 *
 * @param {String} operation The name of the operation resource to be deleted.
 * @return {void} If successful, the response body is empty.
 */
function delete_operation(operation){ return delete_(endpoint_(`/operations/${operation}`)); }

/**
 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
 *
 * @param {String} operation The name of the operation resource.
 * @return {Object} If successful, the response body contains an instance of [Operation](https://firebase.google.com/docs/firestore/reference/rest/Shared.Types/Operation).
 */
function get_operation(operation){ return get_(endpoint_(`/operations/${operation}`)); }

/**
 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
 *
 * @param {Object} filter See https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.operations/list#query-parameters
 * @return {Object} Response structure see https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.operations/list#response-body
 */
function list_operations(filter){ return get_(endpoint_('/operations',query_(filter))); }
