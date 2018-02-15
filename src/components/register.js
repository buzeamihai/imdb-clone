import React, { Component } from 'react';
import './register.css';
import axios from 'axios';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter your name...',
            password: 'Set a password...',
            repassword: 'Retype your password...',
            authToken: ''
        }        
        
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setRepassword = this.setRepassword.bind(this);
        this.handleClick = this.handleClick.bind(this);     
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
        console.log( this.state.repassword);
    }
    setLocalStorage(name, token ) {
        localStorage.setItem(name, token);
    } 
    postToServer() {
        return axios({
            method: 'post',
            url: 'http://localhost:8000/auth/register',
            data: `username=${ this.state.name }&password=${ this.state.password }`,
            
          }).then( res => this.storeToken(res), err => console.warn(err));
    }
    storeToken( res ) {
        this.setState({ authToken: res.data.accessToken });
        console.log( this.state.authToken);
    }
    handleClick(e) {
        this.postToServer();

        if ( Object.keys(localStorage).indexOf( this.state.name) > -1) {
            alert('already a member, proceed to login page');
        } else if ( this.state.name && this.state.password === this.state.repassword ) {
            this.setLocalStorage( this.state.name, this.state.password );
            alert('You registered successfully');       
        } else {
            alert ('Please try again');
        }

        e.preventDefault();
    }
    render() {
        return (
          <form className="form register-form" onSubmit={this.handleSubmit}>
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
            <button onClick={ this.handleClick }> Submit</button>
          </form>
        );
    }
}
export default Register;