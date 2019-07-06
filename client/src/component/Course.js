import React, {useState, useEffect} from 'react';
import './Course.css'
import axios from "axios";
import {connect} from 'react-redux';
import propTypes from "prop-types";
import {getcourse} from "../actions/getcourse";



const Course = ({picture, getcourse,user}) => {
    const [Courses, SetCourses] = useState([]);
    let ids = null;
    useEffect(() => {
        console.log(user);
        ids = user.courses;
        console.log("ids: ", ids);
        getcourse({ids});
    }, []);

    return (

            <div className="Course">
                {ids}
            </div>
    );
};

Course.propTypes = {
    picture: propTypes.array.isRequired,
    getcourse: propTypes.func.isRequired,
    user: propTypes.object.isRequired
};
const mapStateToProps = state => ({
    picture: state.getcourse.picture,
    user: state.auth.user
});


export default connect(mapStateToProps,{getcourse})(Course);