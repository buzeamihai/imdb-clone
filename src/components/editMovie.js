import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getAccessToken } from '../actions';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
    render() {
       return(
        <div className="form-group">   
                <input type="text" placeholder="new year" className="form-control bg-light"/>
       </div>
    )  
    }
}
export default EditMovie;