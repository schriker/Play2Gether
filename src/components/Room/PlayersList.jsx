import React from 'react';

const PlayersList = () => {
    return (
        <div className="room__users">
            <div className="user-online">
                <div className="msg__avatar">
                    <i className="fas fa-user"></i>
                    <div className="status status--online msg__avatar__dot"></div>
                </div>
                <p>schriker</p>
            </div>
        </div>
    );
};

export default PlayersList;