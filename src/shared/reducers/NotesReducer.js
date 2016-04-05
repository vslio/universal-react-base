const initialState = {
  notes: []
}

/**
 * Notes Reducers
 */
function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_NOTES':
      return state
    default:
      return state
  }
}

export default notesReducer
