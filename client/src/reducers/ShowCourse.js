import {GET_COURSES} from "../actions/types";

const initialState = {
    Data:{
    videos:[],
    tags:[],
    name:'',
    length:'',
    volume:'',
    picture: ''
}};

export default function (state = initialState, action) {

    const {type, payload} = action;
    switch (type) {
        case GET_COURSES:
            return{
                ...state,
                videos:payload.videos,
                tags:payload.tags,
                name:payload.name,
                length:payload.length,
                volume:payload.volume,
                picture : payload.picture
            };
        default:
            return state;
    }

}