import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form.js'
import Movies from './Movies.js'
import swal from 'sweetalert';

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
      const pageAmount = result.data.total_pages;
      const movies = result.data.results;
      this.setState({
        movies,
        pageAmount,
      });
    });
  }

  render() {
    return (
      <div className="App wrapper">
        <h1>Wanna go to the movies with me?</h1>
        <Form handleClick={this.handleClick} />
        {this.state.buttonTriggered ? 
        (<Movies movies={this.state.movies} getPosters={this.getPosters} />)
        : null
        }
      </div>
    );
  }
}

export default App;
