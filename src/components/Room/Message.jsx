import React from 'react';

const Message = (props) => {
    const time = props.time.toDate().toLocaleString();
    return (
        <div className="msg">
            <div className="msg__avatar">
                <i className="fas fa-user"></i>
            </div>
            <div className="msg__content">
                <p>{props.author}<span>{time}</span></p>
                {props.message}
            </div>
        </div>
    );
};

export default Message;