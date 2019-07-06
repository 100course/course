import {GET_COURSES} from "./types";
import axios from "../component/Course";

export const getcourse = ({ids}) => dispatch => {
    axios.get('http://localhost:5000/courses')
        .then(response => {
            console.log(response.data)
            const Course = response.data;
            const CourseList = [];
            for (const key in Course) {
                CourseList.push({
                    id: key,
                    name: Course[key].name,
                    length: Course[key].length,
                    volume: Course[key].volume,
                    picture: Course[key].picture
                });

            }
            SetCourses(CourseList);
        });
};
