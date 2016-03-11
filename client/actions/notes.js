import { apiPath, fetch } from '../actions'

/**
 * Action Types
 */
export const REQUEST_NOTES = 'REQUEST_NOTES'
export const RECEIVE_NOTES = 'RECEIVE_NOTES'

/**
 * Action Creators
 */
function requestNotes() {
  return {
    type: REQUEST_NOTES
  }
}

function receiveNotes(json) {
  return {
    type: RECEIVE_NOTES,
    posts: json
  }
}

export function fetchNotes() {
  return dispatch => {
    dispatch(requestNotes())
    return fetch(apiPath('/notes'))
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
  }
}
