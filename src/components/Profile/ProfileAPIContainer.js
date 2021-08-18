import React, {Component} from 'react';
import axios from 'axios';
import ProfileContainer from './ProfileContainer';
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile-reducer";


// class ProfileAPIContainer extends Component {
//
//     let mapStateToProps = (state) => {
//     user: state.setUserProfile.profileData
// };
//
//     let ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer);
//
// export default ProfileAPIContainer;