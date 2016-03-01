import React, { Component } from 'react'
// import style from './app.css'

// Importing child components
import Navigation from '../../Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to The Dots</h1>
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
