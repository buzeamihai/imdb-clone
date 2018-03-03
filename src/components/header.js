import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Search from './searchComponent';

class Header extends Component {
    render() {
        return (
            
                <div className="row bg-light">
                    <div  className="col-10 navbarSprite">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link to="/" className="navbar-brand">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" width="100px"/>
                            </Link> 
                            <Search />                   
                            <ul className="navbar-nav">
                                <li  className="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Log in</Link>
                                </li>
                            </ul>          
                        </nav>
                    </div>
                </div>
            
            
        );
    }
    
}

export default Header;
