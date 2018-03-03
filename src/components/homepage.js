import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getMovies} from '../actions';
import { Link, Route } from 'react-router-dom';
import MovieList from './movieList';
import style from '../style.css';


class Homepage extends Component {
    constructor(props){
        super(props);  
    } 
    
    componentDidMount() {
        this.props.getMovies();
    }

    render(){
        console.log(this.props.movies)
        if(this.props.movies && this.props.movies.results) {
            return (<div className="wraper container">
                    <MovieList movies={this.props.movies.results} />
                    </div>    
            );

        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            );
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMovies }, dispatch);
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);