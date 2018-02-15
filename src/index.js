import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import  ReduxPromise  from 'redux-promise';
import thunk from 'redux-thunk';


// const myStore = createStore(, {}, applyMiddleware( ReduxPromise  ));


ReactDOM.render(
    <App />
       
, document.getElementById('root')
);



