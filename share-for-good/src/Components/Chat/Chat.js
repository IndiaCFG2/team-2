import React, { Component } from 'react';
import  {auth, firebaseApp, db} from '../firebase'; 
import { render } from '@testing-library/react';
import Navbar from '../Navbar';
import './chat.css';

class Chat extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ngo_posts: []
        }
    }

    componentDidMount () {
        // db.collection('ngo_posts').get().then((querySnapshot) => {
        //     let ngo_posts = [];
        //     querySnapshot.forEach((doc) => {
        //         let post = {
        //             item: {},
        //             chat: {}
        //         };
        //         post.item = doc.data();
        //         console.log(doc.data());
        //         db.collection('ngo_posts').doc(doc.id).collection('chat').get().then((querySnap) => {
        //             const chatData = querySnap.docs.map(doc => doc.data());
        //             post.chat = chatData[0];
        //             console.log(post.chat.user_id);
        //         });
        //         ngo_posts.push(post);
        //     })
        //     this.setState({ngo_posts: ngo_posts});
        // });
    }
    
    render() {
        // console.log(this.state.ngo_posts);
        // console.log(this.state.ngo_posts[0].chat);
        let list = [{sent: 'Hi!', received: 'Helloo!!'}, {sent: 'I want to volunteer for your org!', received: 'Thats Great!'}];

        return (
        <div className='chat_body chat_html' style={{paddingLeft: '500px'}}>
        <main class="msger-chat">
            <div class="msg left-msg">

            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">Me</div>
                <div class="msg-info-time">12:45</div>
                </div>

                <div class="msg-text">
                Hi, It was a great to be a working for U&I. 😄
                </div>
            </div>
            </div>

            <div class="msg right-msg">
            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">U&I</div>
                <div class="msg-info-time">12:46</div>
                </div>

                <div class="msg-text">
                Thanks!
                </div>
            </div>
            </div>

            <div class="msg left-msg">

            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">U&I</div>
                <div class="msg-info-time">12:45</div>
                </div>

                <div class="msg-text">
                Feel free to reach out to us in case of queries. 😄
                </div>
            </div>
            </div>

            <div class="msg right-msg">
            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">U&I</div>
                <div class="msg-info-time">12:46</div>
                </div>

                <div class="msg-text">
                Sure!
                </div>
            </div>
            </div>
        </main>
        </div>
        );
    }
}

export default Chat;
