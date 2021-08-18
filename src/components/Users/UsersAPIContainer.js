import React from 'react'
import * as axios from 'axios'
import Users from "./Users";
import {usersAPI} from "../api/usersAPI";
import {toggleFollowingProcess} from "../../redux/reducers/users-reducer";


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setPagesCount(data.totalCount/250);
        }
        )
    }

    onPageChange = (n) => {
        this.props.setCurrentPage(n);
        this.props.setIsFetching(true);
        usersAPI.getUsers(n, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setIsFetching(false);
            }
        )
    }

    render() {
        return    <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            users={this.props.users}
            currentPage={this.props.currentPage}
            isFetching={this.props.isFetching}
            following={this.props.following}
            toggleFollowingProcess={this.props.toggleFollowingProcess}
        />
    }
}

export default UsersAPIContainer;