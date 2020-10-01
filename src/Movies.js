import Axios from "axios";
import React, { Component } from "react";
import Posters from "./MoviePoster";
import Details from "./MovieDetails"

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      currentMovie: [],
    };
  }
  
  render() {
    const movies = this.props.movies;

    return (
      <div className="movies">
        <h2>Your Movie Choices Are....</h2>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h2 className="nowPlayingSign">Now Playing...</h2>
              {/* <h3>{movie.title}</h3> */}
              <Posters currentMovie={movie} /> 
              <Details movieId={movie.id} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movies;
