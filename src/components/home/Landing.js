import React, { Component } from 'react';
import SearchForm from './searchForm'
import { connect } from 'react-redux';
import MovieContainer from './movieContainer';
import Spinner from '../layout/Spinner';
// import Spinner from './../layout/Spinner';



export class Landing extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <SearchForm />
               {
                   this.props.loading ? <Spinner /> : <MovieContainer />
               }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        loading: state.searchMovie.loading
    }
}

export default connect(mapStateToProps)(Landing);