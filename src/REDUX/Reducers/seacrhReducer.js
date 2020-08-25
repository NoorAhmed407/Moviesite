const iState = {
        text: '',
        movies: [],
        loading: false,
        movie: []
}


const searchReducer = (state=iState,action) =>{

    if(action.type === 'SEARCH_TYPE'){
        return{
            ...state,
            text: action.payload,
        }
    }

    if(action.type === 'LOADING_CHANGE'){
        return{
            ...state,
            loading: true
        }
    }

    if(action.type === 'FETCH_MOVIES'){
        return{
            ...state,
            movies: action.payload,
            loading: false,
            
        }
    }

    if(action.type === 'FETCH_MOVIE'){
        return{
            ...state,
            movie: action.payload,
        }
    }


    return state;
}


export default  searchReducer;