import axios from 'axios';
import {MINI_COURSE_SAVED, MINI_COURSE_SAVE_FAILED} from "./types";

export const addMiniCourse = ({name, link, subtitle,tags, picture}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        name,
        link,
        subtitle,
        tags,
        picture,
    };

    try {
        console.log("before");
        const res = await axios.post('http://localhost:5000/minicourse/add', body,config);
        console.log("after");
        console.log("res : ", res);
        dispatch({
            type: MINI_COURSE_SAVED,
            payload: res.data
        });
        console.log("hi")
    } catch (err) {
        console.log("");
        dispatch({
            type: MINI_COURSE_SAVE_FAILED
        })
    }
};