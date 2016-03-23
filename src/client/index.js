import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import routes from 'routes'
import reducers from 'reducers';
import configureStore from 'store';

const initialState = JSON.parse(window.__INITIAL_STATE__)
const history = browserHistory
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('root')
)
