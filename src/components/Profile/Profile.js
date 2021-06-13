import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
</>
    )
}
export default Profile