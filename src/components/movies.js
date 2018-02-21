import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movie: null
    }
    
    axios.get('http://localhost:8000/movies')
    .then(response => {
      console.log("got response:", response.data);
        this.setState({movie: response.data});
     
    }).catch(error => {
      console.log("error");
      this.setState({movie: []});
    });
  }

  render() {
    const movie = this.state.movie;
    if (!movie) {
      return <div>
        <h2>Loading...</h2>
      </div>
    }
     
    return (
      <div className="movie">
        <img className="poster" src={movie.Poster} alt='img' />
        <h2 className="header">{movie.Title} ({movie.Year})</h2> 
      </div>
    );
  }
}

export default Movie;
