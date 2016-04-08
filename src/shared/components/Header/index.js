/**
 * Header component
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import Navigation from 'components/Navigation';
import style from './header.css'

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <h1 className={style.heading}>_The Blog</h1>
        <Navigation />
      </header>
    )
  }
}

export default Header
