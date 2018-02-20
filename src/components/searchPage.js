import React from 'react';
import Search from 'searchComponent';

class SearchPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: '',
            movies: [],
            category: 0
        }
    }

    componentDidMount(){
        return console.log(this.props.match.params);
        //declansez actiunea
    }

    

    

    render(){
        if(this.props.movies) {
        return (
            <MovieList  movies= {this.props.movies}/>
            
        )}
    }
}

export default SearchPage;