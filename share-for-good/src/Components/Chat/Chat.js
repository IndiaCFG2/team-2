import React, { Component } from 'react';
import  {auth, firebaseApp} from '../firebase'; 
import { render } from '@testing-library/react';

class Chat extends Component {
    render() {
        console.log(firebaseApp.auth().currentUser);
        console.log(auth.currentUser);
        return (
            <div>
                Hello from Chat!
            </div>
        );
    }
}

export default Chat;
