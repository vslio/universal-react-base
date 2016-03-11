import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/posts'
import Post from '../Post'
import style from './posts.css'

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchPosts())
  }

  constructHeader() {
    return (
      <header>
        <h3 className={style.heading}>Posts</h3>
        <span className={style.description}>Blog posts from our members.</span>
      </header>
    )
  }

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
    const header = this.constructHeader()
    const posts = this.constructPosts()

    return (
      <div>
        {header}
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

Posts = connect(mapStateToProps)(Posts)

export default Posts
