/**
 * Generic constants and helper functions for the actions
 */
const apiUrl = 'http://front.the-dots.com:3001'

export function apiPath(path) {
  return apiUrl + path
}

// Exposing `isomorphic-fetch` to all the actions
export request from 'axios'
