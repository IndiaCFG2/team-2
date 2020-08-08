import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Chat from './Components/Chat/Chat';
import Profile from './Components/Profile/Profile';
import ProfileNew from './Components/Profile/ProfileNew';
import DonorPosts from './Components/Dashboards/DonorPost';
import NGOPosts from './Components/Dashboards/NGOPosts';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <main>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">U&I</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/chat">Chat</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/profile">Profile</a>
                                <a class="dropdown-item" href="/">Change Password</a>
                                <a class="dropdown-item" href="/">Logout</a>
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