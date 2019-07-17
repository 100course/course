import {MINI_COURSE_LOADED, FILTER_COURSES} from "../actions/types";

const initialState = {
    miniCourses: [],
    loading: true,
    tags:[
        "all"
    ]
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    console.log("payload: ", payload);
    switch (type) {
        case MINI_COURSE_LOADED:
            return {
                miniCourses: [...state.miniCourses, ...payload],
                loading: false,
                tags: [...state.tags]
            };
        case FILTER_COURSES:
            return {
                miniCourses: [...state.miniCourses],
                loading: false,
                tags : [...state.tags, payload]
            };
        default:
            return state;
    }
}
