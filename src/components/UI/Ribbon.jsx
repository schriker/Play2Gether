import React, {Fragment} from 'react';

const Ribbon = (props) => {
    
    let players = null;

    const classes = [
        "ribbon",
        "login-box__ribbon"
    ];

    if (props.pullRight) {
        classes.push("pull-right");
    }

    if(props.maxPlayers) {
        players = <Fragment>
                    <div className="ribbon__stats"><span className="text-red"><i className="fas fa-users"></i></span>{props.players} of {props.maxPlayers}</div>
                </Fragment> 
    }

    else {
        players = <Fragment>
                    <div className="ribbon__stats"><span className="text-red">{props.players} </span>PLAYERS</div>
                    <div className="ribbon__stats"><span className="text-red">{props.rooms} </span>ROOMS</div>
                </Fragment>
    }

    return (
        <div className={classes.join(" ")}>
            <h2>{props.title}</h2>
            {players}
        </div>
    );
};

export default Ribbon;