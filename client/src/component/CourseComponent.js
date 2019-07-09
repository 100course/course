import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import propTypes from 'prop-types';
import {userPath} from '../actions/userpath';

const CourseComponent = (props, course, video, place, userPath) => {
    const onClick = e => {
        course = props.name;
        console.log("prop name: " ,props.name);
        userPath(place, course, video);
    };

    return (
        <Fragment>
            <Link to="videos">
                <img src={props.picture} onClick={e => onClick(e)}/>
            </Link>
        < h1>Course name :{props.name}</h1>
        <p>volume of it :{props.volume}</p>
        <p> length of  it {props.length}</p>
        </Fragment>
)


};

CourseComponent.propTypes = {
    course :propTypes.object.isRequired,
    video: propTypes.object.isRequired,
    place : propTypes.object.isRequired,
    userPath: propTypes.func.isRequired
};
const mapStateToProps = state => ({
    course: state.userpath.course,
    video: state.userpath.video,
    place: state.userpath.place
});

export default connect(mapStateToProps,{userPath})(CourseComponent);