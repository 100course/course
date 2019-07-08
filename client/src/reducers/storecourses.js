import {STORE_COURSES} from "../actions/types";



const initialState = {
    storeLoaded: false,
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
        case STORE_COURSES:
            return {
            courses: [...state.courses, ...payload],
            storeLoaded: true
        };
        default:
            return {
                ...state,
                storeLoaded: false
            };
    }
}