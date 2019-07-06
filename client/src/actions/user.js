import {USER_UPDATED} from "./types";

export const updateuser = ({place, course, video}) => dispatch => {
    const payload = {
        place,
        course,
        video
    };

    dispatch({
        type: USER_UPDATED,
        payload
    });
};