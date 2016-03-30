import { GET_POSTS, GET_POST } from 'actions/PostsActions'

const initialState = {
  items: [],
  post: {}
}

/**
 * Posts Reducers
 */
function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.posts
      }
    case GET_POST:
      return {
        ...state,
        post: action.post
      }
    default:
      return state
  }
}

export default postsReducer
