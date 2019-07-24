import {SHOW_MODAL_LOGIN, HIDE_MODAL_LOGIN, SHOW_MODAL_REGISTER,HIDE_MODAL_REGISTER} from "../actions/types";
const initialState=
    {
        ShowModalLogin: false,
        ShowModalRegister:false
    }
export default function (state = initialState, action) {
console.log(state.ShowModalLogin)

    const {type} = action;
    switch (type) {
        case SHOW_MODAL_LOGIN:
            return {
                ...state,
                ShowModalLogin: true
            };
        case HIDE_MODAL_LOGIN:
            return {
                ...state,
                ShowModalLogin: false
            }
                case SHOW_MODAL_REGISTER:
                    return {
                        ...state,
                        ShowModalRegister: true
                    };
                case HIDE_MODAL_REGISTER:
                    return {
                        ...state,
                        ShowModalRegister: false
                    }
        default:
            return state
    }
}