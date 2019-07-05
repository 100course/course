    import React, {Fragment, useState, useEffect} from 'react';
import {autoComplete} from "../actions/autocomplete";
import propTypes from 'prop-types';
import {modifyCourse} from "../actions/modifycourse";
import {connect} from "react-redux";


const ModifyCourse = ({suggestions, autoComplete}) => {
    const [formData, setFormData] = useState({
        courseName : ''
    });
    const {courseName} = formData;
    const onSubmit = e => {
        e.preventDefault();

    };
    const onChangeCourseName = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
        autoComplete({name: courseName, type: "course"});
    };


    return(
        <Fragment>
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="coursename" name="courseName" value={courseName} onChange={e => onChangeCourseName(e)}/>
            </form>
            <p>
                suggestions = {suggestions[0]}
            </p>
        </Fragment>
    );
};

ModifyCourse.propTypes = {
    suggestions: propTypes.array.isRequired,
    autoComplete: propTypes.func.isRequired
};

const mapStateToProps = state => ({
    suggestions: state.autocomplete.suggestions
});

export default connect(mapStateToProps,{autoComplete})(ModifyCourse);