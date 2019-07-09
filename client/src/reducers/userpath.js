import {USER_PATH_UPDATED} from "../actions/types";

const initialState = {
    place: '',          //dashboard or store
    course: '',
    video: ''
};

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case USER_PATH_UPDATED:
            return {
                ...state,
                place : payload.place,
                course: payload.course,
                video: payload.video
            };
        default:
            return state;
    }
}