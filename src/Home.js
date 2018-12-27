import React, { Component } from 'react'
import Users from './UserContent.json'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const nameArr = Users.map((user) => (
    <li key={'peeps-name-list' + user.id}>
      <Link to={"/Contact/" + user.id}>
        {capitalizeFirstLetter(user.name.first)} {capitalizeFirstLetter(user.name.last)}
      </Link>
    </li>
  ))
  
  function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1 id="listViewHead">My Peeps</h1>
                <ul id="peepsList">
                    {nameArr}
                </ul>
            </div>
        )
    }
}

export default Home