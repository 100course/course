import {GET_COURSES} from "../actions/types";

const initialState = {
    courseLoaded: false,
    courses: [
        {
        videos: [],
        tags: [],
        name: '',
        length: '',
        volume: '',
        picture: ''
    }
    ]
};

export default function (state = initialState, action) {

    const {type, payload} = action;
    switch (type) {
        case GET_COURSES:
            return {
                courses: [...state.courses, ...payload],
                courseLoaded: true
            };
        default:
            return {
                ...state,
                courseLoaded: false
            };
    }

}