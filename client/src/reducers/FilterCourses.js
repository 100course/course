import {FILTER_COURSES} from "../actions/types";

const initialState =
    {
        Filter: [],
    }


export default function (state = initialState, action) {


    const {type, payload} = action;
    switch (type) {
        case FILTER_COURSES:
            return {
                ...state,
                Filter: payload
            };


        default:
            return state;
    }



}
