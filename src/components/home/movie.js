import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchMovie from './../../REDUX/actions/fetchmovie'

export class Movie extends Component {
    
    componentDidMount = ()=>{
        this.props.fetchClickedMovie(this.props.match.params.id)
    }
    
    render() {
        const {loadingstate, singleMovie} = this.props;
        return (
            <div className="container text-center">
                <div className="card m-5 d-inline-block">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                        <img  
                        src = {singleMovie.Poster}
                        className="card-img img-fluid" 
                        alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body text-center py-4">
                                <h3>Movie details</h3>
                                <table className="table table-hover p-4">
                                    <tr>
                                        <td>Tiltle</td>
                                        <td>{singleMovie.Title}</td>
                                    </tr>
                                    <tr>
                                        <td>Year</td>
                                        <td>{singleMovie.Year}</td>
                                    </tr>
                                    <tr>
                                        <td>Rated</td>
                                        <td>{singleMovie.Rated}</td>
                                    </tr>
                                    <tr>
                                        <td>Released</td>
                                        <td>{singleMovie.Released}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre</td>
                                        <td>{singleMovie.Genre}</td>
                                    </tr>
                                    <tr>
                                        <td>Language</td>
                                        <td>{singleMovie.Language}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        loadingstate: state.searchMovie.loading,
        singleMovie: state.searchMovie.movie
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchClickedMovie: movieid => {dispatch(fetchMovie(movieid))} 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);
