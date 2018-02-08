import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';




class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Header />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
