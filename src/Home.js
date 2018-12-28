import React, { Component } from 'react'
import Users from './UserContent.json'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Home.css'

const nameArr = Users.map((user) => (
    <li key={'peeps-name-list' + user.id} className="peepname">
      <Link to={"/Contact/" + user.id}>
        <img src={user.picture.thumbnail} /> {user.name.first} {user.name.last}
      </Link>
    </li>
  ))

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div id="listViewHead">My Peeps</div>
                <ul id="peepsList">
                    {nameArr}
                </ul>
            </div>
        )
    }
}

export default Home