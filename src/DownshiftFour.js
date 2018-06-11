import React, { Component } from 'react'
import DownshiftInputField from './DownshiftInputField';

export default class DownshiftFour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [
        { name: 'Harry Potter' },
        { name: 'Net Moves' },
        { name: 'Half of a yellow sun' },
        { name: 'The Da Vinci Code' },
        { name: 'Born a crime' },
      ],
      movies: [
        { name: 'Harry Potter' },
        { name: '12 Strong' },
        { name: 'Half of a yellow sun' },
        { name: 'Gringo' },
        { name: 'Black Panther' },
      ],
      favouriteBook: '',
      favouriteMovie: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onBookChange = this.onBookChange.bind(this);
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    alert(`
    Movie: ${this.state.favouriteMovie}
    Book: ${this.state.favouriteBook}
    has been submitted
    `)
  }

  onBookChange(selectedBook) {
    this.setState({ favouriteBook: selectedBook.name })
  }

  onMovieChange(selectedMovie) {
    this.setState({ favouriteMovie: selectedMovie.name })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <DownshiftInputField
          books={this.state.books}
          onChange={this.onBookChange}
          label="Select your favourite book"
          placeholder="Search your favourite book" />

        <DownshiftInputField
          books={this.state.movies}
          onChange={this.onMovieChange}
          label="Select your favourite movie"
          placeholder="Search your favourite movie" />

        <input type="submit" value="Submit" className="dropdown-button" />
      </form>
    )
  }
}
