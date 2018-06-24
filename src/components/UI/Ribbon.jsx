import React from 'react';

const Ribbon = (props) => {

    const classes = [
        "ribbon",
        "login-box__ribbon"
    ];

    if (props.pullRight) {
        classes.push("pull-right");
    }

    return (
        <div className={classes.join(" ")}>
            <h2>{props.title}</h2>
            <div className="ribbon__stats"><span className="text-red">{props.players} </span>PLAYERS</div>
            <div className="ribbon__stats"><span className="text-red">{props.rooms} </span>ROOMS</div>
        </div>
    );
};

export default Ribbon;