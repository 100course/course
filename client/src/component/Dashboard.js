import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import propTypes from "prop-types";
import {logout} from "../actions/auth";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
//import {user} from "../actions/user";
import MiniCourse from "./MiniCourse";
import uuid from 'uuid'


const style =
    {
        textAlign: 'center'
    };
const Dashboard = ({logout,user, isAuthenticated, loading}) => {

    {
        return (
            !loading && isAuthenticated && user != '' ? (
            <Fragment>
                <h1 style={style}>
                    Welcome to Unicourses
                </h1>
                <p style={style}>Your username is {user.username}</p>
                <p style={style}>Your email is {user.email}</p>
                {user.miniCourses.map(item => <MiniCourse miniCourses={item.miniCourse} key={uuid.v4()}/>)}



                <Link to={'/login'}>
                    <button onClick={logout}>Logout</button>
                </Link>
            </Fragment> ) :
                    (<Fragment>
                        <p>not authenticated!</p>
                    </Fragment>)


        )

    }
};
Dashboard.proptypes =
    {
        logout: propTypes.func.isRequired,
        user: propTypes.object.isRequired,
        isAuthenticated: propTypes.bool.isRequired,
        loading: propTypes.bool.isRequired
    };
const mapStateToProps = state =>
({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
});


export default connect(mapStateToProps, {logout})(Dashboard);