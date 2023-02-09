/**
 * Firestore endpoint
 */
const ENDPOINT = 'https://firestore.googleapis.com/v1/';
/**
 * JSON content type
 */
const CONTENT_TYPE_JSON = 'application/json';

/**
 * Init the api
 *
 * @param {string} project_id Your Cloud project id
 * @param {string} oauth_token Oauth token from ScriptApp.getOAuthToken().
 * @param {string} db The database to use. Defaults to '(default)'
 * @return {Object} returns this
 */
function init(project_id,token,db='(default)'){
  this.project_id = project_id;
  this.token = token;
  this.database = db;
  return this;
}
