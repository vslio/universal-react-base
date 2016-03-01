import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Importing the components
import App from './components/core/App'
import Home from './components/Home'
import About from './components/About'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About}></Route>
    </Route>
  </Router>
)
