/**
 * Notes actions
 */
import { apiPath, fetch } from '../actions'

/**
 * Action Creators
 */

/**
 * Action triggered when there's a request for notes
 * @return {Object} Action type
 */
export function getNotes() {
  return {
    type: 'GET_NOTES',
    promise: fetch(apiPath('/notes'))
  }
}
