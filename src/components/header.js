import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Search from './searchComponent';

class Header extends Component {
    render() {
        return (
            
                <div className="row bg-light">
                    <div className="col-10">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link to="/" className="navbar-brand">IMDb Clone</Link> 
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
