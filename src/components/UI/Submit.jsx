import React from 'react';
import Loader from '../UI/Loader';

const Submit = (props) => {
    return (
        <div className="loader-container">
            { props.isSending ? <Loader /> : null }
            <button className="btn btn--red">{props.value}</button>
        </div>
    );
};

export default Submit;