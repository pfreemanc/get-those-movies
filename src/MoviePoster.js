import React, { Component } from 'react';

// movie images/overview text rendering.

class Posters extends Component {
  

  getPosters = (movie) => {
    const posterPath = movie.poster_path;
    const posterImage = `https://image.tmdb.org/t/p/w300${posterPath}`;
    return posterImage;
  };
  
  render() {
    const movie = this.props.currentMovie;

    return (
      <div
        className="imageContainer"
      >
        <img src={this.getPosters(movie)} alt={`${movie.title} poster`} />
      </div>
    );
  }
}

export default Posters;