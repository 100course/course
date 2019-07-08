import {GET_VIDEO} from "./types";
import axios from "axios";

export const GetVideo = (video) => async dispatch => {
    console.log("idddddddddssssssss: ", video);
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    };
    const body = {
        id: video
    };
    try {
        const res = await axios.post('http://localhost:5000/Videos/id', body, config);
        console.log("getting videosssssssssssssss : ",res.data);
        dispatch({
            type: GET_VIDEO,
            payload:res.data
        })
    }
    catch (e) {
        console.log(e)

    }
};
