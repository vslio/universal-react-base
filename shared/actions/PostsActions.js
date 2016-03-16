/**
 * Notes actions
 */

import { apiPath, fetch } from '../actions'

/**
 * Action Types
 */
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

/**
 * Action Creators
 */

/**
 * Action triggered when there's a request for posts
 * @return {Object} Action type
 */
function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

/**
 * Action triggered when there's a response from
 * the server, after a `fetch()` for the posts
 * @param  {JSON} json Response body from the server
 * @return {Object}    Action type and json
 */
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json
  }
}



/**
 * Action triggered when there's a request for a single post
 * @return {Object} Action type
 */
function requestPost() {
  return {
    type: REQUEST_POST
  }
}

/**
 * Action triggered when there's a response from the
 * server, after a `fetch()` for the single post
 * @param  {JSON} json Response body from the server
 * @return {Object}    Action type and json
 */
function receivePost(json) {
  return {
    type: RECEIVE_POST,
    post: json
  }
}

/**
 * Method called when we request the posts
 * @return {Function} Dispatch
 */
export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(apiPath('/posts'))
      .then(response => response.json())
      .then(json => {
        console.log('Got response from the server. The JSON is here.')
        dispatch(receivePosts(json))
      })
  }
}

/**
 * Method called when we request a single post
 * @param  {Number} id The post `id`
 * @return {Function}  Dispatch
 */
export function fetchPost(id) {
  return dispatch => {
    dispatch(requestPost())
    return fetch(apiPath(`/posts/${id}`))
      .then(response => response.json())
      .then(json => dispatch(receivePost(json)))
  }
}
