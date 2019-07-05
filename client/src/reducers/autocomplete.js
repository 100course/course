import {AUTOCOMPLETE} from "../actions/types";

const initialState = {
    suggestions: []
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case AUTOCOMPLETE:
            return {
                ...state,
                suggestions: payload
            };
        default:
            return state;
    }
}