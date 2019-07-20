import React, {useState, useEffect, Fragment} from 'react';
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {storecourse} from '../actions/storecourse';
import MiniCourseStore from './MiniCourseStore';
import {MDBCol, MDBRow} from "mdbreact";

const StoreCourse = ({miniCourses, storeLoading, storecourse, user, loading, miniCourseLoading}) => {
    console.log("BYE")
    useEffect(() => {
        if(storeLoading)
            storecourse();
    },[]);
    return( !miniCourseLoading ? (
            <Fragment>
                <MDBRow className="justify-content-center">


                    {miniCourses.map(item =>
                        <MDBCol xl="3" md="6" className="mb-3"><MiniCourseStore
                            miniCourse={item}/></MDBCol>)}



                </MDBRow>

            </Fragment>) : (<Fragment><p>not yet baby!</p></Fragment>)

    );
};

StoreCourse.propTypes = {
    miniCourses: propTypes.array.isRequired,
    storeLoading: propTypes.bool.isRequired,
    storecourse: propTypes.func.isRequired,
    user: propTypes.object.isRequired,
    loading: propTypes.bool.isRequired,
    miniCourseLoading: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
    storeLoading: state.storecourse.storeLoading,
    user: state.auth.user,
    loading: state.auth.loading,
    miniCourses: state.storecourse.miniCourses,
});

export default connect(mapStateToProps, {storecourse})(StoreCourse);
