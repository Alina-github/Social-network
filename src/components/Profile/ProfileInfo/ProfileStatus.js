import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.status)
    };

    componentDidUpdate = (prevProps) => {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status});
        }
}

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}
                               onChange = {this.onStatusChange}
                        />
                        </div>
                    : <div onClick={this.activateEditMode}>{!this.props.status ? "-----" : this.props.status}</div>

                }
            </>
        )
    }
}
export default ProfileStatus;