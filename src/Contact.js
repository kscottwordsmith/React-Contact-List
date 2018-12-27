import React, { Component } from 'react'
import Users from './UserContent.json'
import { BrowserRouter as Router } from 'react-router-dom'

class Contact extends Component {
    state = {
        img: '',
        fname: '',
        lname: '',
        email: '',
        cell: 0,
        city: '',
        st: ''
    }
    backButton = (e) => {
        this.props.history.goBack()
    }
    componentDidMount() {
        const person = Users.find(per => {
            return per.id == this.props.match.params.id
        })
        this.setState({
            img: person.picture.thumbnail,
            fname: person.name.first,
            lname: person.name.last,
            email: person.email,
            cell: person.cell,
            city: person.location.city,
            st: person.location.state
        })
    }
    render() {
        return (
        <Router>
            <div>
                <button id="backbutton" onClick={this.backButton}>Back</button>
                <ul>
                    <li><img src={this.state.img} alt={this.state.fname + " Image"} /></li>
                    <li>{this.state.fname} {this.state.lname}</li>
                    <li>{this.state.email}</li>
                    <li>{this.state.cell}</li>
                    <li>{this.state.city}</li>
                    <li>{this.state.st}</li>
                </ul>
            </div>
        </Router>
        )
    }
}

export default Contact