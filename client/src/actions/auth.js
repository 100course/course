import axios from 'axios';
import {REGISTER_FAIL,REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL} from "./types";
import {setAlert} from "./alert";

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


export const login = ({email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({email, password});
    console.log("sending theis to server: " ,body);
    try {
        const res = await axios.get('http://localhost:5000/user/login',body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
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