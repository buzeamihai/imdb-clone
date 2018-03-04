import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerAction } from '../actions';
import { Redirect } from 'react-router-dom';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter your name...',
            password: 'Set a password...',
            repassword: 'Retype your password...',
        }        
        
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setRepassword = this.setRepassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
        this.setLocalStorage = this.setLocalStorage.bind(this);
    }
    setName(event) {
        this.setState({ name: event.target.value }); 
    }
    setPassword(event) {
        this.setState({ password: event.target.value });
    }
    setRepassword(event) {
        this.setState({ repassword: event.target.value });
    }
    setLocalStorage(name, token ) {
        localStorage.setItem(name, token);
    } 
    handleSubmit(e) {
        this.props.registerAction( this.state.name, this.state.password );

        if ( Object.keys(localStorage).indexOf( this.state.name) > -1) {
            alert('already a member, proceed to login page');
        } else if ( this.state.name && ( this.state.password === this.state.repassword ) ) {
            this.setLocalStorage( this.state.name, this.state.password );
            alert('You registered successfully');       
        } else {
            alert ('Please try again');
        }
        e.preventDefault();    
    }
    render() {
        if ( this.props.accessToken ) {
            return <Redirect to="/" />
        }
        return (
          <form className="form register-form" onSubmit={ this.handleSubmit }>
            <label>
              Name:
              <input type="text" placeholder={ this.state.name } onChange={ this.setName } />
            </label>
            <label>
              Password:
              <input type="password" placeholder={ this.state.password } onChange={ this.setPassword }/>
            </label>
            <label>
              Check password:
              <input type="password" placeholder={ this.state.repassword } onChange={this.setRepassword}/>
            </label>
            <button type="submit"> Register </button>
          </form>
        );
    }
}
function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ registerAction }, dispatch);
}
function mapStateToProps( state ) {
    return {
        accessToken: state.accessToken
    };  
}
export default connect( mapStateToProps, mapDispatchToProps )(Register);