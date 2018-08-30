import React from 'react';
import { CSSTransition } from 'react-transition-group';

const ErrorsList = (props) => {
    return (
        <CSSTransition in={props.showErr} timeout={200} classNames="fade" mountOnEnter unmountOnExit>
            <div className="login-box__err-msg">
                {props.errors.map(error => <p key={error}>{error}</p>)}
            </div>
        </CSSTransition>
    );
};

export default ErrorsList;