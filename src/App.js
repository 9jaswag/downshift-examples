import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DownshiftOne from './DownshiftOne';

class App extends Component {
  constructor(props) {
    super(props)
    this.books = [
      { name: '' },
      { name: 'pear' },
      { name: 'orange' },
      { name: 'grape' },
      { name: 'banana' },
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DownshiftOne />
      </div>
    );
  }
}

export default App;
