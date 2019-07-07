import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {ShowCourse} from '../actions/ShowCourse'
import PropTypes from "prop-types";
import axios from 'axios'

const Course = ({user: {courses}, picture,ShowCourse,name}) => {

    useEffect(() => {
        ShowCourse(courses)


    return (
        <Fragment >


        </Fragment>
    )
}
Course.propTypes = {
       ShowCourse:PropTypes.func.isRequired,
       picture: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        name:PropTypes.string.isRequired
}
const mapStateToProps = state =>
    ({
        user: state.auth.user,
        picture:state.ShowCourse.picture,
        name:state.ShowCourse.name
    })

export default connect(mapStateToProps,{ShowCourse})(Course)