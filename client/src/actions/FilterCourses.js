import {FILTER_COURSES} from "./types";



export const FilterCourses = (State) => dispatch =>

{

    dispatch(
        {
            type: FILTER_COURSES,
            payload: State
        }

    );


};