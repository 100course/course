import {FILTER_COURSES} from '../actions/types';


export const FilterCourses = (filter) => dispatch => {
    //console.log("here in filter", filters);
    //filters.filters.map(filter =>{
        //console.log(filter)
        dispatch({
            type: FILTER_COURSES,
            payload: filter
        });
    //}
    //)
};
