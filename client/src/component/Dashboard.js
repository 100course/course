import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from "../actions/auth";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {user} from "../actions/user";

const style =
    {
        textAlign: 'center'
    };
const Dashboard = ({logout,user}) => {

    {
        return (
            <Fragment>
                    Welcome To AlphaCourses
            </Fragment>

        )

    }
};
Dashboard.proptypes =
    {
        logout: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
    };
const mapStateToProps = state =>
({
    user: state.auth.user
});


export default connect(mapStateToProps, {logout})(Dashboard);