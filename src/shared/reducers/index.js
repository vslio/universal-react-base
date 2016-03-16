import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Reducer imports
import posts from './PostsReducer'
import notes from './NotesReducer'

const rootReducer = combineReducers({
  posts,
  notes,
  routing: routerReducer
})

export default rootReducer
