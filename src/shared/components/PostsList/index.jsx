/**
 * Posts component, rendered @ `/posts`
 */
import React, { Component } from 'react'
import Post from 'components/Post'

class PostsList extends Component {
  render() {
    return (
      <div>
        {
          this.props.posts.items.map((post) => {
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
      </div>
    )
  }
}

export default PostsList
