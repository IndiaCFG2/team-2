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
import DonorPostsNew from './Components/Dashboards/DonorPostsNew';
import NGOPostsNew from './Components/Dashboards/NGOPostsNew';
import {auth} from './Components/firebase';
import Navbar from './Components/Navbar';

function App() {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Auth} />
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