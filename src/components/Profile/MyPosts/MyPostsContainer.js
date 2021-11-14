import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage,
        newPostText:state.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    showPost: () =>  {dispatch(addPostActionCreator())},
    updateNewPostText: (newText) => {dispatch(updateNewPostTextActionCreator(newText))}
    }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
// т.е мы говорим, хэй перерисуйся,
// если изменить хоть что нб из mapStateToProps

export default MyPostsContainer