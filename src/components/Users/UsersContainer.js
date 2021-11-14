import React from 'react'
import {
    follow,
    unfollow,
    setUsers,
    setPagesCount,
    setCurrentPage,
    setIsFetching, toggleFollowingProcess, getUsersThunkCreator
} from "../../redux/reducers/users-reducer";
import UsersAPIContainer from "./UsersAPIContainer"
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

    let mapStateToProps = (state) => {
        return {
            users: state.usersPage.users,
            totalUsersCount: state.usersPage.totalUsersCount,
            pageSize: state.usersPage.pageSize,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            following: state.usersPage.following,
        }
    }

export default compose(
    connect(mapStateToProps,  {
    follow,   unfollow, setUsers, setPagesCount,
    setCurrentPage,  setIsFetching, toggleFollowingProcess,
    getUsers: getUsersThunkCreator}
),
    withAuthRedirect)(UsersAPIContainer)