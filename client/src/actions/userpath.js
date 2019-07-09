import {USER_PATH_UPDATED} from "./types";


export const userPath = (place, course, video) => dispatch => {
    const payload = {
        place,
        course,
        video
    };
    console.log("payload : ", payload);
    dispatch ({
        type: USER_PATH_UPDATED,
        payload
    });
};