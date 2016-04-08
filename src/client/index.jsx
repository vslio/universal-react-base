/**
 * Master bootstrap file for the client-side
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from 'routes'
import reducers from 'reducers'
import configureStore from 'store'

// The initial state is generated on the server-side
// and appended in a script tag
const initialState = JSON.parse(window.__INITIAL_STATE__)
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
