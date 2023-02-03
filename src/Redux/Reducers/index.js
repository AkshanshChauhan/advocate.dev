import { combineReducers } from 'redux';
import checkLoginReducer from './login';
import checkOtpClickedReducer from './opt';

const allReducers = combineReducers({
    checkLogin: checkLoginReducer,
    checkOptClicked: checkOtpClickedReducer,
})

export default allReducers;