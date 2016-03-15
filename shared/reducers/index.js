import { combineReducers } from 'redux'

// Reducer imports
import posts from './PostsReducer'
import notes from './NotesReducer'

const rootReducer = combineReducers({
  posts,
  notes
})

export default rootReducer
