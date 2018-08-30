import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import SidebarAvatar from './SidebarAvatar';
import UserStatus from '../UI/UserStatus';
import SidebarNav from './SidebarNav';
import Button from '../UI/Button';
import BackDrop from '../UI/BackDrop';
import Socials from '../Header/Navigation/Social';
import Navigation from '../Header/Navigation/Navigation';
import * as actions from '../../store/actions/index';

class Sidebar extends Component {

    componentWillUnmount() {
        this.props.toggleSidebar(false);
    }

    render() {

        const notifications = {
            friends: 4,
            messages: 2
        }

        return (
            <Fragment>
                <CSSTransition in={this.props.showMobileSidebar} timeout={200} classNames="fade" mountOnEnter unmountOnExit>
                    <BackDrop extraCss="hide-desktop" close={() => this.props.toggleSidebar(!this.props.showMobileSidebar)} />
                </CSSTransition>
                <div className={this.props.showMobileSidebar ? "sidebar sidebar__mobile-show" : "sidebar"}>
                    <div className="sidebar__content">
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
                        <div className="hide-desktop navigation navigation--mobile">
                            <Navigation />
                            <Socials />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        showMobileSidebar: state.auth.showMobileSidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.authLogout()),
        toggleSidebar: (show) => dispatch(actions.showMobileSidebar(show))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);