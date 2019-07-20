import React, {Fragment, useState,useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';

const MiniCourse = (props) => {

    useEffect(() => {
        console.log("props: ", props.miniCourse.picture);
    },[]);
    return(
        <Fragment>
            <img src={props.miniCourse.picture}/>
        </Fragment>
    );
};

MiniCourse.propTypes = {

};

export default MiniCourse;
