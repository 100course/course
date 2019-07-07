import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import ShowCourse from '../actions/ShowCourse'
import PropTypes from "prop-types";

const Course=({user,picture})=>
{
    const [Courses,ShowMyCourse]=useState({
        picture:[]
    })
    useEffect(()=>
    {

    })
    console.log(user)
    return (
        <h1>
            Hi welcome
        <br/>
            {user.username}
            {picture}

        </h1>
    )
}
Course.propTypes = {
    ShowCourse:PropTypes.func.isRequired,
    picture: PropTypes.string.isRequired
}
const mapStateToProps = state =>
    ({
        user:state.auth.user,
        picture:state.ShowCourse.picture
    })

export default connect(mapStateToProps,{ShowCourse}) (Course)