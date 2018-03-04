import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import accessTokenReducer from './accessTokenReducer';
import loggedOutReducer from './loggedOutReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    accessToken: accessTokenReducer,
    loggedOut: loggedOutReducer
});


export default rootReducer;
