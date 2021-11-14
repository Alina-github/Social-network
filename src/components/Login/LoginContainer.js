import React from 'react'
import {logIn, logOut, setAuthError} from "../../redux/reducers/auth-reducer";
import LoginForm from "./Login";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        isAuth: state.authMe.isAuth,
        validationError: state.authMe.validationError,
    }
}

let LoginFormContainer = connect(mapStateToProps, {logIn, logOut, setAuthError})(LoginForm);

export default LoginFormContainer