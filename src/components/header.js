import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="container">
                <Link to="/" className="left brand-logo">Imdb Clone</Link>                    
                <div className="row right">
                    <Link to="/searchResults" className="col s4" >Search</Link>
                    <Link to="/register" className="col s4">Register</Link>
                    <Link to="/login" className="col s4">Log in</Link>
                </div>            
            </header>
        );
    }
}

export default Header;