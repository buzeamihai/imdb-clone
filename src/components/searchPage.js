import React from 'react';



import MovieList from './movieList';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchMovie } from '../actions';



class SearchPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: '',
            category: 0
        }
    }

    componentDidMount(){
        
        //declansez actiunea
        this.props.searchMovie(this.props.match.params.categ, this.props.match.params.query);
    }

    

    

    render(){
        if(this.props.search) {
            return (
                <MovieList  movies={this.props.search.results}/>
            )
        } else return <div>Loading....</div>

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovie }, dispatch);
}

function mapStateToProps(state) {
    return {
        search: state.search
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
