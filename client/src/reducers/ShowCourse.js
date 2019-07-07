import {GET_COURSES} from "../actions/types";

const initialState = {
    courseLoaded: false,
    data: [
        {
            videos: [],
            tags: [],
            name: '',
            length: '',
            volume: '',
            picture: ''
        }
    ]

};

export default function (state = initialState, action) {

    const {type, payload} = action;
    switch (type) {
        case GET_COURSES:
            return payload.map((item, index) => {
                return {
                    ...state,
                    videos: item.videos,
                    tags: item.tag,
                    name: item.name,
                    length: item.length,
                    volume: item.volume,
                    picture: item.picture
                }
            });
        default:
            return state;
    }

}