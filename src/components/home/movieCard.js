import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


export class MovieCard extends Component {
    
    render() {
        return (

         <div className="col-md-3">
            <div 
            style= {{height: 'auto'}}
            className="card p-4">
                <img 
                className="card-img-top"
                style={{height:'400px'}}
                src={this.props.postersource}
                alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{this.props.movietitle} - {this.props.movieyear}</p>
                    <Link 
                    to = {`movies/${this.props.movieID}`}
                    className="btn btn-success">View Movie Detail</Link>

                </div>
             </div>
        </div>
        )
    }
}

export default connect()(MovieCard) 
