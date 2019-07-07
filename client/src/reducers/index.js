import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import addcourse from './addcourse';
import autocomplete from './autocomplete';
import addvideo from './addvideo'
import ShowCourse from './ShowCourse'
import getvideo from './getvideo'
export default combineReducers({alert, auth, addcourse, autocomplete, addvideo,ShowCourse,getvideo});




