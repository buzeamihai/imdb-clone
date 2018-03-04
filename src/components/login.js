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
function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getAccessToken }, dispatch);
}
function mapStateToProps( state ) {
    return {
        accessToken: state.accessToken
    };  
}
export default connect( mapStateToProps, mapDispatchToProps )(LoginPage);