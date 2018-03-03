import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import detailsReducer from './detailsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    id: detailsReducer,
    search: searchReducer  
});

export default rootReducer;
