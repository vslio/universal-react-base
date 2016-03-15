/**
 * SinglePost component, rendered @ `/post/:id`
 *
 * @description Displays a single post
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchPost } from '../../actions/PostsActions'
import style from './singlePost.css'

class SinglePost extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    // Trigger a fetch to the server when the component is rendered
    dispatch(fetchPost(this.props.routeParams.id))
  }

  render() {
    return (
      <div>
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

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  }
}

/**
 * Essential method to bridge React and Redux.
 *
 * `connect` allows the component to subscribe to Redux store
 * updates, effectively triggering re-renders when there are
 * changes. Additionally, it injects the `dispatch` method
 * used in `componentDidMount()`
 */
SinglePost = connect(mapStateToProps)(SinglePost)

export default SinglePost
