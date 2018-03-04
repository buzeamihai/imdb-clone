import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getAccessToken } from '../actions';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter your name...',
            password: 'Enter your password...'
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
    handleSubmit(e) {
        this.props.getAccessToken( this.state.name, this.state.password );        
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
            <button type="submit"> Login </button>
          </form>
        );
    }
}
function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getAccessToken }, dispatch);
}
function mapStateToProps( state ) {
    return {
        accessToken: state.accessToken
    };  
}
export default connect( mapStateToProps, mapDispatchToProps )(LoginPage);