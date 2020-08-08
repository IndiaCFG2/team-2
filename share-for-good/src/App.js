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
import DonorPostsNew from './Components/Dashboards/DonorPostsNew';
import NGOPostsNew from './Components/Dashboards/NGOPostsNew';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <Link className="navbar-brand" to=''>U&I</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/chat'>Chat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/profile'>Profile</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/profile'>Profile</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/profile">Profile</a>
                                <a className="dropdown-item" href="/">Change Password</a>
                                <a className="dropdown-item" href="/">Logout</a>
                            </div>
                        </li> */}

                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth" component={Auth} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/new" component={ProfileNew} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/donor/posts" component={DonorPosts} />
                <Route exact path="/ngo/posts" component={NGOPosts} />
                <Route exact path="/donor/posts/new" component={DonorPostsNew} />
                <Route exact path="/ngo/posts/new" component={NGOPostsNew} />

                <Route component={() => (<h1 className="text d-flex justify-content-center">404 Not found </h1>)} />
            </Switch>
        </main>
    );
}

export default App;