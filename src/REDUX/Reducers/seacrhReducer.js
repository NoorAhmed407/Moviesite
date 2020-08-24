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

    if(action.type === 'FETCH_MOVIES'){
        return{
            ...state,
            movies: action.payload,
        }
    }

    return state;
}


export default  searchReducer;