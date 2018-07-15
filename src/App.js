import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './components/UserLogin/UserLogin';
import Sidebar from './components/Sidebar/Sidebar';
import GamesList from './components/Games/GamesList';
import RoomsList from './components/RoomsList/RoomsList';
import Room from './components/Room/Room';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount() {
    this.props.authStateChange();
    document.getElementsByTagName('body')[0].classList.add('main-body-bg');
  }
  

  render() {

    let content = null;

    if (!this.props.auth) {
      content = (
        <Router>
          <Layout>
            <div className="login-container">
              <UserLogin />
            </div>
          </Layout>
        </Router>
      )
    }
    else { 
      content = (
        <Router>
          <Layout>
            <div className="container">
              <Sidebar />
              <div className="main loader-container">
                <Switch>
                  <Route path="/game/:id/room/:roomId" component={Room}></Route>
                  <Route path="/game/:id" component={RoomsList}></Route>
                  <Route path="/" component={GamesList} />
                </Switch>
              </div>
            </div>
          </Layout>
        </Router>
      )
    }
    return (content);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authStateChange: () => dispatch(actions.authStateChange())
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
