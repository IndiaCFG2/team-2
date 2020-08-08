import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { db } from '../firebase';


class Profile extends Component {

    constructor(props) {

        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    }

    componentDidMount() {
        // db.collection('users').get().then((querySnapshot) => {
        //     // let profile_details = [];
        //     querySnapshot.forEach((doc) => {
        //         // let profile;
        //         // profile = doc.data();
        //         db.collection('users').doc('AOGNyuzQ4tNom2IZgX8n6bUlRuA2').get().then((querySnap) => {
        //             const data = querySnap.docs.map(doc => doc.data());
        //             this.setState({
        //                 name: data.name,
        //                 email: data.email,
        //                 phone: data.phone,
        //                 address: data.address
        //             })
        //         });
        //         // profile_details.push(profile);
        //     })
        //     // this.setState({ngo_posts: profile_details});
        // });
        db.collection("users").doc('AOGNyuzQ4tNom2IZgX8n6bUlRuA2')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.data();
                this.setState({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    address: data.address
                }) // array of cities objects
            });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <div className="card text-center">
                            <div className="card-header">
                                Account Details
                    </div>
                            <div className="card-body">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-lg-3">
                                        <h5 className="">Name</h5>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <h5>{this.state.name}</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-lg-3">
                                        <h5>Phone</h5>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <h5>{this.state.email}</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-lg-3">
                                        <h5>Email</h5>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <h5>{this.state.email}</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-lg-2">
                                        <h5>Address</h5>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <h5>{this.state.address}</h5>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer text-muted">
                                2 days ago
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
