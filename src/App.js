import React, { Component, Fragment } from 'react';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';
import UserLogin from './components/UserLogin/UserLogin';
import Sidebar from './components/Sidebar/Sidebar';
import GamesList from './components/Games/GamesList';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount() {

    this.props.authStateChange();
    document.getElementsByTagName('body')[0].classList.add('main-body-bg');
  }
  

  render() {

    let content = null;

    if (!this.props.auth) {
      content = <UserLogin />
    }
    else { 
      content = (
        <Fragment>
          <Sidebar />
          <div className="main">
              <GamesList />
          </div>
        </Fragment>
      )
    }

    return (
      <Layout>
        {content}
      </Layout>
    );
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
