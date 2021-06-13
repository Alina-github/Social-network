import style from "./Post.module.css";
import React, {useState} from "react";

const Post = (props) => {

    return (
        <>
            <div className={style.item}>
                <img src={"https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"} alt="Default image"></img>
                {props.message}
            </div>
            <span>Like {props.likesCounter}</span>
        </>
    )
}
export default Post
