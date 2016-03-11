import { combineReducers } from 'redux'

// Reducer imports
import posts from './posts'
import notes from './notes'

const rootReducer = combineReducers({
  posts,
  notes
})

export default rootReducer
