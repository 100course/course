import React, {useState, useEffect, Fragment} from 'react';
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {storecourse} from '../actions/storecourse';

const StoreCourse = ({courses, storeLoaded, storecourse, user}) => {
    useEffect(() => {
        storecourse();
    },[]);

    return(
        <Fragment>
            {courses.map(item => <img src={item.picture}/>)}
        </Fragment>
    );
};

StoreCourse.propTypes = {
    courses: propTypes.array.isRequired,
    storeLoaded: propTypes.bool.isRequired,
    storecourse: propTypes.func.isRequired,
    user: propTypes.object.isRequired
};

const mapStateToProps = state => ({
    courses: state.storecourse.courses,
    storeLoaded: state.storecourse.storeLoaded,
    user: state.auth.user
});

export default connect(mapStateToProps, {storecourse})(StoreCourse);