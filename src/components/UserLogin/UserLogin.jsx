import React, { Component } from 'react';
import Ribbon from '../UI/Ribbon';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class UserLogin extends Component {

    state = {
        showRegister: false,
    }

    showRegister = () => {
        this.setState({showRegister: true});
    }

    hideRegister = () => {
        this.setState({showRegister: false});
    }

    render() {
        return (
            <div className="login-box">
                <RegisterForm hideRegister={() => this.hideRegister()} showRegister={this.state.showRegister} />
                <h1>Play your game with <span className="text-red">not random </span>players.</h1>
                <LoginForm showRegister={(e) => this.showRegister(e)} />
                <div className="login-box__row">
                    <Ribbon pullRight title="PUBG" players="942" rooms="125" />
                </div>
            </div>
        );
    }
}

export default UserLogin;