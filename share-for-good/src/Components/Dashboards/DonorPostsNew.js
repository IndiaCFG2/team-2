import React, { Component } from 'react';
import { db } from '../firebase';
import { render } from '@testing-library/react';

class DonorPostsNew extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            donor_post:{
                items: [],
                description: '',
                donor_id: ''
            }
        }
    }

    onSubmit () {
        db.collection('donor_posts')
        .add({
            donor_id: this.state.user,
            description: this.state.donor_post.description,
        }).then(function(docRef) {
            this.state.items.map((item) => {
                db.collection('donor_posts').doc(docRef.id).collection('items')
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
            console.error("Error adding Donor Post: ", error);
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

export default DonorPostsNew;
