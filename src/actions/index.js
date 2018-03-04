import { GET_MOVIES, ACCESS_TOKEN, LOGGED_OUT } from './types';
import { SEARCH_MOVIE } from './types';

import axios from 'axios';

export function searchMovie(categ, query) {
    const url = 'http://localhost:8000/movies';
    const result = axios.get(`${url}?${categ}=${query}`);    
    return {
            type: SEARCH_MOVIE,
            payload: result       
    }
}


export function getMovie() {
    const result = axios.get('http://localhost:8000/movies')
       return {
             type: GET_MOVIES,
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
    console.log('actiune log out');  
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