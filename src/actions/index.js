import { GET_MOVIES, ACCESS_TOKEN, LOGGED_OUT } from './types';
import { SEARCH_MOVIE } from './types';
import { GET_DETAILS } from './types';
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


export function getMovies(page=1) {

    console.log(page);
    const url = 'http://localhost:8000/movies?take=10&skip=';
    const result = axios.get(`${url}${(page-1)*10}`);
    
    
    return {
        type: GET_MOVIES,
        payload: result       
    }
}


export function getDetails(id) {
    const result = axios.get(`http://localhost:8000/movies/${id}`)
       return {
             type: GET_DETAILS,
             payload: result       
         }
}

export function getAccessToken( name, password ) {    
    const response = axios({
        method: 'post',
        url: 'http://localhost:8000/auth/login',
        data: `username=${ name }&password=${ password }`
    });           
    return {
        type: ACCESS_TOKEN,
        payload: response      
    }
}
export function registerAction( name, password ) {    
    const response = axios({
        method: 'post',
        url: 'http://localhost:8000/auth/register',
        data: `username=${ name }&password=${ password }`
    });           
    return {
        type: ACCESS_TOKEN,
        payload: response      
    }
}
export function logoutAction( token ) {   
    const response = axios({
        method: 'get',
        headers:  {
            'X-Auth-Token': token
        },        
        url: 'http://localhost:8000/auth/logout',
    });              
    return {
        type: LOGGED_OUT,
        payload: response      
    }
}
export function editMovie ( token, aidiul ) {
    console.log('token este :', token ,'id este: ', aidiul);
    const response = axios({
        method: 'put',
        headers: {
            'X-Auth-Token': token
        },
        url: `http://localhost:8000/movies/${aidiul}`,
        data: { 'Year': 2009 }
    });

    return {
        type: GET_DETAILS,
        payload: response
    }
}
