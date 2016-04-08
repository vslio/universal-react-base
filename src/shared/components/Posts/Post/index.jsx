/**
 * Post component
 *
 * @description Used in `PostsList` component to render each
 *              post, after a response from the server.
 */
import React from 'react'
import { Link } from 'react-router'
import style from './post.css'

export default (props) => (
  <div className={style.post}>
    <h5 className={style.title}>
      <Link
        to={`/post/${props.id}`}
        className={style.link}
        activeClassName={style.active}
        onlyActiveOnIndex>{props.title}</Link>
    </h5>
    <em className={style.author}> by {props.author}</em>
    <p className={style.text}>{props.text}</p>
  </div>
)
