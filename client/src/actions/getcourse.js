import {GET_COURSES} from "./types";
import axios from "../component/Course";

export const getcourse = ({ids}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }

    };
    const body = {
        ids
    };
    const res = await axios.post('http://localhost:5000/courses/id', body, config);
    console.log(res.data)

};
