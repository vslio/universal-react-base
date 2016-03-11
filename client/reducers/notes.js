/**
 * The app state tree needs to be immutable. I will need to convert
 * it using immutableJS. Check this for immutability later on:
 *
 * https://github.com/arsich/react-redux-cats/blob/master/app/reducers/cats.js
 */

import {
  REQUEST_NOTES, RECEIVE_NOTES
} from '../actions/notes'

const initialState = {
  notes: []
}

/**
 * Notes Reducers
 */
function notes(state = initialState, action) {
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

export default notes
