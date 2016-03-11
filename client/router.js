import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Importing the components
import Root from './containers/Root'
import Home from './components/Home'
import About from './components/About'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import Login from './components/Login'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About}></Route>
      <Route path="/posts" component={Posts}></Route>
        <Route path="/post/:id" component={SinglePost}></Route>
      <Route path="/login" component={Login}></Route>
    </Route>
  </Router>
)
