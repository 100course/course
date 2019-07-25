import {STORE_COURSES} from "../actions/types";



const initialState = {
    storeLoading: true,
    miniCourses : [],
    tags : []

};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case STORE_COURSES:
            return {
            miniCourses: [...state.miniCourses, ...payload],
            storeLoading: false
        };
        default:
            return {
                ...state,
                storeLoading: true
            };
    }
}
