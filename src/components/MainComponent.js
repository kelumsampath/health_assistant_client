import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer/>
      </div>
    );
  }
}

export default Main;
