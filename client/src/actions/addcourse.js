    import axios from 'axios';
import {COURSE_SAVED, COURSE_FAILED} from "./types";

export const addCourse = ({name, tag, length, volume, picture, text, video}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        name,
        tag,
        length,
        volume,
        picture,
        text,
        video
    };
    try {
        const res = await axios.post('http://localhost:5000/add/course', body, config);
        console.log("res : ", res);
        dispatch({
            type: COURSE_SAVED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COURSE_FAILED
        })
    }
};