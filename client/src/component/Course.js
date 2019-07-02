import React, {useState, useEffect} from 'react';


function Course(course) {
    return(
        <div>
            <img src={course.course.picture}/>
            <button className="btn"> click me! </button>
        </div>
    )
}

export default Course;