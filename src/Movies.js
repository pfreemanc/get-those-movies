import React, { Component } from "react";
import Posters from "./MoviePoster";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      buttonClicked: false,
      selectedMovie: "",
    };
  }

  render() {
    const movies = this.props.movies;
    return (
      <div className="movies">
        <h2>Movies</h2>
        {movies.map((movie) => {
          console.log(movie);
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <Posters currentMovie={movie} /> 
              <p>{movie.release_date}</p>  
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movies;
