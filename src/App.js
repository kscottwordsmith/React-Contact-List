import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/Contact/:id" component={Contact}/>
          </div>
      </Router>
    )
  }
}

export default App
