/**
 * Posts action creators
 */
import { apiPath, request } from 'actions'

/**
 * Action Creators
 */

/**
 * Action triggered when there's a request for posts
 *
 * @return {Object} Action type
 */
export function getPosts () {
  return {
    type: 'GET_POSTS',
    promise: request.get(apiPath('/posts'))
  }
}

/**
 * Action triggered when there's a request for a single post
 *
 * @return {Object} Action type
 */
export function getPost (post) {
  return {
    type: 'GET_POST',
    promise: request.get(apiPath(`/posts/${post.id}`))
  }
}
