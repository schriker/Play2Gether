import React from 'react';
import { Link } from 'react-router-dom';

const RoomHeader = (props) => {
    return (
        <div className="single-room__name">
            <h3><Link to={`/game/${props.gameId}/room/${props.id}`}>{props.name}</Link></h3>
            <p>{props.desc}</p>
        </div>
    );
};

export default RoomHeader;