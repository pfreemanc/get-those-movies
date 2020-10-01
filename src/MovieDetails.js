import React, { Component } from 'react';
import axios from 'axios'

class Details extends Component {
  constructor() {
    super();
    this.state = {
      runtime: '',
      releaseDate: '',
      averageVote: '',
      title: '',
    }
  }
  
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}`, {
      params: {
        api_key: "beabdb43f08aa5d9b3b495150f0ba136",
      },
    })
    .then((result) => {
      console.log(result.data);
      this.setState({
        releaseDate: result.data.release_date,
        runtime: result.data.runtime,
        averageVote: result.data.vote_average,
        title: result.data.title,
      })
  
    })
  }
  render() {
    return(
      <div className="movieDetails">
        <h3>{this.state.title}</h3>
        <p>Released On: {this.state.releaseDate}</p>
        <p>Runtime: {this.state.runtime} minutes</p>
        <p>Average Vote: {this.state.averageVote}</p>
      </div>
    )
  }
}

export default Details;