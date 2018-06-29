import React from 'react';

const Filter = () => {
    return (
        <div className="filters">
            <ul>
                <li><a href="/"><i className="fas fa-sort"></i>Name</a></li>
                <li><a href="/"><i className="fas fa-sort"></i>Popularity</a></li>
            </ul>
        </div>
    );
};

export default Filter;