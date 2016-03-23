import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './containers/Root'
import Home from './components/Home'
import About from './components/About'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import Login from './components/Login'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About}></Route>
    <Route path="/posts" component={Posts}></Route>
      <Route path="/post/:id" component={SinglePost}></Route>
    <Route path="/login" component={Login}></Route>
  </Route>
)

