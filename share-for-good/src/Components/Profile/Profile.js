import React, { Component } from 'react';
import { render } from '@testing-library/react';
import db from '../firebase';

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
                {this.state.name}
                {this.state.email}
            </div>
        );
    }
}

export default Profile;
