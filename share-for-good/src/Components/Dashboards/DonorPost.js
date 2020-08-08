import React, { Component } from 'react';
import {db, auth} from '../firebase';
import { render } from '@testing-library/react';

class DonorPosts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            donor_posts: [],
        }
    }

    componentDidMount () {
        db.collection('donor_posts').get().then((querySnapshot) => {
            let donor_posts = [];
            querySnapshot.forEach((doc) => {
                let post = {};
                post = doc.data();
                // db.collection('donor_posts').doc(doc.id).collection('items').get().then((querySnap) => {
                //     let data = querySnap.docs.map(doc => doc.data());
                //     post.items = data;
                // });
                donor_posts.push(post);
            })
            this.setState({donor_posts: donor_posts});
        });
    }

    render() {
        let posts = this.state.donor_posts;
        return (
            <ul>
                {
                    posts.map((post) => {
                    return (
                        <div key={post.title}>
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

export default DonorPosts;
