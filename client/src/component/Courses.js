import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {ShowCourse} from '../actions/ShowCourse';
import propTypes from "prop-types";
import axios from 'axios'

const Course = ({courses, user, ShowCourse, courseLoaded}) => {
    useEffect(() => {
        ShowCourse(user.courses);
    },[user]);
    return (
        <Fragment >
            {courses.map(item => {
                return(
                    <img src={item.picture}/>
                )
            })}
        </Fragment>
    )
};
Course.propTypes = {
    courses: propTypes.array.isRequired,
    user: propTypes.object.isRequired,
    ShowCourse: propTypes.func.isRequired,
    courseLoaded: propTypes.bool.isRequired
};
const mapStateToProps = state =>
    ({
        user: state.auth.user,
        courses: state.ShowCourse.courses,
        courseLoaded: state.ShowCourse.courseLoaded
    });

export default connect(mapStateToProps,{ShowCourse})(Course)