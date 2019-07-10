import React, {Fragment, useState,useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';

const MiniCourse = (props) => {

    useEffect(() => {
        console.log("props", props)
    },[]);
    return(
        <Fragment>
            <img src={props.miniCourses.picture}/>
        </Fragment>
    );
};

MiniCourse.propTypes = {

};

export default MiniCourse;