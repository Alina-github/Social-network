import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {useForm} from "react-hook-form";

const MyPosts = (props) => {

    const {handleSubmit, register, formState: { errors }, reset,
   } = useForm();

    const onSubmit = values => {
        showPost();
        reset();
    }

    let postItems = props.profilePage.postData.map(p =>
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("post",
                        {
                            mode: "all",
                            defaultValue: props.profilePage.newPostText,
                            // value: props.profilePage.newPostText,
                            required: true,
                            onChange: (e) => {
                                onPostChange(e);
                            },
                            reValidateMode: 'onBlur',
                        }
                    )}
                />
                {errors.post && <div style={{color: 'darkorange'}}>This field is required</div>}
                <div>
                    <button type="submit">Add post</button>
                </div>
            </form>
            {postItems}
        </div>
    )
}

export default MyPosts