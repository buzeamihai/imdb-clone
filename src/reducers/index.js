import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import accessTokenReducer from './accessTokenReducer';
import loggedOutReducer from './loggedOutReducer';
import detailsReducer from './detailsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    id: detailsReducer,
    search: searchReducer,
    accessToken: accessTokenReducer,
    loggedOut: loggedOutReducer     
});

export default rootReducer;
