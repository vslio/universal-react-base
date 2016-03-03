import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Importing the components
import App from './components/core/Root'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={Login}></Route>
    </Route>
  </Router>
)
