/**
 * Home component, rendered @ `/`
 */
import React from 'react'
import style from './home.css'

const Home = () => (
  <header>
    <h3 className={style.heading}>Homepage</h3>
    <span className={style.description}>This is the homepage.</span>
  </header>
)

export default Home
