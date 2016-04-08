/**
 * Post component
 * @description Used in `PostsList` component to render each
 *              post, after a response from the server.
 */
import React from 'react'
import { Link } from 'react-router'
import style from './post.css'

const Post = ({ id, author, title, text }) => (
  <div className={style.post}>
    <h5 className={style.title}>
      <Link
        to={`/post/${id}`}
        className={style.link}
        activeClassName={style.active}
        onlyActiveOnIndex>{title}</Link>
    </h5>
    <em className={style.author}> by {author}</em>
    <p className={style.text}>{text}</p>
  </div>
)

export default Post
