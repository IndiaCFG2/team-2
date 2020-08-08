import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Chat from './Components/Chat/Chat';
import Profile from './Components/Profile/Profile';
import { Link } from 'react-router-dom'
import ProfileNew from './Components/Profile/ProfileNew';
import DonorPosts from './Components/Dashboards/DonorPost';
import NGOPosts from './Components/Dashboards/NGOPosts';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to=''>Chat</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/chat'>Chat</Link>
                        </li>
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
            </nav>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/auth" component={Auth} />
                {/* <Route path="/profile" component={Profile} /> */}
                <Route path="/profile/new" component={ProfileNew} />
                <Route path="/chat" component={Chat} />
                <Route path="/donor/posts" component={DonorPosts} />
                <Route path="/ngo/posts" component={NGOPosts} />
            </Switch>
        </main>
    );
}

export default App;