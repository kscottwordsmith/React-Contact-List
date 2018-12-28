import React, { Component } from 'react'
import Users from './UserContent.json'
import { BrowserRouter as Router } from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import './Contact.css'

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
            img: person.picture.large,
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
            <div>
                <button id="backbutton" onClick={this.backButton}><i className="fa fa-arrow-left"></i></button>
                <ul id="contactInfo">
                    <li id="contactImg"><img src={this.state.img} alt={this.state.fname + " Image"} /></li>
                    <li className="needsCaps contactText"><i class="fa fa-user"></i> {this.state.fname} {this.state.lname}</li>
                    <li className="contactText"><i className="fa fa-envelope"></i> {this.state.email}</li>
                    <li className="contactText"><i className="fa fa-mobile"></i> {this.state.cell}</li>
                    <li className="needsCaps contactText"><i className="fa fa-globe"></i> {this.state.city}, {this.state.st}</li>
                </ul>
            </div>
        )
    }
}

export default Contact