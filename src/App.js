import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Register from './components/register';




class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/search" component={ () => <h2>Search Results</h2>} />          
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ () => <h2>Log In</h2> } />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
