import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import propTypes from "prop-types";
import {logout} from "../actions/auth";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
//import {user} from "../actions/user";
import MiniCourse from "./MiniCourse";

const style =
    {
        textAlign: 'center'
    };
const Dashboard = ({logout,user, isAuthenticated}) => {

    {
        return (
            <Fragment>
                <h1 style={style}>
                    Welcome to Unicourses
                </h1>
                <p style={style}>Your username is {user.username}</p>
                <p style={style}>Your email is {user.email}</p>
                <p style={style}>Your Course is {user.courses + " "} </p>
                {isAuthenticated ? (user.miniCourses.map(item => {
                    <MiniCourse miniCOurses={item.miniCourse}/>
                })) : <p>not loaded yet</p>}



                <Link to={'/login'}>
                    <button onClick={logout}>Logout</button>
                </Link>
            </Fragment>

        )

    }
};
Dashboard.proptypes =
    {
        logout: propTypes.func.isRequired,
        user: propTypes.object.isRequired,
        isAuthenticated: propTypes.bool.isRequired
    };
const mapStateToProps = state =>
({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {logout})(Dashboard);