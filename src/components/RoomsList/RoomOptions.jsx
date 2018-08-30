import React from 'react';

const RoomOptions = (props) => {
    return (
        <ul className="single-room__options">
            {props.voiceChat ? <li><i className="fas fa-microphone"></i>Voicechat</li> : null}
            <li><i className="fas fa-gamepad"></i>{props.platform}</li>
            <li><i className="fas fa-globe"></i>{props.region}</li>
        </ul>
    );
};

export default RoomOptions;