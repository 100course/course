import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from "../actions/auth";
import MiniCourse from "./MiniCourse";
import {getMiniCourses} from '../actions/getMiniCourse';
import {MDBCol, MDBRow} from "mdbreact";
const Dashboard = ({logout, user, isAuthenticated, loading, getMiniCourses, miniCourses, miniCourseLoading,filter}) => {
    useEffect(() => {
        if (user !== '' && miniCourseLoading)
            getMiniCourses(user.miniCourses);
    }, [user, filter]);
    return (



        <Fragment>
                <MDBRow className="justify-content-center">


                    {miniCourses.map(item =>
                                    <MDBCol xl="3" md="6" className="mb-3"><MiniCourse
                                    miniCourse={item}/></MDBCol>)}



                </MDBRow>

        </Fragment>

    )


};
Dashboard.propTypes =
    {
        logout: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
        getMiniCourses: PropTypes.func.isRequired,
        miniCourses: PropTypes.array.isRequired,
        miniCourseLoading: PropTypes.bool.isRequired,
        filter:PropTypes.array.isRequired,
    };
const mapStateToProps = state =>
    ({
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
        miniCourses: state.getMiniCourse.miniCourses,
        miniCourseLoading: state.getMiniCourse.loading,
        filter:state.getMiniCourse.tags,
    });


export default connect(mapStateToProps, {logout, getMiniCourses})(Dashboard);
