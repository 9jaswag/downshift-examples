import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DownshiftOne from './DownshiftOne';
import DownshiftTwo from './DownshiftTwo';

class App extends Component {
  constructor(props) {
    super(props)
    this.books = [
      { name: 'Harry Potter' },
      { name: 'Net Moves' },
      { name: 'Half of a yellow sun' },
      { name: 'The Da Vinci Code' },
      { name: 'Born a crime' },
    ]

  }

  onChangeOne(selectedBook) {
    alert(`your favourite book is ${selectedBook.name}`)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DownshiftOne items={this.books} onChange={this.onChangeOne} />
        <DownshiftTwo />
      </div>
    );
  }
}

export default App;
