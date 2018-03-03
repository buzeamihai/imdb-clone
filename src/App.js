import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import Register from './components/register';
import SearchPage from './components/searchPage';

import LoginPage from './components/login';


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container-fluid">
          <Header />       
          <Route exact path='/' component = { Homepage } />
          
          <Route path="/search/:categ/:query" component={ SearchPage } />         
          <Route path="/register" component={ Register } />
          
          <Link to="/movies"></Link>
          <Route path="/login" component={ LoginPage } />        
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
