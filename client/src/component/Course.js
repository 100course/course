import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {ShowCourse} from '../actions/ShowCourse';
import propTypes from "prop-types";
import axios from 'axios'

const Course = ({data, user, ShowCourse}) => {

    useEffect(() => {
        console.log("ussssssser: ", user.courses);
        ShowCourse(user.courses);
    },[user]);
    return (
        <Fragment >
            {data}
        </Fragment>
    )
};
Course.propTypes = {
    data: propTypes.array.isRequired,
    user: propTypes.object.isRequired,
    ShowCourse: propTypes.func.isRequired
};
const mapStateToProps = state =>
    ({
        user: state.auth.user,
        data: state.ShowCourse.data
    });

export default connect(mapStateToProps,{ShowCourse})(Course)