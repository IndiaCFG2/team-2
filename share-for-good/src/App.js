import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Chat from './Components/Chat/Chat';
import Profile from './Components/Profile/Profile';
import ProfileNew from './Components/Profile/ProfileNew';
import DonorPosts from './Components/Dashboards/DonorPost';
import NGOPosts from './Components/Dashboards/NGOPosts';

function App() {
    return (
        <main>
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