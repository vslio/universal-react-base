import { combineReducers } from 'redux'

// Reducer imports
import postsReducer from './PostsReducer'
import notesReducer from './NotesReducer'

const rootReducer = combineReducers({
  postsReducer,
  notesReducer
})

export default rootReducer
