import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  ReduxPromise  from 'redux-promise';
import 'materialize-css/dist/css/materialize.min.css';



//const myStore = createStore( , {}, applyMiddleware( ReduxPromise  ));

ReactDOM.render( <App />, document.getElementById('root') );