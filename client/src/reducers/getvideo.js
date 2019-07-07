import {GET_VIDEO} from "../actions/types";
const initialState=
    {
        videos:[],
    }
export default function(state=initialState,action)
{
    const {type,payload}=action
    switch (type) {
        case GET_VIDEO:
            return {
                ...state,
                videos: payload
            }
        default:
            return state

    }
}