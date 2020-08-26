
import { APIKEY } from './../../APIKEY'
import axios from 'axios';


const fetchMovie = (id) =>{

      return (dispatch)=>{

            axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`)
            .then(response=> dispatch({
                type: 'FETCH_MOVIE',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
            
    }
}


export default fetchMovie;