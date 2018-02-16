import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: '',
            movies: []
        }
    }

    onSearchInputChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    onSearch = (e) => {
        //dispatch la actiunea de searchWeather
        this.props.searchMovie(this.state.search);
        
        //goleste inputul
        this.setState({
            search: '',
            movies: [...this.state.movies, this.state.search]
        })
    }

    render(){
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={ this.state.search } onChange={ this.onSearchInputChange } placeholder="Find movies, TV Shows, Celebrities and more ..."/>
                <select className="custom-select" id="inputGroupSelect">
                    <option selected>All</option>
                    <option value="1">Title</option>
                    <option value="2">Year</option>
                    <option value="3">Runtime</option>
                    <option value="4">Genre</option>
                    <option value="5">Language</option>
                    <option value="6">Country</option>
                    <option value="7">Poster</option>
                    <option value="8">imdbRating</option>
                    <option value="9">imdbVotes</option>
                    <option value="10">imdbID</option>
                    <option value="11">Type</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-warning btn-sm" type="submit" onClick={ this.onSearch }><span className="glyphicons glyphicons-search" aria-hidden="true"></span>Search</button>
                </div>
            </div>
            
        );
    }
}

export default Search;