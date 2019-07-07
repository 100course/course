import {GET_COURSES} from "./types";
import axios from "axios";

export const ShowCourse = (ids) => async dispatch => {
    console.log("idddddddddssssssss: ", ids);
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    };
    const body = {
        id: ids
    };
    try {
        const res = await axios.post('http://localhost:5000/courses/id', body, config);
        console.log("getting courses : ",res.data);
        dispatch({
            type: GET_COURSES,
            payload:res.data
        })
    }
    catch (e) {
        console.log(e)

    }
};
