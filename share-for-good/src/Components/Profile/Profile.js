import React, { Component } from 'react';
import { render } from '@testing-library/react';
import {db} from '../firebase';
import 'bootstrap/dist/css/bootstrap.css';

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
               <div className="container d-flex justify-content-center">
                   <div class="row">
                        <div class="card">
                            <div class="card-header">
                                Account Details
                            </div>
                            <div class="card-body">
                                <div class="form-group row">
                                    <label for="UserName" class="col-sm-4 col-form-label">Name</label>
                                    <div class="col-sm-8">
                                      <input type="text" disabled readonly class="form-control" id="UserName" value={this.state.name} />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="inputEmail" class="col-sm-4 col-form-label">Email</label>
                                    <div class="col-sm-8">
                                      <input type="text" disabled class="form-control" value={this.state.email} />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="staticPhone" class="col-sm-4 col-form-label">Phone</label>
                                    <div class="col-sm-8">
                                      <input type="text" disabled readonly class="form-control" id="staticPhone" value={this.state.phone}/>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="staticAddress" class="col-sm-4 col-form-label">Address</label>
                                    <div class="col-sm-8">
                                      <input type="text" disabled readonly class="form-control" id="staticAddress" value={this.state.address}/>
                                    </div>
                                  </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default Profile;
