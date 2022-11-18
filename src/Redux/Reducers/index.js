import { combineReducers } from 'redux';
import checkLoginReducer from './login';

const allReducers = combineReducers({
    checkLogin : checkLoginReducer
})

export default allReducers;