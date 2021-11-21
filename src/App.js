import React from 'react';
import './App.css';
import HeaderContainer from '././components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {compose}  from "redux";
import {connect} from  'react-redux';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewProfileComponent from "./components/Profile/ProfileContainer";
import UserWithAuthRedirect from "./components/Users/UsersContainer";
import LoginForm from "../src/components/Login/LoginContainer";
import {Route, withRouter} from 'react-router-dom';
import {initializeApp} from "./redux/reducers/initialization-reducer";
import {updateMessageTextActionCreator} from "./redux/reducers/dialogPage-reducer";
import Loader from "./components/common/Loader";


class App extends React.Component {

    componentDidMount() {
        // console.log(this.props.store, initializeApp())
        initializeApp()
        this.props.initializeApp()
        debugger
    }

    render () {

        if (!this.props.initialized) {
            return (
                <Loader/>
            )
        }

        // componentDidMount() {
        //     this.props.receiveAuthUserData();
        // }
        return (
                <div className="app-wrapper">
                    <HeaderContainer store={this.props.store}/>
                    <Navbar store={this.props.store}/>
                    <div className="content">
                        <Route path="/login" render={() => <LoginForm store={this.props.store}/>}/>
                        <Route path="/profile/:userId?" render={() => <NewProfileComponent store={this.props.store}/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer store={this.props.store}/>}/>
                        <Route path="/users" render={() => <UserWithAuthRedirect store={this.props.store}/>}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.initialization.initialized,
    }
}

// const mapDispatchToProps = (state) => {
//     return {
//
//         updateMessageContent: (newText) => {
//             dispatch(updateMessageTextActionCreator(newText))
//         },
//         initializeApp: () => dispatch(updateMessageTextActionCreator(newText))
//     },,
//     }
// }

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)

