import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Chat from './Components/Chat/Chat';


function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/auth" component={Auth} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </main>
    );
}

export default App;