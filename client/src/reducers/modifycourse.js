import {MODIFY_COURSE} from "../actions/types";

const initialState = {
    id : ''
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case MODIFY_COURSE:
            return {
                ...state,
                id : payload
            };
        default:
            return state;
    }

};