import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postItems =  props.profilePage.postData.map(p =>
        <Post id={p.id} message={p.message} likesCounter={p.likesCounter}/>)

    const showPost = () => {
        props.showPost()
    }

    const onPostChange = (e) => {
        let newText = e.currentTarget.value;
        props.updateNewPostText(newText)
    }

    return (
        <div className="content">
            <div className={`${style.item} ${style.active}`}> My Posts</div>
            <div className={style.item}> New Post</div>
            <textarea onChange={(e) => onPostChange(e)} value={props.profilePage.newPostText}></textarea>
            <div><button onClick={showPost}>Add post</button>
            <button>Remove</button>
                </div>
            {postItems}
        </div>
    )
}

export default MyPosts