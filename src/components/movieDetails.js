import React, { Component } from 'react';

class MovieDetails extends Component { 
  render() {
    return (
      <div>
        <h2>({this.props.Year}) {this.props.article.Title}</h2>
        <img src={this.props.article.Poster} />
        <p>
          {this.props.article.Plot}
        </p>
      </div>
    );
  }
}

export default MovieDetails;