import React, { Component } from 'react';
import { render } from '@testing-library/react';
import {db} from '../firebase';

class Admin extends Component {

    constructor(props) {

        super(props);
        this.state = {
            name: '',
            support_doc_1: '',
            support_doc_2: '',
            support_doc_3: ''
        
    }
    }
    componentDidMount() {
       
        db.collection("ngo_users").doc('AOGNyuzQ4tNom2IZgX8n6bUlRuA2')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.data();
                this.setState({
                   
                    name: data.name,
                    support_doc_1:data.support_doc_1,
                    support_doc_2:data.support_doc_2,
                    support_doc_3:data.support_doc_3,
                }) // array of cities objects
            });
    }


    render() {
        return (
            <div>
                {this.state.name}
                {this.state.support_doc_1}
                {this.state.support_doc_2}
                {this.state.support_doc_3}
            </div>
        );
    }
}

export default Admin;
