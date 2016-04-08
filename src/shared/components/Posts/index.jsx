/**
 * Posts container
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import style from './posts.css'
import PostsList from './PostsList'
import * as PostsActions from 'actions/PostsActions'

class Posts extends Component {
  static needs = [
    PostsActions.getPosts
  ]

  componentDidMount() {
    this.props.dispatch(PostsActions.getPosts())
  }

  render() {
    const { posts, dispatch } = this.props

    return (
      <div>
        <header>
          <h3 className={style.heading}>Posts</h3>
          <span className={style.description}>Blog posts from our members.</span>
        </header>
        <PostsList
          posts={posts}
          {...bindActionCreators(PostsActions, dispatch)}
        />
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
Posts = connect(
  state => ({ posts: state.posts })
)(Posts)

export default Posts
