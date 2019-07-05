import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import addcourse from './addcourse';
import addvideo from './addvideo'

export default combineReducers({alert, auth, addcourse, addvideo});