import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './navigation.css'

class Navigation extends Component {
  render() {
    return (
      <ul className={style.navigation}>
        <li className={style.item}>
          <Link
            to="/"
            className={style.link}
            activeClassName={style.active}
            onlyActiveOnIndex>Home</Link>
        </li>
        <li className={style.item}>
          <Link
            to="/about"
            className={style.link}
            activeClassName={style.active}>About</Link>
        </li>
        <li className={style.itemLogin}>
          <Link
            to="/login"
            className={style.link}
            activeClassName={style.active}>Login</Link>
        </li>
      </ul>
    )
  }
}

export default Navigation
