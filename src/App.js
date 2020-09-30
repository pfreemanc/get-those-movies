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
      currentPage: null,

      
    }
  }

  handleClick = (event, yearChoice, sortChoice) => {
    event.preventDefault();
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?vote_count.gte=1000",
      dataResponse: "json",
      params: {
        api_key: "beabdb43f08aa5d9b3b495150f0ba136",
        sort_by: sortChoice,
        primary_release_year: yearChoice,
        page: this.state.currentPage,
      },
    }).then((result) => {
      console.log(result.data.page);
      console.log(result.data);
      const currentPage = result.data.page;
      const pageAmount = result.data.total_pages;
      const movies = result.data.results;
      this.setState({
        movies,
        pageAmount,
        currentPage,
      });
    });
  }


  render() {
    return (
      <div className="App wrapper">
        <h1>Test</h1>
        <Form handleClick={this.handleClick} />
        <Movies movies={this.state.movies} getPosters={this.getPosters}  />
      </div>
    );
  }
}

export default App;
