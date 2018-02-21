import React from "react"


class Movie extends React.Component {
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

