import React from 'react';

const GameItem = () => {
    return (
        <div className="game">
            <a href="/">
                <img className="fluid-img" src="img/games/fortnite.jpg" alt="" />
            </a>
            <div className="game__info">
                <div className="game__title">
                    <p>Fortnite</p>
                    1 356 Players
                </div>
                <div className="game__fav">
                    <i className="far fa-heart"></i>
                </div>
            </div>
        </div>
    );
};

export default GameItem;