import React, { Component } from 'react';
import {db} from '../firebase';
import { render } from '@testing-library/react';

class DonorPosts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            donor_posts: []
        }
    }

    componentDidMount () {
        db.collection('donor_posts').get().then((querySnapshot) => {
            let donor_posts = [];
            querySnapshot.forEach((doc) => {
                let post;
                post = doc.data();
                db.collection('donor_posts').doc(doc.id).collection('items').get().then((querySnap) => {
                    const data = querySnap.docs.map(doc => doc.data());
                    post.items = data;
                });
                donor_posts.push(post);
            })
            this.setState({donor_posts: donor_posts});
        });
    }

    render() {
        let posts = this.state.donor_posts;
        console.log(posts);
        return (
            <ul>
                {
                    posts.map((post) => {
                    return (
                        <div key={post.description}>
                            {post.donor_id}. {post.item.title}
                        </div>
                    )})
                }
            </ul>
        );
    }
}

export default DonorPosts;
