import React, {Component} from 'react'
import Profile from './Profile'
import {connect} from 'react-redux';
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../api/usersAPI";

class ProfileContainer extends Component {

componentDidMount() {
    let userId= this.props.match.params.userId;
    if (!userId) {
         userId = 2};

    usersAPI.getProfileData(userId).then(data => {
        this.props.setUserProfile(data)
    });
}

render() {
    return <Profile {...this.props}/> //буквально мы говорим, прокинь мне все пропсы дальше в child компонент.
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profileData
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);