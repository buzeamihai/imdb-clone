import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import Register from './components/register';
import Search from './components/searchComponent';
import Login from './components/login';


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container-fluid">
          <Header />          
          <Homepage />
          <Route path="/search/:categ/:query" component={ (props) => [<h1>Search </h1>,<p>{props.match.params.categ}</p>,<p>{props.match.params.query}</p>] } />         
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <MovieList />
          <Movie />          
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
