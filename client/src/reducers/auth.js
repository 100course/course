import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/types";
import {setAlert} from "../actions/alert";

const initialState =
    {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
    };
export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.data);
            return ({
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            });
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return ({
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            });


        default:
            return state;

    }
};
