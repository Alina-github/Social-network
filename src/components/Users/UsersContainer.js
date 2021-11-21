import React from 'react'
import {
    follow,
    unfollow,
    setUsers,
    setPagesCount,
    setCurrentPage,
    setIsFetching, toggleFollowingProcess, getUsersThunkCreator
} from "../../redux/reducers/users-reducer";
import { getUsers, getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowing } from "../../redux/selectors/users-selectors";
import UsersAPIContainer from "./UsersAPIContainer"
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

    let mapStateToProps = (state) => {
        return {
            users: getUsers(state),
            totalUsersCount: getTotalUsersCount(state),
            pageSize: getPageSize(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            following: getFollowing(state)
        }
    }

export default compose(
    connect(mapStateToProps,  {
    follow,   unfollow, setUsers, setPagesCount,
    setCurrentPage,  setIsFetching, toggleFollowingProcess,
    requestUsers: getUsersThunkCreator}
),
    withAuthRedirect)(UsersAPIContainer)