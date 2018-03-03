import React, { Component } from 'react';
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
    handleSubmit(e) {
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
            <div className="row justify-content-center mt-3">
                <div className="col-md-5">
                    <h5 class="contact">Register</h5>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <input type="text" className="form-control bg-light"  placeholder={ this.state.name } onChange={ this.setName } />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control bg-light"  placeholder={ this.state.password } onChange={ this.setPassword }/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control bg-light" placeholder={ this.state.repassword } onChange={this.setRepassword}/>
                        </div>
                        <button type="submit" class="btn btn-secondary float-right"> Register </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Register;