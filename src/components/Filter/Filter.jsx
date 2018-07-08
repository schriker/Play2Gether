import React from 'react';
import FilterItem from './FilterItem';

const Filter = (props) => {
    return (
        <div className="filters">
            <ul>
                {props.options.map((option, id) => <FilterItem key={id} id={id} option={option} clicked={(id, method) => props.clicked(id, method)} />)}
            </ul>
        </div>
    );
};

export default Filter;