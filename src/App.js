import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import MovieList from './components/movieList';
import Movie from './components/movies';
import Register from './components/register';
import Search from './components/searchComponent';




class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          
          <Route path="/search/:categ/:query" component={ (props) => [<h1>Search </h1>,<p>{props.match.params.categ}</p>,<p>{props.match.params.query}</p>] } />          
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ () => <p>Log In</p> } />
          
          <MovieList />
          <Movie />
          
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
