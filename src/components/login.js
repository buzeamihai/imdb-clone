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
            <div className="row justify-content-center mt-3">
                <div className="col-md-5">
                    <h5 class="contact">Log in</h5>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <input type="text" className="form-control bg-light" placeholder={ this.state.name } onChange={ this.setName } />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control bg-light" placeholder={ this.state.password } onChange={ this.setPassword }/>
                        </div>
                        <button type="submit" class="btn btn-secondary float-right"> Login </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default LoginPage;