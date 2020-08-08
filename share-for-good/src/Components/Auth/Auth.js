import React, { Component } from 'react';
import firebase from 'firebase';
import {auth}  from '../firebase';
import Home from '../Home/Home'
import { render } from '@testing-library/react';

class Auth extends Component {

    constructor(props) {
        super(props);
        this.googleProvider = new firebase.auth.GoogleAuthProvider();
        
        this.state = {
            loggedIn: false,
            userName: '',
            userEmail: '',
        }
    }

    componentDidMount () {
        this.getUser();
    }

    doSignInWithGoogle = () => {
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            auth.signInWithPopup(this.googleProvider)
            .then(socialAuthUser => {
                console.log(socialAuthUser);
                this.setState({userName: socialAuthUser.user.displayName, 
                                userEmail: socialAuthUser.user.email, 
                                userId: socialAuthUser.user.uid
                            }, () => {
                                this.props.history.push({
                                    pathname: '/profile/new',
                                    search: '?query=abc',
                                    state: { details: this.state }
                                })
                            });
              })
              .catch(error => {
                  console.log(error);
              });;
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
 
    doSignOut = () => auth.signOut();

    getUser() {
        if(auth.currentUser == null) {
            this.setState({loggedIn: false});
        } else {
            this.setState({
                loggedIn: true,
                userEmail: auth.currentUser.email,
                userName: auth.currentUser.userName,
                userID: auth.currentUser.uid,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.loggedIn? 
                    <Home/>
                    :
                    <button onClick={this.doSignInWithGoogle}>Sign In with Google</button>
                }
            </div>
        );
    }
}

export default Auth;
