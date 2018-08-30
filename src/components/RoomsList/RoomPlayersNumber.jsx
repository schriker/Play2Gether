import React from 'react';

const RoomPlayersNumber = (props) => {
    return (
        <div className="single-room__players">
            <i className="fas fa-users"></i>
            <span>{props.players}/{props.maxPlayers}</span>
        </div>
    );
};

export default RoomPlayersNumber;