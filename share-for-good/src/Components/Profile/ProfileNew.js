import React, { Component } from 'react';
import { db } from '../firebase';
import { render } from '@testing-library/react';

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
        .then(()=>{
            this.props.history.push('/chat');
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.address} onChange={this.udpateAddress}/>
                <label>DONOR/NGO</label>
                <input value={this.state.type} onChange={this.udpateType}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }

}

export default ProfileNew;
