import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search__input">
            <div className="search__icon"><i className="fas fa-search"></i></div>
            <input value={props.value} onChange={props.onSearch} placeholder="Search" type="text" name="Search" id="search" />
        </div>
    );
};

export default SearchBar;