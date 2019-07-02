import React, {useState, useEffect} from 'react';
import './Course.css'
import axios from "axios";

import coursePage from './component/pages/coursePage';


const Course = props => {
    const [Courses, SetCourses] = useState([]);
    useEffect(() => {
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

    }, []);

    const coursePage = (e) => {
        e.preventDefault();

    };
    return (

            <div className="Course">
                {
                    Courses.map(Course =>
                        <img src={Course.picture}/>
                    )}
                <button className="btn" type="button" onSubmit={coursePage}> go to course</button>

            </div>


    );


}
export default Course