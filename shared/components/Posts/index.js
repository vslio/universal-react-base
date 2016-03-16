/**
 * Posts component, rendered @ `/posts`
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/PostsActions'
import Post from '../Post'
import style from './posts.css'

class Posts extends Component {
  componentWillMount() {
    const { dispatch } = this.props

    dispatch(fetchPosts())
  }

  /**
   * Method to construct the <Posts> element which
   * is composed of multiple <Post> elements. I opted
   * to abstract this method, in order to unclutter the
   * `render` method below.
   */
  constructPosts() {
    return this.props.posts.items.map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          author={post.author}
          title={post.title}
          text={post.text}
        />
      )
    })
  }

  render() {
    const posts = this.constructPosts()

    console.log('the posts are rendered', posts)

    return (
      <div>
        <header>
          <h3 className={style.heading}>Posts</h3>
          <span className={style.description}>Blog posts from our members.</span>
        </header>
        <div>
          {posts}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
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
Posts = connect(mapStateToProps)(Posts)

export default Posts
