import React, {Component} from 'react';
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {

    return (
        <div className="content">
            <img className={style.avatar}
                 src="https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos-1280x720.png"/>
            <div>Avatar</div>
            <div className = {style.wallpaper}>
                <img src="https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2019/02/7-best-social-networks-to-do-marketing-in-your-ecommerce.png?fit=1000%2C600&ssl=1"/>
            </div>
        </div>
    )
}
export default ProfileInfo