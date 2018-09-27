import React, { Component } from 'react';
import PlayersList from './PlayersList';
import Message from './Message';
import RoomForm from './RoomForm';

class RoomChat extends Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
        <div className="room">
            <div className="room__chat">
                <div className="room__messages">
                    {this.props.messages.map((msg, index) => <Message key={index} message={msg.message} author={msg.author} time={msg.time} />)}
                    <div ref={(el) => {this.messagesEnd = el;}}></div>
                </div>
                <RoomForm gameId={this.props.gameId} roomId={this.props.roomId} />
            </div>
            <PlayersList />
        </div>
        );
    }
}

export default RoomChat;