import React, { Component } from 'react'
import { Link, Redirect , withRouter } from 'react-router-dom'






export class MovieCard extends Component {
    
    singleMovie = (e) =>{
        debugger
        this.props.history.push("/movies/id");
        // e.preventDefault();
    //    return <Redirect to={{
    //         pathname: `/movies/${this.props.movieID}`,
    //         state: { id: this.props.movieID }
    //     }}
        
///>
      
    }
    
    render() {

        // const movie = this.props;
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
                    to = {`/movies/${this.props.movieID}`}
                    className="btn btn-success">View Movie Detail</Link>
                    {/* <button onClick={this.singleMovie}>View Details</button> */}

                </div>
             </div>
        </div>
        )
    }
}

export default withRouter(MovieCard) 
