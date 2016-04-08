import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './components/Root'
import Posts from './components/Posts'
import Home from './components/Home'
import SinglePost from './components/SinglePost'
import Login from './components/Login'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/posts" component={Posts}></Route>
    <Route path="/post/:id" component={SinglePost}></Route>
    <Route path="/login" component={Login}></Route>
  </Route>
)
