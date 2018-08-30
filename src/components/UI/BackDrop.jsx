import React from 'react';

const BackDrop = (props) => {
    return (
        <div onClick={props.close} className={`modal__backdrop ${props.extraCss}`}></div>
    );
};

export default BackDrop;