import { GET_MOVIE } from './types';
import { SEARCH_MOVIE } from './types';
import axios from 'axios';

export function searchMovie(categ, query) {
    const url = 'http://localhost:8000/movies';

    const result = axios.get(`${url}?${categ}=${query}`);
    
    console.log(result);
    
    return {
            type: SEARCH_MOVIE,
            payload: result       
    }
}