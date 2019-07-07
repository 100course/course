import {GET_COURSES} from "./types";
import axios from "../component/Course";

export const ShowCourse = ({ids}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }

    };
    const body = {
        ids
    };
    try {
        const res = await axios.post('http://localhost:5000/courses/id', body, config);
        dispatch({
            type:'GET_COURSES',
            payload:res.data
        })
    }
    catch (e) {
        console.log(e)

    }
};
