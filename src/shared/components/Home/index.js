/**
 * Home component
 */
import React from 'react'
import Helmet from 'react-helmet'
import style from './home.css'

export default () => (
  <header>
    <Helmet title='Homepage' />
    <h3 className={style.heading}>Homepage</h3>
    <span className={style.description}>This is the homepage.</span>
  </header>
)
