import React from 'react';
import NumberBadge from '../UI/NumberBadge';

const SidebarAvatar = (props) => {

    let userAvatar = <i className="fas fa-user"></i>;
    const numberOfNotifications = Object.values(props.notifications).reduce((sum, value) => sum + value);

    if (props.photo) {
        userAvatar = <img src={props.photo} alt="User Avatar" />
    }

    return (
        <div className="sidebar__avatar">
            <NumberBadge value={numberOfNotifications} /> 
            {userAvatar}
        </div>
    );
};

export default SidebarAvatar;