import React from 'react';

const UserStatus = (props) => {
    return (
        <div className={`status status--${props.online ? 'online' : 'offline'}`}></div>
    );
};

export default UserStatus;