import React from 'react'
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    debugger
    const pageNumber = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
    }
    const avatarURL = 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg';

    return (
        <div>
            <div>
                {props.isFetching && <img style={{width: "40px", height: "40px"}}
                                          src="https://lh5.googleusercontent.com/proxy/L2_DpgFsWplHw9VzEx-jRwwb1k_snbtYjmvm1ACG1F8NPov22Xzzg2quaX4ztpjmksWidkiaNxj2su_o6aoNl3RGMRMED9kUNEhwzHO6dWw5_XaUSpXr0V6Q30rG0fL5-dD1vaf1Az0=s0-d"/>}
            </div>
            <div>
                {pages?.map(n =>
                    <span className={props.currentPage === n && style.selectedPage}
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
                            <NavLink to={`/profile/${u.id}`}> <img className={style.userImage}/>
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button disabled={props.following.some(id => id == u.id)}
                                              onClick={() => {
                                                  props.toggleFollowingProcess(true, u.id);
                                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                  {
                                                      withCredentials: true,
                                                      headers: {
                                                          "API-KEY": "2f152a2a-147c-4113-8297-3b8ab8e30893"
                                                }
                                            }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                                props.toggleFollowingProcess(false, u.id);
                                            }
                                        });
                                    }}>Unfollow</button>
                                    : <button
                                         disabled={props.following.some(id => id == u.id)}

                                        // Create following in Progress as an array which store the numbers of id that was clicked (add id in the end of arr)
                                        // Change reducer to : если фетчится то добавь в конец массива. Если ветчинг завершен, то верни отфильтрованный массив, где нет ид из arr.
                                        // SOME, EVERY
                                        // this.props.toggleFollowingProcess.some(id =
                                        // do the check
                                        // (true)

                                        onClick={() => {
                                            props.toggleFollowingProcess(true, u.id);
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "2f152a2a-147c-4113-8297-3b8ab8e30893"
                                                    }
                                                }).then(response => {
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