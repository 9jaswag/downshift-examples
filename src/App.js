import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DownshiftOne from './DownshiftOne';
import DownshiftTwo from './DownshiftTwo';
import DownshiftThree from './DownshiftThree';
import DownshiftFour from './DownshiftFour';
import DownshiftFive from './DownshiftFive';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <DownshiftOne />
        <DownshiftTwo />
        <DownshiftThree />
        <DownshiftFour /> */}
        <DownshiftFive />
      </div>
    );
  }
}

export default App;
