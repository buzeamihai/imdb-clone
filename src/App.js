import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import MovieList from './components/movieList';
import Movie from './components/movies';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Header />
          <MovieList />
          <Movie />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
