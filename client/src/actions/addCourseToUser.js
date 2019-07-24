import {ADD_COURSE_USER} from "./types";
import axios from 'axios';



export const addCourseToUser = ({miniCourseId}) => async dispatch => {
    try {
        const config = {
            header : {
                "Content-Type": "application/json" 
            }
        };
        const body = {
            id: miniCourseId
        }
        const result = await axios.post("http://localhost:5000/miniCourse/addCourseToUser", body, config);
        console.log(result);
    } catch (err) {
        
    }
};
