import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import Register from './components/register';
import SearchPage from './components/searchPage';


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container-fluid">
          <Header />          
          <Route exact path='/' component = { Homepage } />
          <Route path="/search/:categ/:query" component={ SearchPage } />         
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ () => <h2>Log In</h2> } />
          <Link to="/movies" className="col s4"></Link>
         
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
