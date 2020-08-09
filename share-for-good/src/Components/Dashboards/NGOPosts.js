import React, { Component } from 'react';
import {db, auth}from '../firebase';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';

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
            <div>
                <Navbar/>
                <div class="container">
                <div class="row">
                    {
                    posts.map((post) => {
                    return (
                        <div class="col-md-4 p-1">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top mx-auto" src={post.img_url} style={{ width: "100px", height: "100px" }}
                                alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">{post.description}</p>
                                <p class="card-text">{post.posted_by}</p>
                            </div>
                        </div>
                    </div>
                        // <div key={post.title}>
                        //     <ul>{post.title}</ul>
                        //     <ul>{post.description}</ul>
                        //     <ul>{post.img_url}</ul>
                        //     <ul>{post.video_url}</ul>
                        //     <ul>{post.amount}</ul>
                        // </div>
                    )})
                }
            </div>
            </div>
            </div>
        );
    }
}

export default NGOPosts;
