/**
 * Home component, rendered @ `/`
 */
import React from 'react'
import style from './home.css'

const Home = () => (
  <header>
    <h3 className={style.heading}>Homepage</h3>
    <span className={style.description}>Nothing to see here yet.</span>
  </header>
)

export default Home
