import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar store={props.store}/>
                <div className="content">

                    <Route path="/profile/:userId?" render={() => <ProfileContainer store={props.store}
                    />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/users" render={() => <UsersContainer store={props.store}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
