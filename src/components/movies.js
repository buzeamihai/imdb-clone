import React from "react";

class Movie extends React.Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<div className="col-sm-4">
            <h6>{this.props.result.Title}</h6>
            <a href='#'><img src={this.props.result.Poster} className="img-responsive" width="160px" height="223px" /></a>
      </div>
			)
	}
}

export default Movie;

