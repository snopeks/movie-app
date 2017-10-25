import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import HelloWorld from './HelloWorld'
import Search from './Search'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MovieLand!</h1>
        </header>
        <p className="App-intro">
          Search and collect your favorite movies!
        </p>
        <Search/>
        <HelloWorld/>
      </div>
    );
  }
}

export default Home;
