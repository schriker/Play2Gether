import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';
import UserLogin from './components/UserLogin/UserLogin';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {

  componentDidMount() {
    document.getElementsByTagName('body')[0].classList.add('main-body-bg'); // Add if is main page!
  }
  

  render() {

    let content = null;

    if (!this.props.auth) {
      content = <UserLogin />
    }
    else { 
      content = (
        <Sidebar />
      )
    }

    return (
      <Layout>
        {content}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.user
  }
}

export default connect(mapStateToProps)(App);
