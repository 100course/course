import {GET_COURSES} from "../actions/types";

const initialState = {
    picture: "",
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_COURSES:
            return{
                ...state,
                picture : payload.picture
            };
        default:
            return state;
    }

}