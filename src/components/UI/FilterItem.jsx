import React from 'react';

//ASC - rosnąco
//DESC - malejąco

const FilterItem = (props) => {

    let icon = <i className="fas fa-sort"></i>;
    let newValue = null;

    switch(props.option.option) {
        case null:
            newValue = "DESC";
            break;
        case "DESC":
            newValue = "ASC";
            break;
        case "ASC":
            newValue = null;
            break;
        default: newValue = null
    }

    if (props.option.option === "DESC") {
        icon = <i className="fas fa-sort-amount-down"></i>
    }

    if (props.option.option === "ASC") {
        icon = <i className="fas fa-sort-amount-up"></i>
    }
    
    return (
        <li onClick={() => props.clicked(props.id, newValue)} >{icon}{props.option.value}</li>
    );
};

export default FilterItem;