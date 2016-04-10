/**
 * SinglePost component, rendered @ `/post/:id`
 *
 * @description Displays a single post
 */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as PostsActions from 'actions/PostsActions'
import style from './singlePost.css'

class SinglePost extends Component {
  // Action dispatched on the server-side, when
  // we're on this route. This essentially triggers
  // a call to the API and waits for the response
  // before it gets rendered.
  static needs = [
    PostsActions.getPost
  ]

  componentDidMount() {
    this.props.dispatch(
      PostsActions.getPost({ id: this.props.routeParams.id })
    )
  }

  render() {
    return (
      <div>
        <Helmet title='Post' />
        <header className={style.header}>
          <h3 className={style.title}>{this.props.post.title}</h3>
          <em className={style.author}>by {this.props.post.author}</em>
          <Link to="/posts" className={style.close}>&larr; BACK TO POSTS</Link>
        </header>
        <p className={style.text}>{this.props.post.text}</p>
      </div>
    )
  }
}

/**
 * Essential method to bridge React and Redux.
 *
 * `connect` allows the component to subscribe to Redux store
 * updates, effectively triggering re-renders when there are
 * changes. Additionally, it injects the `dispatch` method
 * in `props`
 */
export default connect(
  state => ({ post: state.posts.post })
)(SinglePost)
