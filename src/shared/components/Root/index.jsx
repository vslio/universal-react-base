/**
 * Root component
 * @notes Exposing it as a stateless function instead of a `class`.
 *        For more information check the following URL:
 *        https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
 */
import React, { Component } from 'react'
import style from './root.css'

// Importing child components
import Navigation from 'components/Navigation';

const Root = (props) => (
  <div className={style.root}>
    <header className={style.header}>
      <h1 className={style.heading}>The Dots</h1>
      <Navigation />
    </header>
    {/*
      Rendering the child components,
      depending on the current route
    */}
    {props.children}
  </div>
)

export default Root
