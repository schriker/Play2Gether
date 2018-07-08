import React, { Component } from 'react';
import Ribbon from '../UI/Ribbon';
import GameThumbnail from '../Games/GameThumbnail';

class RoomsHeader extends Component {
    render() {
        return (
            <div className="room-header">
                <GameThumbnail id={this.props.id} src={this.props.src} name={this.props.name} width="165" />
                <Ribbon title={this.props.name} players={this.props.players} rooms={this.props.rooms} />
            </div>
        );
    }
}

export default RoomsHeader;