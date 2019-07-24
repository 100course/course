import {MINI_COURSE_DETAIL_STORE} from "./types";
import axios from 'axios';

export const miniCourseDetailStore = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        };
        const res = await axios.get(`http://localhost:5000/minicourse/miniCourseAddToUser/${id}`);
        console.log("in action store", res.data);
        dispatch({
            type: MINI_COURSE_DETAIL_STORE,
            payload: res.data
        })
    } catch (err) {
        console.log("in action store got error" );
    }
};
