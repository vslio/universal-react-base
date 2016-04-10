/**
 * Navigation component
 *
 * @description This is the main navigation component of the app.
 *              It's rendered on all pages and it's part of the
 *              `Root` component
 */
import React from 'react'
import { Link } from 'react-router'
import style from './navigation.css'

export default () => (
  <ul className={style.navigation}>
    <li className={style.item}>
      <Link
        to='/'
        className={style.link}
        activeClassName={style.active}
        onlyActiveOnIndex>Home</Link>
    </li>
    <li className={style.item}>
      <Link
        to='/posts'
        className={style.link}
        activeClassName={style.active}>Posts</Link>
    </li>
    <li className={style.itemLogin}>
      <Link
        to='/login'
        className={style.link}
        activeClassName={style.active}>Login</Link>
    </li>
  </ul>
)
