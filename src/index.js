import React from 'react';
import ReactDOM from 'react-dom';

import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import  ReduxPromise  from 'redux-promise';
import 'materialize-css/dist/css/materialize.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';




import App from './App';

//const myStore = createStore( , {}, applyMiddleware( ReduxPromise  ));

ReactDOM.render( <App />, document.getElementById('root') );