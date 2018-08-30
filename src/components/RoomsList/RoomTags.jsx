import React from 'react';

const RoomTags = (props) => {
    return (
        <ul className="single-room__tags">
            {props.tags.map((tag, id) => {
                const reg = /\S/gm;
                if(reg.test(tag)) {
                    return <li key={id}>{tag}</li>
                }
                else return null;  
            }) 
        }
        </ul>
    );
};

export default RoomTags;