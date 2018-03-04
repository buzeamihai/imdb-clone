
import React, { Component } from 'react';
import style from '../style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import MovieDetails from './movieDetails';
import Movie from './movies';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectMovie: {},
    }
    
  }

  selectMovie = (movie) =>{
    this.setState({
      selectMovie: movie
    });
  }

  render() {
    let movieTitles;
    
      movieTitles = this.props.movies.map(
        (data) => (
          <div className="col-sm-4">
            <h6>{data.Title}</h6>
            <a href='#'><img src={data.Poster} className="img-responsive" width="160px" height="223px" /></a>
          </div>
        )
      );
  
    return <div className="row">{ movieTitles}
    </div>;
    }
  }

export default MovieList;