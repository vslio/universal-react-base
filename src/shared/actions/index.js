/**
 * Constants and helper functions for the actions
 */
const apiUrl = 'http://localhost:3001'

export function apiPath(path) {
  return apiUrl + path
}

// Exposing `axios` to all the actions
export request from 'axios'
