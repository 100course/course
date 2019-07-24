import {MINI_COURSE_DETAIL_STORE} from "../actions/types";

const initialState = {
    miniCourse: '',
    loaded : false
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    console.log("got payload: ", payload);
    switch (type) {
        case MINI_COURSE_DETAIL_STORE:
            return{
                ...state, 
                miniCourse: payload,
                loaded: true
            };
        default:
            return state;
    }
}
