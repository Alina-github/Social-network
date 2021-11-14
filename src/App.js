import React from 'react';
import './App.css';
import HeaderContainer from '././components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewProfileComponent from "./components/Profile/ProfileContainer";
import UserWithAuthRedirect from "./components/Users/UsersContainer";
import LoginForm from "../src/components/Login/LoginContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer store={props.store}/>
                <Navbar store={props.store}/>
                <div className="content">
                    <Route path="/login" render={() => <LoginForm store={props.store}/>}/>
                    <Route path="/profile/:userId?" render={() => <NewProfileComponent store={props.store}/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/users" render={() => <UserWithAuthRedirect store={props.store}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
