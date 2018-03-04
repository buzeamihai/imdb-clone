import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import Register from './components/register';
import SearchPage from './components/searchPage';

import LoginPage from './components/login';
import Movie from './components/movies';
import MovieDetails from './components/movieDetails';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container-fluid">
          <Header />     
          <Route exact path='/' component = { Homepage } />
          
          <Route path="/search/:categ/:query" component={ SearchPage } />         
          <Route path="/register" component={ Register } />
          
          <Route path="/login" component={ LoginPage } />
          <Route path="/movies/:id" component={ MovieDetails } />  
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
