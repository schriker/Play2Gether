import React, { Component } from 'react';
import Ribbon from '../UI/Ribbon';
import LoginForm from './LoginForm';

class UserLogin extends Component {
    render() {
        return (
            <div className="login-box">
                <h1>Play your game with <span className="text-red">not random </span>players.</h1>
                <LoginForm isSending={false} />
                <div className="login-box__row">
                    <Ribbon pullRight title="PUBG" players="942" rooms="125" />
                </div>
            </div>
        );
    }
}

export default UserLogin;