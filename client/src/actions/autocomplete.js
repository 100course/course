import {AUTOCOMPLETE} from "./types";
import axios from 'axios';

export const autoComplete = ({name, type}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        name,
        type
    };
    try {
        const res = await axios.post('http://localhost:5000/search', body,config);
        console.log("auto complete : ", res.data);
        dispatch({
            type:AUTOCOMPLETE,
            payload:res.data
        })
    } catch (e) {
        console.log("auto complete: got error" );
    }
};