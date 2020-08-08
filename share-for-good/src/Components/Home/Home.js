import React, { Component } from 'react';
import db from '../firebase';
import { render } from '@testing-library/react';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ngo_posts: []
        }
    }

    render() {
        return (
            <div>
                Hello from Home!
            </div>
        );
    }
}

export default Home;
