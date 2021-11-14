import React from 'react';
import Header from './Header';
import {connect} from  'react-redux';
import {receiveAuthUserData, logOut} from "../../redux/reducers/auth-reducer";

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        this.props.receiveAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authMe.isAuth,
        login: state.authMe.login,
    }
}

let HeaderContainer = connect(mapStateToProps, {receiveAuthUserData, logOut})(HeaderAPIContainer);

export default HeaderContainer;