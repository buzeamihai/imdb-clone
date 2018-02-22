import React, { Component } from 'react';
import axios from 'axios';
//import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter your name...',
            password: 'Enter your password...',
            isAuthenticated: false,
            authToken: null
        }
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
    }
    setName(event) {
        this.setState({ name: event.target.value }); 
    }
    setPassword(event) {
        this.setState({ password: event.target.value });
    }
    storeToken( res ) {
        this.setState({ 
            authToken: res.data.accessToken,
            isAuthenticated: res.data.authenticated            
        });
    }
    loginPost() {
        return axios({
            method: 'post',
            url: 'http://localhost:8000/auth/login',
            data: `username=${ this.state.name }&password=${ this.state.password }`,            
          }).then( res => this.storeToken(res), err => console.warn(err));
    }
   
    handleSubmit(e) {
        this.loginPost();
        console.log(this.state.isAuthenticated);
        e.preventDefault();
    }
    render() {
        if(this.state.isAuthenticated) {
            return <div>Success</div>;
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
            <button type="submit"> Login </button>
          </form>
        );
    }
}
export default LoginPage;