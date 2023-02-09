/**
 * Fetch headers internal_
 *
 * @return {Object} Headers
 */
function headers_(){
  if( !this.token ){ throw 'Please initialize this API with your Oauth token. User init(project_id,token)'; }
  return { Authorization: 'Bearer '.concat(this.token), Accept: CONTENT_TYPE_JSON };
}

/**
 * post to the api internal_
 *
 * @param {string} url The URL to fetch
 * @param {Object} body Payload to send
 * @return {Object} parsed response
 */
function post_(url,body){
  let fetch = UrlFetchApp.fetch(url,{
    method: 'post', contentType: CONTENT_TYPE_JSON, payload: body ? JSON.stringify(body) : '', headers: headers_()
  });
  return JSON.parse(fetch.getContentText());
}

/**
 * get resource from api internal_
 *
 * @param {string} url The URL to fetch
 * @return {Object} parsed response
 */
function get_(url){
  Logger.log(url)
  let fetch = UrlFetchApp.fetch(url,{
    method: 'get', contentType: CONTENT_TYPE_JSON, headers: headers_(),muteHttpExceptions: true
  });
  Logger.log(fetch.getContentText())
  return JSON.parse(fetch.getContentText());
}

/**
 * patch resource in api internal_
 *
 * @param {string} url The URL to fetch
 * @param {Object} body Payload to send
 * @return {Object} Parsed response
 */
function patch_(url,body){
  let fetch = UrlFetchApp.fetch(url,{
    method: 'patch', contentType: CONTENT_TYPE_JSON, payload: JSON.stringify(body), headers: headers_(), muteHttpExceptions: true
  });
  return JSON.parse(fetch.getContentText());
}

/**
 * delete resource from api internal_
 *
 * @param {string} url The URL to fetch
 * @return {void} returns empty response
 */
function delete_(url){
  let fetch = UrlFetchApp.fetch(url,{
    method: 'delete', headers: headers_()
  });
  return fetch.getContentText();
}

/**
 * Create endpoint URL
 *
 * @param {String[]} suffix Suffix to append
 * @return {String} the URL to fetch
 */
const endpoint_ = (...suffix) => ENDPOINT.concat(`projects/${this.project_id}`,`/databases/${this.database}`,...suffix);

/**
 * Build query string
 *
 * @param {Object} params The params to process
 * @return {String} Serialized query
 */
const query_ = params => params ? '?'.concat(Object.keys(params).map( k => `${k}=${params[k]}`).join('&')) : '';

/**
 * Build document path
 *
 * @param {String} parent Parent of the documents
 * @return {String} Processed path
 */
const path_ = parent => parent ? '/'.concat(parent) : '';
