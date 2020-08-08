import React, { Component } from 'react';
import {db, auth}from '../firebase';
import { render } from '@testing-library/react';

class NGOPosts extends Component {
    
    constructor(props) {

        super(props);
        this.state = {
            ngo_posts: []
        }
    }

    componentDidMount () {
        db.collection('ngo_posts').get().then((querySnapshot) => {
            let ngo_posts = [];
            querySnapshot.forEach((doc) => {
                let post;
                post = doc.data();
                // db.collection('ngo_posts').doc(doc.id).collection('items').get().then((querySnap) => {
                //     const data = querySnap.docs.map(doc => doc.data());
                //     post.items = data;
                // });
                ngo_posts.push(post);
            })
            this.setState({ngo_posts: ngo_posts});
        });
    }

    render() {
        let posts = this.state.ngo_posts;
        console.log(posts);
        return (
            <ul>
                {
                    posts.map((post) => {
                    return (
                        <div key={post.timestamp.seconds}>
                            <ul>{post.title}</ul>
                            <ul>{post.description}</ul>
                            <ul>{post.img_url}</ul>
                            <ul>{post.video_url}</ul>
                            <ul>{post.amount}</ul>
                        </div>
                    )})
                }
            </ul>
        );
    }
}

export default NGOPosts;
