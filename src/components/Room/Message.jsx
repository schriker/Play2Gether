import React from 'react';

const Message = (props) => {
    let time = null;
    let msgClass = "msg";
    if(props.uid === props.authorUid) {
        msgClass = "user-msg";
    }
    props.time ? time = props.time.toDate().toLocaleString() : time = "Sending...";
              
    return (
         <div className={msgClass}>
            <div className={`${msgClass}__avatar`}>
                <i className="fas fa-user"></i>
            </div>
            <div className={`${msgClass}__content`}>
                <p>{props.author}<span>{time}</span></p>
                {props.message}
            </div>
        </div>
    );
};

export default Message;