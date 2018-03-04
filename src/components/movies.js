import React, { Component } from 'react';


class Movie extends React.Component {
  handleClick = () => {
    this.props.selectMovie(this.props.result);
  }

	render(){
		return (
			<div className="col" onClick= { () =>{this.handleClick()}}>
         <div class="hovereffect">
         <img src={this.props.result.Poster} className="img-responsive" width="160px" height="223px" />
          <div class="overlay">
           <h2>More details</h2>
           <a class="info" href="#">Click here</a>
        </div>
        </div>
        <h6>{this.props.result.Title}</h6>
      </div>
      )
    
	}
}

export default Movie;

