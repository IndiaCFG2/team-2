import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {auth, db} from '../Components/firebase';
import { render } from '@testing-library/react';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            type: 'DEF'
        }
    }

    componentDidMount() {
        if(auth.currentUser) {
            db.collection("auth").doc(auth.currentUser.uid)
                .get()
                .then(querySnapshot => {
                  const data = querySnapshot.data();
                    this.setState({
                        type: data.type,
                        loggedIn: true
                    }) // array of cities objects
                });
            }
    }

    render () {
        console.log(this.state.loggedIn);
        return (
            <div>
            {
                this.state.loggedIn?
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                    <Link className="navbar-brand" to=''>U&I</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/donor/posts'>Donor Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/ngo/posts'>NGO Posts</Link>
                            </li>
                            {this.state.type == 'NGO'?
                            <li className="nav-item">
                                <Link className="nav-link" to='/ngo/posts/new'>Add Posts</Link>
                            </li>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to='/donor/posts/new'>New Posts</Link>
                            </li>
                            }
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/profile'>Profile</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <a className="dropdown-item" href="/">Change Password</a>
                                    <a className="dropdown-item" href="/">Logout</a>
                                </div>
                            </li>
    
                        </ul>
                    </div>
                </nav>:
                <div/>
            }
            </div>
        );
    }
}

export default Navbar;