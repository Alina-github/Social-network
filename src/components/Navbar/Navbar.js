import React from 'react'
import style from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom"

const Navbar = (props) => {

    let state = props.store.getState();

    const Friend = (props) => {
        let path = "/friends/" + props.id;
        return (
            <div className={style.circle}>
            <Link to={path}>{props.name}
                </Link>
                </div>
                )
            }

    let mainFriends =
        state.sideBarFriends.sideBarFriends.slice(0, 3).map(d => (
            <div key={d.id}>
        < Friend id={d.id} name={d.name}/>
            </div>))

    return (
        <nav className="nav">
            <div className={style.item}><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></div>
            <div className={style.item}><NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink></div>
            <div className={style.item}><NavLink to="/news" activeClassName={style.active}>News</NavLink></div>
            <div className={style.item}><NavLink to="/music" activeClassName={style.active}>Music</NavLink></div>
            <div className={style.item}><NavLink to="/settings" activeClassName={style.active}>Settings</NavLink></div>

                <div className={`${style.friendBox}`}>
                    <div className={`${style.friendsTitle} ${style.item}`}><NavLink to="/friends" activeClassName={style.active}>Friends</NavLink></div>
                    <div className={style.friends}>{mainFriends}</div>
                </div>
        </nav>
    )
}
export default Navbar