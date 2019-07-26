import {MODIFY_COURSE, LOAD_MODIFY_COURSE, SET_ALERT} from "./types";
import axios from 'axios';

export const LoadModifyMiniCourse = ({name}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.get(`http://localhost:5000/miniCourse/name/${name}`, config);
        dispatch({
            type: LOAD_MODIFY_COURSE,
            payload: res.data
        })
    } catch (e) {

    }

};

export const modifyMiniCourse = ({miniCourse}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        miniCourse
    };
    try {
        const res = axios.post('http://localhost:5000/miniCourse/modify', body, config);
        dispatch({
            type: SET_ALERT,
            payload: {msg: "done saving", alertType: "success"}
        });
    } catch (err) {

    }

};
