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
        <div className="container">
          <Header />
          
          <Route path="/searchResult" component={ Search } />          
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ () => <h2>Log In</h2> } />
          <MovieList />
          <Movie />
          
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
