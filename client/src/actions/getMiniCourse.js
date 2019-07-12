import {MINI_COURSE_LOADED} from "./types";
import axios from 'axios';


export const getMiniCourses = (ids) => async dispatch => {
    try{
        console.log("get minicourses: ",ids);
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };
        const body = {
            ids
        };
        const res = await axios.post("http://localhost:5000/minicourse",body, config);
        console.log("minicourse res: ", res.data);
        dispatch({
            type: MINI_COURSE_LOADED,
            payload: res.data
        })
    } catch (err) {

    }
};
