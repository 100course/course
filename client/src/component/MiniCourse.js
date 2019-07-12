import React, {Fragment, useState,useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import MiniCoursePlay from './MiniCousrePlay';
import {Link} from "react-router-dom";

const MiniCourse = (props) => {

    useEffect(() => {
        console.log("props", props)
    },[]);
    return(
        <Fragment>
            <img src={props.miniCourse.picture} width="400" height="400"/>
            <Link to={MiniCoursePlay} miniCourse={props.miniCourse}>
                <button type="button"> show video </button>
            </Link>
        </Fragment>
    );
};

MiniCourse.propTypes = {

};

export default MiniCourse;
