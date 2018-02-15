import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Search from './components/searchComponent';




class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
