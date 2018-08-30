import React from 'react';

const Loader = (props) => {
    return (
        <div className={`loader loader--${props.type}`}>
            <div><span></span><span></span><span></span><span></span><span></span></div>
        </div>
    );
};

export default Loader;