import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router";

const PrivateRoute =({
    component:Component,
    auth:{isAuthenticated,loading},
    ...rest
    })=>(
        <Route
            {...rest}
                render={props=>!isAuthenticated && !loading ? (
                    <Redirect to='login'/>
                    ):(
                        <Component {...props}/>
                        )
                }
        />
);





    PrivateRoute.proptypes =
        {
            auth: PropTypes.object.isRequired
        };


const mapStateToProps = state =>
    ({
        auth: state.auth

    });


export default connect(mapStateToProps)(PrivateRoute)
