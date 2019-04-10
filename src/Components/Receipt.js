import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './Receipt.css';

class Receipt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            APISucces: '',
            submitted: false
        };
    }

    componentDidMount() {
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                // handle success
                console.log(response);
                self.setState({ APISucces: 'Successful!' });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    clicked = e => {
        e.preventDefault();
        this.setState({ submitted: true })
    }

    render() {
        const { firstName, lastName, date, noOfTrucks } = this.props.order;
        const receiptAmount = 50 * noOfTrucks;
        if (this.state.submitted) {
            return <Redirect to='/' />;
        }
        return (
            <div className="container">
                <h2 className="Receipt">Your Receipt</h2>
                <p>First Name: <em>{firstName}</em></p>
                <p>Last Name: <em>{lastName}</em></p>
                <p>Date: <em>{date}</em></p>
                <p>Number of Trucks: <em>{noOfTrucks}</em></p>
                <p>Receipt Amount: <em>{receiptAmount}$</em></p>
                <button onClick={e => this.clicked(e)}>Make Another Order</button>
                {this.state.APISucces === '' ? null : alert(this.state.APISucces)}
            </div>
        );
    }
}

const mapStateToProps = (RootReducer) => RootReducer;
export default connect(mapStateToProps, {})(Receipt);