import React from 'react';

const RoomHeader = (props) => {
    return (
        <div className="single-room__name">
            <h3><a href="/">{props.name}</a></h3>
            <p>{props.desc}</p>
        </div>
    );
};

export default RoomHeader;