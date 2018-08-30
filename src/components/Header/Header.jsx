import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import Navigation from './Navigation/Navigation';
import Social from './Navigation/Social';
import SidebarToggle from './Navigation/SidebarToggle';
import * as actions from '../../store/actions';


class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Play2Gether" /></Link>
                </div>
                <div className="hide-mobile-s navigation">
                    <Navigation />
                    <a className="btn btn--grey-steam" href="/">Steam Login<i className="fab fa-steam-symbol"></i></a>
                    <Social />
                </div>
                <SidebarToggle show={this.props.showMobileSidebar} clicked={(show) => this.props.toggleSidebar(show)} />
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showMobileSidebar: state.auth.showMobileSidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidebar: (show) => dispatch(actions.showMobileSidebar(show))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);