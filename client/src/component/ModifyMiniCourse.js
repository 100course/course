import React, {Fragment, useState, useEffect} from 'react';
import {autoComplete} from "../actions/autocomplete";
import propTypes from 'prop-types';
import {modifyCourse} from "../actions/modifycourse";
import {connect} from "react-redux";


const ModifyMiniCourse = ({suggestions, autoComplete}) => {
    const [formData, setFormData] = useState({
        MiniCourseName : ''
    });
    const {MiniCourseName} = formData;
    const onSubmit = e => {
        e.preventDefault();

    };
    const onChangeMiniCourseName = e => {
        setFormData({[e.target.name]: e.target.value});
        autoComplete({name: e.target.value, type: "MiniCourse"});
    };


    return(
        <Fragment>
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="minicoursename" name="MiniCourseName" value={MiniCourseName} onChange={e => onChangeMiniCourseName(e)}/>
            </form>
            <p>
                suggestions = {suggestions[0]}
            </p>
        </Fragment>
    );
};

ModifyMiniCourse.propTypes = {
    suggestions: propTypes.array.isRequired,
    autoComplete: propTypes.func.isRequired
};

const mapStateToProps = state => ({
    suggestions: state.autocomplete.suggestions
});

export default connect(mapStateToProps,{autoComplete})(ModifyMiniCourse);
