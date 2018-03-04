import React, { Component } from 'react';
import{ Link, Route } from 'react-router-dom';
import MovieList from './movieList';

class Pagination extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.pagination);
    }


    render(){
        
        let array = [];
        //for-ul ar trebui sa mearga pana la  this.props.pagination.numberOfPages dar e o eroare
        for (let i=1; i <= 4; i++) {
            array.push(
                <li className="nav-item nav-link">
                        <Link to={ this.props.path + '?page=' + i}>{i}</Link> 
                </li>
            )
        }

	    return (

            <nav aria-label="Search result pages" className="navbar">
                <ul className="nav nav-dark bg-light">
                    { array }
                </ul>
           
            </nav>
      )
	}
}

export default Pagination;