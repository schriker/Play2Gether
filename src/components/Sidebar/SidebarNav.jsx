import React from 'react';
import NumberBadge from '../UI/NumberBadge';
import { Link } from 'react-router-dom';

const SidebarNav = (props) => {
    return (
        <ul className="sidebar__nav">
            <li><Link to="/"><i className="fas fa-th-list"></i>Browse games</Link></li>
            <li><a href="/"><i className="fas fa-heart"></i>Favourite</a></li>
            <li><a href="/"><i className="fas fa-user-friends"></i>Friends</a></li>
            <li><a href="/"><i className="fas fa-envelope"></i>Messages<NumberBadge value={props.notifications.messages} /> </a></li>
            <li><a href="/"><i className="fas fa-project-diagram"></i>Your rooms</a></li>
            <li><a href="/"><i className="fas fa-cog"></i>Settings</a></li>
        </ul>
    );
};

export default SidebarNav;