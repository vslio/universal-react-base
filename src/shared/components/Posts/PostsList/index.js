/**
 * PostsList component
 *
 * @description Renders a list of `Post`s
 */
import React, { Component } from 'react'
import Post from '../Post'

export default (props) => (
  <div>
    {
      props.posts.items.map((post) => {
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
