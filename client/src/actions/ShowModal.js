import { SHOW_MODAL_LOGIN,HIDE_MODAL_LOGIN,SHOW_MODAL_REGISTER,HIDE_MODAL_REGISTER} from "./types";


export const showModalLogin=()=>dispatch=> {
    dispatch({
        type: SHOW_MODAL_LOGIN
    })
}
export const hideModalLogin=()=>dispatch=> {
    dispatch({
        type: HIDE_MODAL_LOGIN
    })
}
export const showModalRegister=()=>dispatch=> {
    dispatch({
        type: SHOW_MODAL_REGISTER
    })
}
export const hideModalRegister=()=>dispatch=> {
    dispatch({
        type: HIDE_MODAL_REGISTER
    })
}