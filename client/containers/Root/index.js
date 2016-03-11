import React, { Component } from 'react'
import style from './root.css'

// Importing child components
import Navigation from '../../components/Navigation';

class App extends Component {
  render() {
    return (
      <div className={style.root}>
        <header className={style.header}>
          <h1 className={style.heading}>The Dots</h1>
          <Navigation />
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
