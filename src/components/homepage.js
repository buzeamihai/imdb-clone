import React, { Component} from 'react';
import MovieList from './movieList';
import Pagination from './pagination';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getMovies} from '../actions';
import { Link, Route } from 'react-router-dom';
import MovieList from './movieList';
import style from '../style.css';


class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPaginationPage: 1
        }
    }

    componentDidMount() {
        const page=queryString.parse(this.props.location.search).page;
        this.setState({
            currentPaginationPage: page || 1
        });
        this.props.getMovies(page);
        console.log(page);
    }

    componentDidUpdate() {
        const page = queryString.parse(this.props.location.search).page;
        console.log('props', page, this.state.currentPaginationPage);
        if(page !== this.state.currentPaginationPage) {
            this.componentDidMount();
        }
    }    

    render(){
        if(this.props.movies && this.props.movies.results) {
            return (
                <div className="wraper container">
                    <MovieList movies={this.props.movies.results} pagination = {this.props.movies.pagination} path= {this.props.match.path} />
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