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
function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json
  }
}

function requestPost() {
  return {
    type: REQUEST_POST
  }
}

function receivePost(json) {
  return {
    type: RECEIVE_POST,
    post: json
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(apiPath('/posts'))
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export function fetchPost(id) {
  return dispatch => {
    dispatch(requestPost())
    return fetch(apiPath(`/posts/${id}`))
      .then(response => response.json())
      .then(json => dispatch(receivePost(json)))
  }
}
