import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    id: detailsReducer
    
});

export default rootReducer;
