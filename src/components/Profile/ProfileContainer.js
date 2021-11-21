import React, {Component} from 'react'
import Profile from './Profile'
import {connect} from 'react-redux';
import { withRouter} from "react-router-dom";
import {getProfileStatus, returnProfileData, updateProfileStatus} from "../../redux/reducers/profile-reducer";
import withAuthRedirect from '../hoc/withAuthRedirect';
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getProfileStatus(userId);
        this.props.returnProfileData(userId);
    }

    render() {
        return <Profile {...this.props}/> //буквально мы говорим, прокинь мне все пропсы дальше в child компонент.
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage,
    userId: state.userId
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {returnProfileData, getProfileStatus, updateProfileStatus}),
)(ProfileContainer);

