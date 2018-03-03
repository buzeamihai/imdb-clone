import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Search from './searchComponent';

class Header extends Component {
    render() {
        return (
            
                <div className="row bg-light justify-content-center">
                    <div className="col-md-10">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link to="/" className="navbar-brand col-md-3 col-sm-10">IMDb Clone</Link> 
                            <Search className="col-md-7 col-sm-10"/>                   
                            <ul className="navbar-nav col-md-2 col-sm-10">
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
