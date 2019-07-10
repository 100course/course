import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import addcourse from './addcourse';
import autocomplete from './autocomplete';
import addvideo from './addvideo';
import ShowCourse from './ShowCourse';
import getvideo from './getvideo';
import storecourse from './storecourses';
import addMiniCourse from './addMiniCourse';
import getMiniCourse from './getMiniCourse';
export default combineReducers({alert, auth, autocomplete, ShowCourse, storecourse, addMiniCourse, getMiniCourse});




