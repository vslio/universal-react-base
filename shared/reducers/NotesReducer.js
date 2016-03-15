import {
  REQUEST_NOTES, RECEIVE_NOTES
} from '../actions/NotesActions'

const initialState = {
  notes: []
}

/**
 * Notes Reducers
 */
function notesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NOTES:
      return state
    case RECEIVE_NOTES:
      return {
        ...state,
        items: action.notes
      }
    default:
      return state
  }
}

export default notesReducer
