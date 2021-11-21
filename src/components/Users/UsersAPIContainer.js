import React from 'react'
import Users from "./Users";


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (n) => {
        this.props.setCurrentPage(n);
        this.props.requestUsers(n, this.props.pageSize);
    }

    render() {
        return <Users
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