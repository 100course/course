import React, {useState, useEffect} from 'react';
import axios from "axios";


function UserPage() {
    const [Courses, SetCourses] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/courses')
            .then(response => {
                const Course = response.data;
                const CourseList = [];
                for (const key in Course) {
                    CourseList.push({
                        id: Course[key]._id,
                        name: Course[key].name,
                        length: Course[key].length,
                        volume: Course[key].volume,
                        picture: Course[key].picture
                    });
                }
                SetCourses(CourseList);
            });
    }, []);
    return (
            <h1>

            </h1>
    )
}

export default UserPage;