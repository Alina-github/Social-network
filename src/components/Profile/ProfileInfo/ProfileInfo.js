import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

    let obj = props.profile.contacts;

    return (
        <div>
            <div className={style.wallpaper}>
                <img
                    src="https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2019/02/7-best-social-networks-to-do-marketing-in-your-ecommerce.png?fit=1000%2C600&ssl=1"/>
            </div>
            <img className={style.avatar}
                 src={props.profile.photos?.small}/>
            <div className={style.info}>
                <div> aboutMe: {props.profile.aboutMe}
                </div>
                <div> contacts:
                    { obj && Object.keys(obj).forEach((el, i) => (
                        el && <p className={style.items}>el:{obj['el']}</p>)
                    )
                    }
                </div>
                <div>fullName: <h2> {props.profile.fullName}</h2></div>
                    <div>
                        <div>lookingForAJob: {props.profile?.lookingForAJob}</div>
                        <div>job description: {props.profile?.lookingForAJobDescription}</div>
                    </div>
                </div>
                </div>
            )
            }
            export default ProfileInfo