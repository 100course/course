import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from "prop-types";
import {logout} from "../actions/auth";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
//import {user} from "../actions/user";
import MiniCourse from "./MiniCourse";
import uuid from 'uuid';
import {getMiniCourses} from '../actions/getMiniCourse';
import {MDBCol, MDBRow} from "mdbreact";

const Dashboard = ({logout, user, isAuthenticated, loading, getMiniCourses, miniCourses, miniCourseLoading}) => {
    useEffect(() => {
        if (user !== '' && miniCourseLoading)
            getMiniCourses(user.miniCourses);
    }, [user]);

    return (
        <Fragment>

            <MDBRow className="mb-3">

                {miniCourses.map(item => <MDBCol xl="4" md="8" className="mb-3"><MiniCourse miniCourse={item}/></MDBCol>)}
            </MDBRow>

        </Fragment>
    )


};
Dashboard.proptypes =
    {
        logout: propTypes.func.isRequired,
        user: propTypes.object.isRequired,
        isAuthenticated: propTypes.bool.isRequired,
        loading: propTypes.bool.isRequired,
        getMiniCourses: propTypes.func.isRequired,
        miniCourses: propTypes.array.isRequired,
        miniCourseLoading: propTypes.bool.isRequired
    };
const mapStateToProps = state =>
    ({
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
        miniCourses: state.getMiniCourse.miniCourses,
        miniCourseLoading: state.getMiniCourse.loading
    });


export default connect(mapStateToProps, {logout, getMiniCourses})(Dashboard);
