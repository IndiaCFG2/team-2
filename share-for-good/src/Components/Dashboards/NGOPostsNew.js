import React, { Component } from 'react';
import {db, auth} from '../firebase';
import { render } from '@testing-library/react';

class NGOPosts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            ngo_post:{
                items: [],
                description: '',
                donor_id: ''
            }
        }
    }

    onSubmit () {
        db.collection('ngo_posts')
        .add({
            ngo_id: this.state.user,
            description: this.state.ngo_post.description,
        }).then(function(docRef) {
            this.state.items.map((item) => {
                db.collection('ngo_posts').doc(docRef.id).collection('items')
                .add({
                    description: item.description,
                    img_url: item.img_url,
                    video_url: item.video_url,
                    title: item.title,
                    video_url: item.video_url
                })
            })
        })
        .catch(function(error) {
            console.error("Error adding NGO Post: ", error);
        });;
    }

    render() {
        return (
            <div>
                Create Form and Save Data!
            </div>
        );
    }
}

export default NGOPosts;
