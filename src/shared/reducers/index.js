import { combineReducers } from 'redux'

import posts from './PostsReducer'

const reducers = combineReducers({
  posts
})

export default reducers
