import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.clicked} className={`btn btn--${props.type}`}>{props.value}</button>
    );
};

export default Button;