import React from 'react';
import Ribbon from '../UI/Ribbon';
import GameThumbnail from '../Games/GameThumbnail';

const RoomsHeader = (props) => {
    return (
        <div className="room-header">
            <GameThumbnail id={props.id} src={props.src} name={props.name} width="165" />
            <Ribbon title={props.name} maxPlayers={props.maxPlayers} players={props.players} rooms={props.rooms} />
        </div>
    );
}

export default RoomsHeader;