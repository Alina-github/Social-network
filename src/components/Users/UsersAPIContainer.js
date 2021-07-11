import React from 'react'
import axios from 'axios'
import Users from "./Users";
import {NavLink} from "react-router-dom";
import {setPagesCount} from "../../redux/reducers/users-reducer";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
                this.props.setUsers(res.data.items);
                this.props.setPagesCount(res.data.totalCount/250);
            }
        )
    }

    onPageChange = (n) => {
        this.props.setCurrentPage(n);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setIsFetching(false);
            console.log( this.props.isFetching)
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
        />
    }
}

export default UsersAPIContainer;