import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authMe.isAuth
    }
}

const withAuthRedirect = (Component) => {
    class RedirectContainer extends React.Component {
        render() {
            if (this.props.isAuth) {
                return <Component {...this.props}/>
            } else {
                return <Redirect to="/login"/>
            }
        }
    }
            let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectContainer);
            return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect