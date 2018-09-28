import React, {Fragment} from 'react';
import Loader from '../UI/Loader';

const Message = (props) => {
    let time = null;
    let content = <Loader type="white-bg" />;
    let msgClass = "msg";
    if(props.uid === props.authorUid) {
        console.log("Test")
        msgClass = "user-msg";
    }
    if (props.time) {
        time = props.time.toDate().toLocaleString();
        content =   <Fragment>
                        <div className={`${msgClass}__avatar`}>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className={`${msgClass}__content`}>
                            <p>{props.author}<span>{time}</span></p>
                            {props.message}
                        </div>
                    </Fragment>              
    }
    return (
         <div className={msgClass}>
            {content}
        </div>
    );
};

export default Message;