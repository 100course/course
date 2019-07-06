import React, {useState, useEffect} from 'react';
import './Course.css'
import axios from "axios";
import {connect} from 'react-redux';
import propTypes from "prop-types";
import {getcourse} from "../actions/getcourse";


const Course = ({picture, getcourse,user}) => {
    const [Courses, SetCourses] = useState([]);
    useEffect(() => {
        const ids = user.courses;

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
};

Course.propTypes = {
    picture: propTypes.object.isRequired,
    getcourse: propTypes.func.isRequired,
    user: propTypes.object.isRequired
};
const mapStateToProps = state => {
    picture: state.getcourse.picture,
    user: state.auth.user
}

export default connect(mapStateToProps,{getcourse})(Course);