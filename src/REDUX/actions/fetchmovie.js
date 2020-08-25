
import { APIKEY } from './../../APIKEY'
import axios from 'axios';


const fetchMovie = (id) =>{

    return (dispatch)=>{

debugger
        axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${id}`)
        .then(response=> dispatch({
            type: 'FETCH_MOVIE',
            payload: response.data.Search
        })
        )
        .catch(error =>console.log(error));
            
    }
}


export default fetchMovie;