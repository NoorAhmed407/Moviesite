import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {

        // const movie = this.props;
        return (

         <div className="col-md-3">
            <div className="card">
                <img 
                className="card-img-top"
                src={this.props.postersource}
                alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{this.props.movietitle} - {this.props.movieyear}</p>
                    <button className="btn btn-success">View Movie Detail</button>
                </div>
             </div>
        </div>
        )
    }
}

export default MovieCard
