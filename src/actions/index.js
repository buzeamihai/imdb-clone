import { GET_MOVIES } from './types';
import { SEARCH_MOVIE } from './types';
import axios from 'axios';

export function searchMovie(categ, query) {
    const url = 'http://localhost:8000/movies';
    let queryString = "";
    const allCategory = ["Title", "Year", "Runtime", "Genre", "Language", "Country", "Poster", "imdbRating", "imdbVotes", "imdbVotes", "imdbID", "Type"]
    if (categ == "All") {
        for ( let i of allCategory) {
            queryString += `&${i}=${query}`;
        }
        queryString = queryString.substring(1);
    } else { queryString = `${categ}=${query}` } 
    
    const result = axios.get(`${url}?${queryString}`);
    
    console.log(result);

    
    
    return {
            type: SEARCH_MOVIE,
            payload: result       
    }
}


export function getMovies(movies) {
    const result = axios.get('http://localhost:8000/movies')
        console.log(result)
       return {
             type: GET_MOVIES,
             payload: result       
         }
}