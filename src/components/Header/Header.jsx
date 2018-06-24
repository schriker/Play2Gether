import React from 'react';
import logo from '../../img/logo.png';
import Navigation from './Navigation/Navigation';
import Social from './Navigation/Social';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href="/"><img src={logo} alt="Play2Gether" /></a>
            </div>
            <Navigation />
            <a className="btn btn--grey-steam" href="/">Steam Login<i className="fab fa-steam-symbol"></i></a>
            <Social />
        </header>
    );
};

export default Header;