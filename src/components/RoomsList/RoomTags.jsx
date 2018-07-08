import React from 'react';

const RoomTags = (props) => {
    return (
        <ul className="single-room__tags">
            {props.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    );
};

export default RoomTags;