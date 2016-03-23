import { combineReducers } from 'redux'

import posts from './PostsReducer'
import notes from './NotesReducer'

const reducers = combineReducers({
  posts,
  notes
})

export default reducers
