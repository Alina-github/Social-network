import React from 'react'
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../api/usersAPI";
import Loader from "../common/Loader";

const Users = (props) => {

    const pageNumber = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
    }
    const avatarURL = 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg';

    return (
        <div>
                {props.isFetching && <Loader/>}
            <div>
                {pages?.map(n =>
                    <span className={props.currentPage===n && style.selectedPage}
                          onClick={() => props.onPageChange(n)}>
                            {n}
                        </span>
                )
                }
            </div>
            {
                props.users.map(u =>
                    <>
                        <div key={u.id}>
                            <div>{u.name}</div>
                            <NavLink to={`/profile/${u.id}`}> <img className={style.userImage}
                                                                   src={u.photos.small ? u.photos.small : avatarURL}
                                                                   onClick={() => {console.log('open profile')}}/></NavLink>
                            <div>
                                {u.followed
                                    ? <button disabled={props.following.some(id => id == u.id)}
                                              onClick={() => {
                                                  props.toggleFollowingProcess(true, u.id);
                                                  usersAPI.unfollow(u.id).then(response => {
                                                      if (response.data.resultCode === 0) {
                                                          props.unfollow(u.id);
                                                          props.toggleFollowingProcess(false, u.id);
                                                      }
                                                  });
                                              }}>Unfollow</button>
                                    : <button
                                        disabled={props.following.some(id => id == u.id)}
                                        onClick={() => {
                                            props.toggleFollowingProcess(true, u.id);
                                            usersAPI.follow(u.id).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                    props.toggleFollowingProcess(false, u.id);
                                                }
                                            });
                                        }
                                        }>
                                        Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location?.country}</div>
                            <div>{u.location?.city}</div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Users