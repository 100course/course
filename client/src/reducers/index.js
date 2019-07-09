import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import addcourse from './addcourse';
import autocomplete from './autocomplete';
import addvideo from './addvideo';
import ShowCourse from './ShowCourse';
import getvideo from './getvideo';
import storecourse from './storecourses';
import userpath from './userpath';
export default combineReducers({alert, auth, addcourse, autocomplete, addvideo,ShowCourse,getvideo,storecourse, userpath});




