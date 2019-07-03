import {COURSE_SAVED, VIDEO_SAVED} from '../actions/types';

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
        case VIDEO_SAVED:
            return state;
        default:
            return state;
    }

}