import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import propTypes from 'prop-types';

const CourseComponent = (props, {course}) => {

    return (
        <Fragment>
            <Link to="videos">
                <img src={props.picture} onClick={props.click}/>
            </Link>
        < h1>Course name :{props.name}</h1>
        <p>volume of it :{props.volume}</p>
        <p> length of  it {props.length}</p>
        </Fragment>
)


};

CourseComponent.propTypes = {
    course :propTypes.object.isRequired
};
const mapStateToProps = state => ({
    course: state.user.course
});

export default connect(mapStateToProps)(CourseComponent);