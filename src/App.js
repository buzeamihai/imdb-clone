import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import Register from './components/register';
import Search from './components/searchComponent';
import LoginPage from './components/login';


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container-fluid">
          <Header />          
          <Route exact path="/" component={ Homepage } />
          <Route path="/search/:categ/:query" component={ (props) => [<h1>Search </h1>,<p>{props.match.params.categ}</p>,<p>{props.match.params.query}</p>] } />         
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ () => <h2>Log In</h2> } />
          <Link to="/movies" className="col s4"></Link>
          <Route path="/login" component={ LoginPage } />        
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
