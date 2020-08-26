
import { APIKEY } from './../../APIKEY'
import axios from 'axios';


const fetchMovies = (name) =>{

      return (dispatch)=>{

            axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${name}`)
            .then(response=> dispatch({
                type: 'FETCH_MOVIES',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
    }
}


export default fetchMovies;