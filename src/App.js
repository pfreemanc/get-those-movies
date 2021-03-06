import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form.js'
import Movies from './Movies.js'

class App extends Component{

  constructor() {
    super();
    this.state = {
      movies: [],
      buttonTriggered: false,
    }
  }

  handleClick = (event, yearChoice, sortChoice) => {
    this.setState({
      buttonTriggered: true,
    })

    event.preventDefault();
    // initial axios call 
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?vote_count.gte=1000",
      dataResponse: "json",
      params: {
        api_key: "beabdb43f08aa5d9b3b495150f0ba136",
        sort_by: sortChoice,
        primary_release_year: yearChoice,
      },
    }).then((result) => {
      const movies = result.data.results;
      this.setState({
        movies,
      });
    });
  }

  render() {
    return (
      <div className="App wrapper">
        <h1>Wanna go to the movies with me?</h1>
        <Form handleClick={this.handleClick} />
        {this.state.buttonTriggered ? (
          <Movies movies={this.state.movies} getPosters={this.getPosters} />
        ) : null}
        <footer>
          <p>
            Created at <a href="https://junocollege.com/">Juno College</a> by
            <a href="https://www.paigelongname.com/"> Paige Freeman-Cyopeck</a> , powered by the MovieDB API
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
