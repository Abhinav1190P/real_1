import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './components/routes'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes/>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
