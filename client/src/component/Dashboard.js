import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from "../actions/auth";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

const style=
    {
        textAlign:'center'
    };
const Dashboard=({logout})=> {


    {
        return (
            <Fragment>
                <h1 style={style}>
                    Welcome to Unicourses
                    <Link to={'/login'}>
                    <button onClick={logout}>Logout</button>
                    </Link>
                </h1>
            </Fragment>

        )
    }
}
Dashboard.proptypes=
{
    logout:PropTypes.func.isRequired
};


export default connect(null,{logout})(Dashboard);