import { SEARCH_MOVIE } from './types';
import { GET_MOVIES } from './types';

import axios from 'axios';


export function getMovie(movies) {
    const result = axios.get('http://localhost:8000/movies')
        console.log(result)
       return {
             type: GET_MOVIES,
             payload: result       
         }
}