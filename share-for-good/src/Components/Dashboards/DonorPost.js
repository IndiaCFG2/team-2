import React, { Component } from 'react';
import { db, auth } from '../firebase';
import { render } from '@testing-library/react';

class DonorPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            donor_posts: [],
        }
    }

    componentDidMount() {
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
            this.setState({ donor_posts: donor_posts });
        });
    }

    render() {
        let posts = this.state.donor_posts;
        console.log(posts);
        return (
            <div class="container">
                <div class="row">
                    {
                        posts.map((post) => {
                            return (
                                <div class="col-md-4">
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img class="card-img-top" src={post.img_url} style={{ width: "100px", height: "100px" }}
                                            alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{post.title}</h5>
                                            <p class="card-text">{post.description}</p>
                                        </div>
                                    </div>
                                </div>
                                // //
                                // <!-- <div key={post.timestamp.seconds}>
                                // //     <ul>{post.title}</ul>
                                // //     <ul>{post.description}</ul>
                                // //     <ul>{post.img_url}</ul>
                                // //     <ul>{post.video_url}</ul>
                                // //     <ul>{post.amount}</ul>
                                // // </div> -->
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default DonorPosts;
                