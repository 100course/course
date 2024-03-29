import {COURSE_SAVED, COURSE_FAILED} from '../actions/types';

const initialState = {
    id: ''
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case COURSE_SAVED:
            return {
                ...state,
                id: payload
            };
        case COURSE_FAILED:
            return state;
        default:
            return state;
    }
}