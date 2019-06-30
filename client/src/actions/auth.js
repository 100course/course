import axios from 'axios';
import {REGISTER_FAIL,REGISTER_SUCCESS} from "./types";
import {setAlert} from "./alert";

export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password});
    try {
        const res = await axios.post('http://localhost:5000/user/register', body, config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
    } catch
        (err) {
        const errors=err.response.data.errors
        if(errors)
        {
            errors.forEach(err=>dispatch(setAlert(err.msgm,'danger')));
        }
        dispatch({
            type:REGISTER_FAIL
        })
    }
}
