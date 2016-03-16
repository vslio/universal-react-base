import {
  REQUEST_POSTS, RECEIVE_POSTS,
  REQUEST_POST, RECEIVE_POST
} from '../actions/PostsActions'

const initialState = {
  items: [],
  post: {}
}

/**
 * Posts Reducers
 */
function postsReducer(state = initialState, action) {
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

export default postsReducer
