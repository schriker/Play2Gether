import React from 'react';

const SearchBar = () => {
    return (
        <div className="search__input">
            <div className="search__icon"><i className="fas fa-search"></i></div>
            <input placeholder="Search" type="text" name="Search" id="search" />
        </div>
    );
};

export default SearchBar;