import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import store from '../store';
import axios from 'axios';
import './Form.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            date: "",
            noOfTrucks: 0,
            submitted: false,
            APISucces: ''
        };
    }

    onChange = event => {
        if (event.target.name === 'noOfTrucks') {
            this.setState({ [event.target.name]: (event.target.value < 0) ? 0 : event.target.value });
            return;
        }

        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const { firstName, lastName, date, noOfTrucks } = this.state;
        store.dispatch({ type: 'ADD_ORDER', payload: { firstName, lastName, date, noOfTrucks } });
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                // handle success
                console.log(response);
                self.setState({ APISucces: 'Test API Call Was Successful!' });
                self.setState({ submitted: true })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        const { firstName, lastName, date, noOfTrucks, submitted } = this.state;
        if (submitted) {
            return <Redirect to='/receipt' />
        }
        return (
            <div className="container">
                <h2>Order Form</h2>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label>First Name: </label>
                    <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.onChange} className="firstName" required />
                    <label>Last Name: </label>
                    <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.onChange} className="lastName" required />
                    <label>Date: </label>
                    <input type="date" name="date" placeholder="Date" value={date} onChange={this.onChange} className="date" required />
                    <label>Number of Trucks: </label>
                    <input type="number" name="noOfTrucks" placeholder="Trucks Number" value={noOfTrucks} onChange={this.onChange} className="noOfTrucks" min="1" max="5" />
                    <button type="submit">Submit</button>
                </form>
                {this.state.APISucces === '' ? null : alert(this.state.APISucces)}
            </div>
        );
    }
}

export default Form;