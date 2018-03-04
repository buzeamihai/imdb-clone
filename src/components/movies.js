import React from "react";
import MovieList from './movieList';


class Movie extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
    this.props.selectMovie(this.props.article)
  }
	render(){
		return (
			<div onClick={this.handleClick}>
				<img src={this.props.article.Poster} />
        {this.props.article.Title}
			</div>
			)
	}
}

export default Movie;

