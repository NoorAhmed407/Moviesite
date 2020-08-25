import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchMovie from './../../REDUX/actions/fetchmovie'

export class Movie extends Component {
    
    function = () =>{
        debugger
        console.log(this.props.loading)
    }
    render() {
        console.log("-=======")
        debugger
    

        console.log(this.props.loading)

        return (
            <div>
                  <button 
                        onClick={this.function} 
                        className="btn btn-primary btn-lg mt-3">Search</button>
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src="..." class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Hello</h5>
                                <p class="card-text"></p>
                                <p class="card-text"><small class="text-muted"></small></p>
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
        singleMovieData: state.searchMovie.movie,
        loading: state.searchMovie.loading
    }
}

// const mapDipatchToProps = (dispatch) =>{
//     return{
//         fetchClickedData: movieid =>{dispatch(fetchMovie(movieid))},
//     }
// }

export default connect(mapStateToProps, {fetchMovie})(Movie);
