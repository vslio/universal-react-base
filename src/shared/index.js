import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './routes'
import configureStore from './store/configureStore'

const store = configureStore()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
