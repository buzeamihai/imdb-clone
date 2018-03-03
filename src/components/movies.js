import React, { Component } from 'react';

class Movie extends React.Component {
  handleClick = () => {
    this.props.selectMovie(this.props.result);
  }

	render(){
		return (
			<div className="col" onClick= { () =>{this.handleClick(this.props.result)}}>
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









// import React, { Component, PropTypes } from 'react';
// import axios from 'axios';

// class Movie extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       movie: null
//     }
    
//     axios.get('http://localhost:8000/movies')
//     .then(response => {
//       console.log("got response:", response.data);
//         this.setState({movie: response.data});
     
//     }).catch(error => {
//       console.log("error");
//       this.setState({movie: []});
//     });
//   }

//   render() {
//     const movie = this.state.movie;
//     if (!movie) {
//       return <div>
//         <h2>Loading...</h2>
//       </div>
//     }
     
//     return (
//       <div className="movie">
//         <img className="poster" src={movie.Poster} />
//         <h2 className="header">{movie.Title} ({movie.Year})</h2> 
//       </div>
//     );
//   }
// }

// export default Movie;
