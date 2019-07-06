import React, {useState, useEffect} from 'react';
import './Course.css'
import axios from "axios";
import {connect} from 'react-redux';
import propTypes from "prop-types";
import {getcourse} from "../actions/getcourse";


const Course = ({picture, getcourse,user}) => {
    const [Courses, SetCourses] = useState([]);
    let ids = null;
    useEffect(() => {
        ids = user.courses;

    }, []);

    const coursePage = (e) => {
        e.preventDefault();
    };
    return (

            <div className="Course">
                {ids}
            </div>
    );
};

Course.propTypes = {
    picture: propTypes.object.isRequired,
    getcourse: propTypes.func.isRequired,
    user: propTypes.object.isRequired
};
const mapStateToPropsPicture = state => {
    picture: state.getcourse.picture
};
const mapStateToPropsUser = state => {
    user: state.auth.user
};

export default connect(mapStateToPropsPicture,mapStateToPropsUser,{getcourse})(Course);