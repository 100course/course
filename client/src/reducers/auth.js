import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT, USER_LOADED, AUTH_ERROR} from "../actions/types";
import {setAlert} from "../actions/alert";

const initialState =
    {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: ''
    };
export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                loading: false,
                user: payload
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);

            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
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
        case LOGOUT:
            localStorage.removeItem('token');
                return ({
                    ...state,
                    token:null,
                    isAuthenticated:false,
                    loading:false
                })


        default:
            return state;

    }
};
