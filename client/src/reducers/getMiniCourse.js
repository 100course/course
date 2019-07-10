import {MINI_COURSE_LOADED} from "../actions/types";

const initialState = {
    miniCourses: [
    ],
    loading: true
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case MINI_COURSE_LOADED:
            return {
                miniCourses: [...state.miniCourses, ...payload],
                loading: false
            };
        default:
            return state;
    }
}