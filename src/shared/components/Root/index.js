/**
 * Root component
 */
import React from 'react'
import Helmet from 'react-helmet'
import style from './root.css'
import Header from 'components/Header'

export default (props) => (
  <div className={style.root}>
    <Helmet title='Homepage' titleTemplate='%s – The Blog' />
    <Header />
    {/*
      Rendering the child components,
      depending on the current route
    */}
    {props.children}
  </div>
)
