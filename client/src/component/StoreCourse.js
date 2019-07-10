import React, {useState, useEffect, Fragment} from 'react';
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {storecourse} from '../actions/storecourse';

const StoreCourse = ({miniCourses, storeLoaded, storecourse, user, loading, miniCourseLoading}) => {
    useEffect(() => {
        if(user !== '')
            storecourse();
    },[user]);

    return(  !loading && user !== '' && !miniCourseLoading ? (
        <Fragment>
            {miniCourses.map(item => <img src={item.picture}/>)}
        </Fragment> ) : (<Fragment><p>not yet baby!</p></Fragment>)
    );
};

StoreCourse.propTypes = {
    miniCourses: propTypes.array.isRequired,
    storeLoaded: propTypes.bool.isRequired,
    storecourse: propTypes.func.isRequired,
    user: propTypes.object.isRequired,
    loading: propTypes.bool.isRequired,
    miniCourseLoading: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
    storeLoaded: state.storecourse.storeLoaded,
    user: state.auth.user,
    loading: state.auth.loading,
    miniCourses: state.getMiniCourse.miniCourses,
    miniCourseLoading: state.getMiniCourse.loading
});

export default connect(mapStateToProps, {storecourse})(StoreCourse);