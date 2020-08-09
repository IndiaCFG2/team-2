import React, { Component } from 'react';
import { db, auth, storage } from '../firebase';
import { render } from '@testing-library/react';
import firebase from 'firebase';
import Navbar from '../Navbar';


class NGOPostsNew extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            title: '',
            img_url: '',
            video_url: '',
            quantity: '',
            description: '',
            ngo_id: '',
            category: '',
            ngo_name: ''
        }
    }

    componentDidMount () {
        console.log(firebase.database.ServerValue.TIMESTAMP);
        if(auth.currentUser)
            this.setState({ngo_id: auth.currentUser.uid, ngo_name: auth.currentUser.displayName});
    }

    handleImageChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({ image }));
        }
    };

    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                console.log("InProgress!");
            },
            error => {
                console.log(error);
            }, () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    this.setState({ img_url: url });
                    alert("Upload Completed!");
                    console.log(url);
                });
            }
        );
    };


    onSubmit = () => {
        console.log(this.state);
        db.collection('ngo_posts')
            .add({
                ngo_id: this.state.ngo_id,
                title: this.state.title,
                img_url: this.state.img_url,
                video_url: this.state.video_url,
                quantity: this.state.quantity,
                description: this.state.description,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                category: this.state.category,
                posted_by: this.state.ngo_name
            }).then((docRef) => {
                this.props.history.push('/ngo/posts');
            })
            .catch(function (error) {
                console.error("Error adding NGo Post: ", error);
            });
    };

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className="card">
                        <h5 className="card-header">Post Your Requirements!</h5>
                        <div className="card-body">
                            {/* <form onSubmit={this.handleSubmit}> */}
                                <div className="form-group" >
                                    <label>Item name</label>
                                    <input className="form-control" type="text" value={this.state.title} onChange={(e)=>{this.setState({title: e.target.value})}} />
                                    <label>Description</label>
                                    <input className="form-control" type="text" value={this.state.description} onChange={(e)=>{this.setState({description: e.target.value})}} />
                                    <label>Quantity</label>
                                    <input className="form-control" type="text" value={this.state.quatity} onChange={(e)=>{this.setState({quantity: e.target.value})}}/>
                                    <label >Select the Image</label>
                                    <input className="form-control-file" type="file" id="img" name="img" accept="image/*" onChange={this.handleImageChange}></input>
                                    <button onClick={this.handleUpload}>Upload</button>
                                    <label>Select</label>
                                    <select value={this.state.topic}  onChange={(e)=>{this.setState({category: e.target.value})}}>
                                        <option>Medical</option>
                                        <option>Electronic Devices</option>
                                        <option>Stationary</option>
                                    </select>
                                    <button className="btn btn-primary"  onClick={this.onSubmit}>Submit</button>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default NGOPostsNew;