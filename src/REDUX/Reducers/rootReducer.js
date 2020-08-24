import searchReducer from './seacrhReducer';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
     searchMovie: searchReducer 
})


export default rootReducer;