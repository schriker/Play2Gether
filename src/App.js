import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {

  componentDidMount() {
    document.getElementsByTagName('body')[0].classList.add('main-body-bg'); // Add if is main page!
  }
  

  render() {
    return (
      <Layout />
    );
  }
}

export default App;
