import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile.js';
import {BrowserRouter, Route} from 'react-router-dom';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar store={props.store}/>
                <div className="content">

                    <Route path="/profile" render={() => <Profile
                        store={props.store}
                    />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/users" render={() => <UsersContainer store={props.store}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
