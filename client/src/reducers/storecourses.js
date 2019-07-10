import {STORE_COURSES} from "../actions/types";



const initialState = {
    storeLoading: true,
    miniCourses : [],
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case STORE_COURSES:
            return {
            miniCourses: [...state.miniCourses, ...payload],
            storeLoaded: false
        };
        default:
            return {
                ...state,
                storeLoaded: false
            };
    }
}