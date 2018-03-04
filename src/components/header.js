import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Redirect } from 'react-router-dom';
import { getAccessToken, logoutAction } from '../actions';
import Search from './searchComponent';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind( this );
    }
    handleClick() {
        this.props.logoutAction( this.props.accessToken);
    }
    render() {
        console.log('log out  red', this.props.logUserOut);
        if ( this.props.accessToken ) {
            return (            
                <div className="row bg-light">
                    <div className="col-10">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link to="/" className="navbar-brand">IMDb Clone</Link> 
                            <Search />                   
                            <ul className="navbar-nav">
                                <li  className="nav-item">
                                    <Link to="/" className="nav-link" onClick={ this.handleClick }>Logout</Link>
                                </li>
                            </ul>          
                        </nav>
                    </div>
                </div>      
            )
         } else {
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
}
function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getAccessToken, logoutAction }, dispatch);
}
function mapStateToProps( state ) {
    return {
        accessToken: state.accessToken,
        logUserOut: state.loggedOut
    };  
}

export default connect( mapStateToProps, mapDispatchToProps )( Header );
