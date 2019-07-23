import {STORE_COURSES} from "./types";
import axios from 'axios';

export const storecourse = () => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    };
    const body = {
        tag : "all"
    };
    console.log("axios storeCourse");
    try {
        const res = await axios.post("http://localhost:5000/store", body,config);
        console.log(res.data);
        dispatch ({
            type: STORE_COURSES,
            payload: res.data
        })
    } catch (err) {
        console.log("got error in storecourse");
    }
};
