import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/core/App'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById('root')
)
