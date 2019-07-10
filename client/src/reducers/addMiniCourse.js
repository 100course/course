import {MINI_COURSE_SAVED, MINI_COURSE_SVAE_FAILED} from '../actions/types';

const initialState = {
    id: ''
};

export default function (state = initialState, action) {

    const {type, payload} = action;
    switch (type) {
        case MINI_COURSE_SAVED:
            return {
                ...state,
                id: payload
            };
        case MINI_COURSE_SVAE_FAILED:
            return state;
        default:
            return state;
    }

}