import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile.js'
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter,
    Route}
from 'react-router-dom'

const App = (props) => {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sideBarFriends}/>
        <div className="content">
            <Route path="/profile" render ={() => <Profile profilePage={props.state.profilePage}
                                                           dispatch={props.dispatch}
            />}/>
            <Route path="/dialogs" render={()=> <Dialogs state={props.state.dialogPage}
                                                         dispatch={props.dispatch}/>}
                                                         />
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;