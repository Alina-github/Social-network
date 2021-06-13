import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profile-reducer";

const MyPosts = (props) => {

    let postItems =  props.postData.map(p =>
        <Post id={p.id} message={p.message} likesCounter={p.likesCounter}/>)

    const showPost = () => {
        debugger
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let newText = refContainer.current.value;
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    let refContainer = React.createRef()
    //получает нативный DOM-элемент, т.е в ref мы храним
        //ссылки на узел DOM

    return (
        <div className="content">
            <div className={`${style.item} ${style.active}`}> My Posts</div>
            <div className={style.item}> New Post</div>
            <textarea ref={refContainer} onChange={onPostChange} value={props.newPostText}></textarea>
            <div><button onClick={showPost}>Add post</button>
            <button>Remove</button>
                </div>
            {postItems}
        </div>
    )
}

export default MyPosts