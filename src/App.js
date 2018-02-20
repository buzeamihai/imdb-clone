import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import Register from './components/register';
import Search from './components/searchComponent';


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Header />
          <Homepage />
          <Route path="/searchResult" component={ Search } />          
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ () => <h2>Log In</h2> } />
          <Link to="/movies" className="col s4"></Link>
         
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
