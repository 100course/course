import React, {Fragment, useState,useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';

const MiniCourse = ({miniCourse}) => {
    // const [MiniCourse, setMiniCourses] = useState({
    //     MiniCourses: []
    // });
    useEffect(() => {
        console.log("in minicourse");
        //setMiniCourses({...MiniCourse.MiniCourses, ...user.miniCourses});
    },[]);
    return(
        <Fragment>
            <p>hello</p>
        </Fragment>
    );
};

export default MiniCourse;