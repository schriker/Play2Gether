import React from 'react';

const NumberBadge = (props) => {
    return (
         <div className="sidebar__number">{props.value}</div>
    );
};

export default NumberBadge;