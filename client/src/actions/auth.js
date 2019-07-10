import axios from 'axios';
import {REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED, AUTH_ERROR} from "./types";
import {setAlert} from "./alert";
import setAuthToken from '../utils/setAuthToken';

//load user
export const loadUser =() => async dispatch => {

    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('http://localhost:5000/user/login');
        dispatch({
            type: USER_LOADED,
            payload: res.data

        });
        console.log(res.data)
    } catch (err) {
        dispatch({
           type: AUTH_ERROR
        });
    }

};

//register user
export const register = ({username, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        email,
        username,
        password
    };
    try {
        const res = await axios.post('http://localhost:5000/user/register', body, config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
    } catch
        (err) {
        const errors=err.response.data.errors;
        if(errors)
        {
            errors.forEach(err=>dispatch(setAlert(err.msg,'danger')));
        }
        dispatch({
            type:REGISTER_FAIL
        })
    }
};

//Login
export const login = ({email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        email,
        password
    };

    try {
        const res = await axios.post('http://localhost:5000/user/login', body, config);
        console.log("login res: ", res);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        loadUser();
    } catch (err) {
        const errors=err.response.data.errors;
        if(errors)
        {
            errors.forEach(err=>dispatch(setAlert(err.msg,'danger')));
        }
        dispatch({
            type:LOGIN_FAIL
        })
    }

};
   export const logout=()=>dispatch=>
   {
       dispatch({
           type:LOGOUT
       })
   }

//Logout
