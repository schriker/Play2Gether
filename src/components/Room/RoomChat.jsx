import React from 'react';
import PlayersList from './PlayersList';
import Message from './Message';

const RoomChat = (props) => {
    return (
        <div className="room">
            <div className="room__chat">
                {props.messages.map((msg, index) => <Message key={index} message={msg.message} author={msg.author} time={msg.time} />)}
                <form action="">
                    <input placeholder="Your meassage" type="text" name="msg" id="msg" /><input className="btn btn--red" type="submit" value="Submit" />
                </form>
            </div>
            <PlayersList />
        </div>
    );
};

export default RoomChat;