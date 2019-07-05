import axios from 'axios';
import {VIDEO_SAVED, VIDEO_FAILED} from "./types";

export const addVideo = ({name, link, subtitle,tags, volume, length, picture,number,course}) => async dispatch => {
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
        length,
        volume,
        picture,
        number,
        course

    };

    try {
        console.log("before")
        const res = await axios.post('http://localhost:5000/add/video', body,config);
        console.log("after")
        console.log("res : ", res);
        dispatch({
            type: VIDEO_SAVED,
            payload: res.data
        });
        console.log("hi")
    } catch (err) {
        console.log("")
        dispatch({
            type: VIDEO_FAILED
        })
    }
};