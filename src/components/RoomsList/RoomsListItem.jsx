import React, { Component } from 'react';
import RoomOptions from './RoomOptions';
import RoomTags from './RoomTags';

class RoomsListItem extends Component {
    render() {
        return (
            <div className="single-room">
                <div className="single-room__info">
                    <div className="single-room__players">
                        <i className="fas fa-users"></i>
                        <span>2/4</span>
                    </div>
                    <div className="single-room__name">
                        <h3><a href="/">Starlight Vision</a></h3>
                        <p>20+ wins and mic required.</p>
                    </div>
                    <RoomTags tags={this.props.tags} />
                    <div className="single-room__join pull-right">
                        <a href="/"><i className="far fa-heart pull-right"></i></a>
                        <a href="/" className="btn btn--grey">Join</a>
                    </div>
                </div>
                <RoomOptions voiceChat={this.props.voiceChat} platform={this.props.platform} region={this.props.region} />
            </div>
        );
    }
}

export default RoomsListItem;