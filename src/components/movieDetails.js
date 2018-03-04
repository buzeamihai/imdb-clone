import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import style from '../style.css';
import { getDetails, editMovie, getAccessToken } from '../actions';

import EditMovie from './editMovie';

class MovieDetails extends Component{
    constructor(props){
        super(props);
        this.editSelectedMovie = this.editSelectedMovie.bind(this);  
    } 
    componentDidMount(){
        this.props.getDetails(this.props.match.params.id);
    }
   
    editSelectedMovie() {
        this.props.editMovie( this.props.accessToken, this.props.id._id );
    }
    render(){
        if(this.props.accessToken && this.props.id){
        return( 
            <div className="details container" >
                <div className="row">
                    <div className="row align-items-center">
                        <div className="col-xs-12 cardcont no-padding">
                            <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                                <h5>{this.props.id.Title}
                                    <span> ( {this.props.id.Year} )</span>
                                    <span className="tagline">{this.props.id.Genre}</span>
                                </h5>
                                <h6>With: <span className="actors">{this.props.id.Actors}</span></h6>
                                <p class="plot">{this.props.id.Plot}</p>
                                <div className="additional-details">
                                    <span className="production-list"></span>
                                    <div className="row nopadding release-details">
                                    <div className="col-xs-6">Released:
                                        <span className="meta-data">{this.props.id.Released}</span>
                                    </div>
                                     <div class="col-xs-6">Runtime:
                                        <span className="meta-data">{this.props.id.Runtime}</span>
                                    </div>
                                     <div className="col-xs-6">Awards:
                                        <span className="meta-data">{this.props.id.Awards}</span>
                                    </div>
                                    <div className="col-xs-6">imdbRating:
                                        <span className="meta-data">{this.props.id.imdbRating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className=" poster-container no-padding col-md-4 pull-md-8 pull-lg-7 ">
                                <img id="postertest" className="poster" src={this.props.id.Poster}/>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-md-6">
                                <EditMovie />
                                <button type="button" onClick={ this.editSelectedMovie } className="btn btn-dark"> edit movie </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else {
            return(
                <h2>Could not load..</h2>
            )
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getDetails, editMovie, getAccessToken }, dispatch);
}

function mapStateToProps(state) {
    return {
        id: state.id,
        accessToken: state.accessToken
    };
}

export default connect(mapStateToProps, mapDispatchToProps)( MovieDetails);