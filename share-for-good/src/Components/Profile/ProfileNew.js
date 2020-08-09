import React, { Component } from 'react';
import { db, auth } from '../firebase';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar';
import './style.css';

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
        if(auth.currentUser) {
            this.setState({
                userName: auth.currentUser.displayName,
                userEmail: auth.currentUser.email,
                userId: auth.currentUser.uid
            })
        }
        
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
                this.props.history.push('/profile');
            });
    }

    render() {
        console.log(auth.currentUser);
        return (
            <div>
                {auth.currentUser?
                <div className="container container-img">
                        <label htmlFor="inputEmail" className="sr-only">Address</label>
                        <input type="address" id="inputAddress" value={this.state.address} className="form-control"
                            placeholder="Address" onChange={this.udpateAddress}/>
                        <label htmlFor="inputND" className="sr-only">NGO / Donor</label>
                        <input type="text" value={this.state.type} onChange={this.udpateType} id="inputND" className="form-control"
                            placeholder="Enter either NGO or Donor" required />
                            <br/>

                        <button className="btn btn-lg btn-primary btn-block" onClick={this.onSubmit}>Submit</button>
                        <p className="mt-5 mb-3 text-muted">"</p>
                </div>
                :
                <div/>
                }   
            </div>
        );

    }

}

export default ProfileNew