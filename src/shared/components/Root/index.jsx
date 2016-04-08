/**
 * Root component
 */
import React, { Component } from 'react'
import style from './root.css'
import Header from 'components/Header'

const Root = (props) => (
  <div className={style.root}>
    <Header />
    {/*
      Rendering the child components,
      depending on the current route
    */}
    {props.children}
  </div>
)

export default Root
