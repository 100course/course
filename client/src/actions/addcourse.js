import axios from 'axios';
import {COURSE_SAVED, VIDEO_SAVED} from "./types";

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
            type: VIDEO_SAVED
        })
    }
};