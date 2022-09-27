import {combineReducers} from 'redux';
import general from './general.js';
import token from './token.js'

export default combineReducers({
    general,
    token,
});