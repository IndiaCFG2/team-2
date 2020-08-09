import React, { Component } from 'react';
import { render } from '@testing-library/react';
import {db, auth} from '../firebase';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar';

class Profile extends Component {

    constructor(props) {

        super(props);
        this.state = {
            name: 'NULL',
            email: 'NULL',
            type: 'NULL',
            address: 'NULL'
        }
    }

    componentDidMount() {
        if(auth.currentUser) {
          console.log(auth.currentUser);
          db.collection("auth").doc(auth.currentUser.uid)
              .get()
              .then(querySnapshot => {
                // console.log();
                const data = querySnapshot.data();
                  this.setState({
                      name: auth.currentUser.displayName,
                      email: auth.currentUser.email,
                      address: data.address,
                      type: data.type
                  }) // array of cities objects
              });
            }
    }

    render() {
        return (
            <div>
              <Navbar/>
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
                                      <input type="text" disabled value={this.state.email} readonly class="form-control" id="staticEmail" />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-4 col-form-label">Name</label>
                                    <div class="col-sm-8">
                                      <input type="text" value={this.state.name} class="form-control" />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="staticEmail" class="col-sm-4 col-form-label">Address</label>
                                    <div class="col-sm-8">
                                      <input type="text" value={this.state.address} readonly class="form-control" id="staticEmail"/>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="staticEmail" class="col-sm-4 col-form-label">Type</label>
                                    <div class="col-sm-8">
                                      <input type="text" value={this.state.type} disabled readonly class="form-control" id="staticEmail"/>
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
