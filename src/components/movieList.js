
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Movie from './movie';
import style from '../style.css';
import  { PropTypes } from 'react';
import axios from 'axios';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    fetch('http://localhost:8000/movies').then(response => {
      response.json().then(data => {
        this.setState({
          data: data.results
        })
      })
    })
  }
  

    
  
  render() {
    let movieTitles;
    
    if (this.state.data.length) {
      movieTitles = this.state.data.map(
        (data) => (
        <div>
        <h2>{data.Title}</h2>
        <img src={data.Poster} />
        </div>)
      );
    } else {
      movieTitles = <h1>Working</h1>;
    }
  
    return <div>{movieTitles}</div>;
  }
  }

export default MovieList;