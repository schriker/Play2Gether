import React, {Fragment} from 'react';
import Loader from '../UI/Loader';

const Message = (props) => {
    let time = null;
    let content = <Loader type="white-bg" />;
    if (props.time) {
        time = props.time.toDate().toLocaleString();
        content =   <Fragment>
                        <div className="msg__avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="msg__content">
                            <p>{props.author}<span>{time}</span></p>
                            {props.message}
                        </div>
                    </Fragment>              
    }
    return (
         <div className="msg">
            {content}
        </div>
    );
};

export default Message;