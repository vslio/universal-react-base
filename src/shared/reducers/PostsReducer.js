const initialState = {
  items: [],
  post: {}
}

/**
 * Posts Reducers
 */
export default function postsReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        items: action.res.data
      }
    case 'GET_POST':
      return {
        ...state,
        post: action.res.data
      }
    default:
      return state
  }
}
