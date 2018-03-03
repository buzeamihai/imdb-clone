import React, { Component } from 'react';
import style from '../style.css';
import { bindActionCreators } from 'redux';
import { Link, Route } from 'react-router-dom';

import Movie from './movies';
import Pagination from './pagination';
import MovieDetails from './movieDetails';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectMovie: {},
    }
  }

  selectMovie = (data) => {
    this.setState({
      selectMovie: data
    });
  }


  render() {
    let movieTitles;
    movieTitles = this.props.movies.map(
      (data) => ( //result devine props
        <Link to={`/movies/${data._id}`}>
          <Movie result={data} selectMovie={this.selectMovie}/> 
        </Link>
      )  
    );
  
    return (
      <div>
        <div className="row">
          { movieTitles }
        </div>
        <Pagination pagination={this.props.pagination} path={this.props.path} />
      </div>
      )
  
    }
  }

export default MovieList;