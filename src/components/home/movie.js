import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchMovie from './../../REDUX/actions/fetchmovie'

export class Movie extends Component {
    
    componentDidMount = ()=>{
        this.props.fetchClickedMovie(this.props.match.params.id)
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                        <img  
                        src = {this.props.singleMovie.Poster}
                        className="card-img" 
                        alt="..." />
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Hello</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted"></small></p>
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
