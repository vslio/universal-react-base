/**
 * The app state tree needs to be immutable. I will need to convert
 * it using immutableJS. Check this for immutability later on:
 *
 * https://github.com/arsich/react-redux-cats/blob/master/app/reducers/cats.js
 */

import {
  REQUEST_POSTS, RECEIVE_POSTS,
  REQUEST_POST, RECEIVE_POST
} from '../actions/posts'

const initialState = {
  items: [],
  post: {}
}

/**
 * Posts Reducers
 */
function posts(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVE_POSTS:
      return {
        ...state,
        items: action.posts
      }
    case REQUEST_POST:
      return state
    case RECEIVE_POST:
      return {
        ...state,
        post: action.post
      }
    default:
      return state
  }
}

export default posts
