/**
 * Header component
 */
import React from 'react'
import Navigation from 'components/Navigation'
import style from './header.css'

export default () => (
  <header className={style.header}>
    <h1 className={style.heading}>The Blog_</h1>
    <Navigation />
  </header>
)
