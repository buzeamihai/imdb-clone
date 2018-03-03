
import React, { Component } from 'react';
import style from '../style.css';

import Movie from './movies';
import Pagination from './pagination';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

 
  render() {
    let movieTitles;
    movieTitles = this.props.movies.map((data) => (
          <Movie result={data}/> //result devine prop
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