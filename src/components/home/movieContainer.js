import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './movieCard';

export class MovieContainer extends Component {
    render() {
        
        const {movies} = this.props;

        let content = movies ? movies.map((movie,index)=><MovieCard 
        key = {index}
        movieID = {movie.imdbID}
        postersource = {movie.Poster}
        movietitle = {movie.Title} 
        movieyear = {movie.Year}/>) : null

        return (
            <div className="row p-4">
                {content}
            </div>
        )
    }
}



const mapStateToProps = state =>{
    return{
        movies: state.searchMovie.movies.Search
    }
}

export default connect(mapStateToProps)(MovieContainer);

