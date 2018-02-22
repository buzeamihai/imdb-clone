import React from 'react';
import { searchMovie } from '../actions';
import { Route, Redirect } from 'react-router';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: '',
            category: 'All',
            needRedirect: false
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

    onClickButton = () => {
        this.setState({
            needRedirect: true
        })
    }

    componentDidUpdate() {
        if (this.state.needRedirect){
            this.setState({needRedirect:false, query: ''});
        }
    }
    
    render(){
        if (this.state.needRedirect) {
            return <Redirect to={`/search/${ this.state.category }/${this.state.query}`}/>
        }

        return (

            <div className="input-group mb-3 col-8">
                <input type="text" className="form-control col-9" value={ this.state.query } onChange={ this.handleSearchInputChange } placeholder="Find movies, TV Shows, Celebrities and more ..."/>
                <select className="custom-select col-3" id="inputGroupSelect" value={this.state.category} onChange={this.handleCategoryChange}>
                    <option value="All">All</option>
                    <option value="Title">Title</option>
                    <option value="Year">Year</option>
                    <option value="Runtime">Runtime</option>
                    <option value="Genre">Genre</option>
                    <option value="Language">Language</option>
                    <option value="Country">Country</option>
                    <option value="Poster">Poster</option>
                    <option value="imdbRating">imdbRating</option>
                    <option value="imdbVotes">imdbVotes</option>
                    <option value="imdbID">imdbID</option>
                    <option value="Type">Type</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-warning btn-sm" type="submit" onClick = { this.onClickButton }>Search</button>
                    
                </div>


            </div>
            
        );
    }
}

export default Search;