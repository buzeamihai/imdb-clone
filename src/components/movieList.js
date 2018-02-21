
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import Movie from './movies';
//import style from '../style.css';
//import  { PropTypes } from 'react';
//import axios from 'axios';

class MovieList extends Component {
  constructor() {
    super();
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
        <h2 key={ data.id }>{data.Title}</h2>
        <img key={ data.id } src={data.Poster} alt='img'/>
        </div>)
      );
    } else {
      movieTitles = <h1>Working</h1>;
    }
  
    return <div>{movieTitles}</div>;
  }
  }

export default MovieList;