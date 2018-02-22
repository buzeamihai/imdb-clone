import React, { Component} from 'react';
import MovieList from './movieList';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getMovies } from '../actions';


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
            return <MovieList movies={this.props.movies.results} />;
        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
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