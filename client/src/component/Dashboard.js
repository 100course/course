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


const style =
    {
        textAlign: 'center'
    };
const Dashboard = ({logout,user, isAuthenticated, loading, getMiniCourses, miniCourses, miniCourseLoading}) => {
    useEffect(() => {
        if(user !== '' && miniCourseLoading)
            getMiniCourses(user.miniCourses);
    }, [user]);


        return (
            !loading && isAuthenticated && user !== '' && !miniCourseLoading? (
            <Fragment>

                    Welcome To AlphaCourses


                <h1 style={style}>
                    Welcome to Unicourses
                </h1>
                <p style={style}>Your username is {user.username}</p>
                <p style={style}>Your email is {user.email}</p>
                {miniCourses.map(item => <MiniCourse miniCourse={item} />)}


                <Link to={'/login'}>
                    <button onClick={logout}>Logout</button>
                </Link>
            </Fragment> ) :
                    (<Fragment>
                        <p>not authenticated!</p>
                    </Fragment>)


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
