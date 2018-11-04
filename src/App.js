import React, { Component, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './components/UserLogin/UserLogin';
import { authStateChange } from './store/actions/index';

const GamesList = React.lazy(() => import('./components/Games/GamesList'));
const RoomsList = React.lazy(() => import('./components/RoomsList/RoomsList'));
const Room = React.lazy(() => import('./components/Room/Room'));
const Sidebar = React.lazy(() => import('./components/Sidebar/Sidebar'));

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
              <Suspense fallback={<div>Loading...</div>}>
                <Sidebar />
                <div className="main loader-container">
                    <Switch>
                      <Route path="/game/:id/room/:roomId" component={Room} />
                      <Route path="/game/:id" component={RoomsList} />
                      <Route path="/" component={GamesList} />
                    </Switch>
                </div>
              </Suspense>
            </div>
          </Layout>
        </Router>
      )
    }
    return (content);
  }
}

const mapDispatchToProps = {
  authStateChange
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
