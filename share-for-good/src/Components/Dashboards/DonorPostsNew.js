import React, { Component } from 'react';
import db from '../firebase';
import { render } from '@testing-library/react';

class DonorPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            donor_post: {
                items: [],
                description: '',
                donor_id: ''
            }
        }
    }

    onSubmit() {
        db.collection('donor_posts')
            .add({
                donor_id: this.state.user,
                description: this.state.donor_post.description,
            }).then(function (docRef) {
                this.state.items.map((item) => {
                    db.collection('donor_posts').doc(docRef.id).collection('items')
                        .add({
                            description: item.description,
                            img_url: item.img_url,
                            video_url: item.video_url,
                            title: item.title,
                        })
                })
            })
            .catch(function (error) {
                console.error("Error adding Donor Post: ", error);
            });;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div class="card">
                        <h5 class="card-header">Be Generous and Help a Needy</h5>
                        <div class="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group" >
                                    <label>Item name</label>
                                    <input className="form-control" type="text" value={this.state.itemName} onChange={this.handleUsernameChange} />
                                    <label>Quantity</label>
                                    <input className="form-control" type="text" value={this.state.quatity} onChange={this.handleUsernameChange} />

                                    <label for="FormControlFile1">Select the Image</label>
                                    <input className="form-control-file" type="file" id="img" name="img" accept="image/*"></input>
                                    <label for="FormControlFile2">Select the Video <span className="lead">(optional)</span></label>
                                    <input className="form-control-file" type="file" id="video" name="video" accept="video/*"></input>
                                    <label>Select</label>
                                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                                        <option>Medical</option>
                                        <option>Electronic Devices</option>
                                        <option>Stationary</option>
                                    </select>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default DonorPosts;
