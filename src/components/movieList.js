
import React, { Component } from 'react';
import style from '../style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Movie from './movies';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

 
  render() {
    let movieTitles;
    
      movieTitles = this.props.movies.map(
        (data) => (
          <Movie result={data}/> //result devine prop
        )
      );
  
    return <div className="row">{movieTitles}
    </div>;
    }
  }

export default MovieList;