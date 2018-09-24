import React from 'react';
import PlayersList from './PlayersList';
import Message from './Message';

const RoomChat = () => {
    return (
    <div className="room">
                        <div className="room__chat">
                            <Message />
                            <form action="">
                                <input placeholder="Your meassage" type="text" name="msg" id="msg" /><input className="btn btn--red" type="submit" value="Submit" />
                            </form>
                        </div>
                        <PlayersList />
                    </div>
    );
};

export default RoomChat;