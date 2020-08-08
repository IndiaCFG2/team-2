import React, { Component } from 'react';
import { db } from '../firebase';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class ProfileNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userId: '',
            address: '',
            type: ''
        }
    }

    componentDidMount() {
        console.log(this.props.location);
        this.setState({
            userName: this.props.location.state.details.userName,
            userEmail: this.props.location.state.details.userEmail,
            userId: this.props.location.state.details.userId
        })
    }

    udpateAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    udpateType = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    onSubmit = () => {
        db.collection('auth')
            .doc(this.state.userId)
            .set({
                type: this.state.type,
                address: this.state.address,
                displayName: this.state.userName
            })
            .then(() => {
                this.props.history.push('/chat');
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form className="form-signin">

                        <label for="inputEmail" className="sr-only">Address</label>
                        <input type="address" id="inputAddress" value={this.state.address} className="form-control"
                            placeholder="Address" onChange={this.udpateAddress} required autofocus />
                        <label for="inputND" className="sr-only">NGO / Donor</label>
                        <input type="text" value={this.state.type} onChange={this.udpateType} id="inputND" className="form-control"
                            placeholder="Enter either NGO or Donor" required />

                        <button className="btn btn-lg btn-primary btn-block" onClick={this.onSubmit}>Submit</button>
                        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                    </form>
                </div>
            </div>
        );

    }

}

export default ProfileNew