/**
 * Notes actions
 */

import { apiPath, fetch } from '../actions'

/**
 * Action Types
 */
export const REQUEST_NOTES = 'REQUEST_NOTES'
export const RECEIVE_NOTES = 'RECEIVE_NOTES'

/**
 * Action Creators
 */

/**
 * Action triggered when there's a request for notes
 * @return {Object} Action type
 */
function requestNotes() {
  return {
    type: REQUEST_NOTES
  }
}

/**
 * Action triggered when there's a response from
 * the server, after a `fetch()` for the notes
 * @param  {JSON} json Response body from the server
 * @return {Object}    Action type and json
 */
function receiveNotes(json) {
  return {
    type: RECEIVE_NOTES,
    posts: json
  }
}

/**
 * Method called when we request the notes
 * @return {Function} Dispatch
 */
export function fetchNotes() {
  return dispatch => {
    dispatch(requestNotes())
    return fetch(apiPath('/notes'))
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
  }
}
