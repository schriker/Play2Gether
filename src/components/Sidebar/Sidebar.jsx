import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarAvatar from './SidebarAvatar';
import UserStatus from '../UI/UserStatus';
import SidebarNav from './SidebarNav';
import Button from '../UI/Button';
import * as actions from '../../store/actions/index';


class Sidebar extends Component {

    render() {

        const notifications = {
            friends: 4,
            messages: 2
        }

        return (
            <div className="sidebar">
                <SidebarAvatar photo={this.props.user.photoURL} notifications={notifications} />
                <div className="sidebar__username">
                    <UserStatus online={this.props.user} />
                    {this.props.user.displayName ? this.props.user.displayName : this.props.user.email}
                </div>
                <SidebarNav notifications = {notifications} />
                <Button value="Logout" clicked={() => this.props.logout()} type="grey-steam" />
                <span className="sidebar__ver">
                    VER. 0.0.9 2018
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);