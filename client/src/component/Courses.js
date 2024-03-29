import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {ShowCourse} from '../actions/ShowCourse';
import {GetVideo} from '../actions/getvideo';
import PropTypes from "prop-types";
import CourseComponent from './CourseComponent'


const Course = ({courses, user, ShowCourse, courseLoaded,GetVideo}) => {
    useEffect(() => {
        ShowCourse(user.courses);

    },[user]);
    const ClickHandler=(e)=>
    {
        GetVideo(user.courses.videos)
        console.log("heeeeeeeeey")
        GetVideo(e)
        console.log("heeeeeeeeey1111111111")
    }
    return (
        <Fragment >
            {courses.map(item => {
                return(
                    <CourseComponent picture={item.picture} name={item.name} length={item.length} volume={item.volume } click={(e)=>ClickHandler(item.videos)}  />
                )
            })}
        </Fragment>
    )
};
Course.propTypes = {
    courses: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    ShowCourse: PropTypes.func.isRequired,
    courseLoaded: PropTypes.bool.isRequired,
    GetVideo:PropTypes.func.isRequired
};
const mapStateToProps = state =>
    ({
        user: state.auth.user,
        courses: state.ShowCourse.courses,
        courseLoaded: state.ShowCourse.courseLoaded
    });

export default connect(mapStateToProps,{ShowCourse,GetVideo})(Course)