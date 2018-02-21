import React from 'react';
import ReactDOM from 'react-dom';

import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import  ReduxPromise  from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import rootReducer from './reducers';


const myStore = createStore( rootReducer, {}, applyMiddleware( ReduxPromise  ));

ReactDOM.render(
    <Provider store={ myStore } > 
        <App />
    </Provider >, 
    document.getElementById('root') 
);
