import React, {Fragment, useState,useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';

const MiniCourse = ({user}) => {
    // const [MiniCourse, setMiniCourses] = useState({
    //     MiniCourses: []
    // });
    useEffect(() => {
        //setMiniCourses({...MiniCourse.MiniCourses, ...user.miniCourses});
    },[user]);
    return(
        <Fragment>
            <p> minicourses are : {user.miniCourses} </p>
        </Fragment>
    );
};

MiniCourse.proptype = {
    user: propTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(MiniCourse);