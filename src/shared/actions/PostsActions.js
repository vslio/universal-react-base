/**
 * Notes actions
 */

import { apiPath, fetch } from 'actions'

/**
 * Action Types
 */
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'

/**
 * Action Creators
 */

/**
 * Action triggered when there's a request for posts
 * @return {Object} Action type
 */
export function getPosts() {
  console.log('requesting posts')
  return {
    type: GET_POSTS,
    promise: fetch(apiPath('/posts'))
  }
}

/**
 * Action triggered when there's a request for a single post
 * @return {Object} Action type
 */
export function getPost(id) {
  console.log('requesting single post')
  return {
    type: GET_POST,
    promise: fetch(apiPath(`/posts/${id}`))
  }
}
