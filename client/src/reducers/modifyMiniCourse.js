import {MODIFY_COURSE, LOAD_MODIFY_COURSE} from "../actions/types";

const initialState = {
    miniCourse: ''
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case MODIFY_COURSE:
            return {
                ...state,
                id : payload
            };
        case LOAD_MODIFY_COURSE:
            return {
                ...state,
                miniCourse: payload
            };
        default:
            return state;
    }

};
