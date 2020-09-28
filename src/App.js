import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{

  constructor() {
    super();
    this.state = {
      yearChoice:'',
      movies: [],
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?vote_count.gte=1000",
      dataResponse: "json",
      params: {
        api_key: "beabdb43f08aa5d9b3b495150f0ba136",
        sort_by: "popularity.desc",
        primary_release_year: this.state.yearChoice,
      },
    }).then((result) => {
      this.setState({
        movies: result.data.results,
      });
    });
  }



  handleChange = (event) => {
    // console.log(event.target.value);
    // updating state for year choice
    this.setState({
      yearChoice: event.target.value,
    })
  }

  getPosters = (movie) => {
    const posterPath = movie.poster_path;
    const posterImage =
      `https://image.tmdb.org/t/p/w300${posterPath}`;
    return posterImage;
  }


  render() {
    return (
      <div className="App wrapper">
        <h1>Test</h1>

        <div className="form">
          <form action="">
            <label htmlFor="yearChoice">Input a year to see the top movies!</label>
            <input type="number" name="yearChoice" id="yearChoice" onChange={this.handleChange} value={this.state.yearChoice}/>
            <input type="submit" onClick={this.handleClick} value="Show me those movies!"/>
          </form>
          <div className="movies">
            <h2>Movies</h2>
            {this.state.movies.map(movie => {
              return(
                <div>
                  <h3>{movie.title}</h3>
                  <div className="imageContainer">
                    <img src={this.getPosters(movie)} alt=""/>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
