import React from 'react'
import {
    follow,
    unfollow,
    setUsers,
    setPagesCount,
    setCurrentPage,
    setIsFetching
} from "../../redux/reducers/users-reducer";
import UsersAPIContainer from "./UsersAPIContainer"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let UsersContainer = connect(mapStateToProps,  {
    follow,   unfollow, setUsers, setPagesCount, setCurrentPage,  setIsFetching}
)(UsersAPIContainer)
export default UsersContainer;