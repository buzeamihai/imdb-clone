import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: '',
            category: 0
        }
    }

    handleCategoryChange = (e) => {
        this.setState({
            category : e.target.value
        }) 
    }

    handleSearchInputChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }

    // onSearchPage = (e) => {
    //     // <SearchPage/>
    // }

    render(){
        return (
            <div className="input-group mb-3 col-8">
                <input type="text" className="form-control col-9" value={ this.state.query } onChange={ this.handleSearchInputChange } placeholder="Find movies, TV Shows, Celebrities and more ..."/>
                <select className="custom-select col-3" id="inputGroupSelect" value={this.state.category} onChange={this.handleCategoryChange}>
                    <option value="0">All</option>
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
                    <button className="btn btn-warning btn-sm" type="submit" onClick={ this.onSearchPage }>Search</button>
                </div>
            </div>
            
        );
    }
}

export default Search;