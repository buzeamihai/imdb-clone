import React from "react";

class Movie extends React.Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
      <div className="col">
        <div>
            <h6>{this.props.result.Title}</h6>
            <a href="#"><img src={this.props.result.Poster} className="img-responsive" /></a>
        </div>
      </div>
      )
	}
}

export default Movie;

