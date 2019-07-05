import {VIDEO_SAVED, VIDEO_FAILED} from '../actions/types';

const initialState = {
    id: ''
};

export default function (state = initialState, action) {

    const {type, payload} = action;
    switch (type) {
        case VIDEO_SAVED:
            return {
                ...state,
                id: payload
            };
        case VIDEO_FAILED:
            return state;
        default:
            return state;
    }

}