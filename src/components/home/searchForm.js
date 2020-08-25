import React, { Component } from 'react';
import { connect } from 'react-redux';
import  actionUpdateSearch from './../../REDUX//actions/actionUpdateSearch';
import fetchMovies from '../../REDUX/actions/fetchMovies';



export class SearchForm extends Component {

    handleChange = (e) =>{
        debugger
        this.props.updateSearchData(e.target.value);
    }

    handleClick = (e) =>{
        e.preventDefault();
        this.props.fetchSearchData(this.props.data)
        this.props.loadingChange()
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5">
                    <h1 className=" text-center p-4">
                    <i className="fas fa-search"></i> Movie Site -- All Collection of movies are available here..
                    </h1>
                    <div className="container">
                        <form className="form text-center">
                            <input className="form-control" 
                            onChange={this.handleChange}
                            type="search"
                            name="searchText"
                            placeholder="Search your favorite movie here" 
                         />
                        <button 
                        onClick={this.handleClick} 
                        className="btn btn-primary btn-lg mt-3">Search</button>
                        </form>
                    </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        data: state.searchMovie.text,
        loading: state.searchMovie.loading
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        updateSearchData : text => {dispatch(actionUpdateSearch(text))},
        fetchSearchData: text =>{dispatch(fetchMovies(text))},
        loadingChange: () =>{dispatch({type: 'LOADING_CHANGE'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);
