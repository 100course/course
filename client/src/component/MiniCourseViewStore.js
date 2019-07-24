import React, {Fragment, useEffect, useState} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import {miniCourseDetailStore} from '../actions/miniCourseDetailStore';
import {addCourseToUser} from '../actions/addCourseToUser';


const MiniCourseViewStore = (props) => {

    console.log("in this component");


    const {id} = props.match.params;
    useEffect(() => {

        console.log("id of the course:", id);
        props.miniCourseDetailStore(id);
    },[]);
    const addCourse = () => {
        if(!props.userLoading){
            props.addCourseToUser({miniCourseId: id, userId: props.user._id});
        } else {
            //TODO : pop up login/reg
        }
    };

    if(props.miniCourseDetailLoaded){ 
         return(
        <Fragment>
            {props.user !== '' ? <p>{props.user.username}</p> : <p>no user name</p>}
            <p>{props.miniCourseDetail.name}</p>
            <button onClick={() => addCourse()}> add </button>
        </Fragment>
    ); 
    } else {
        return(
            <p> not yet babe </p>
        );
    }


};

const mapStateToProps = state => ({
    user: state.auth.user,
    miniCourseDetail: state.miniCourseDetailStore.miniCourse,
    miniCourseDetailLoaded: state.miniCourseDetailStore.loaded,
    userLoading: state.auth.loading
});
MiniCourseViewStore.propTypes = {
    user: propTypes.object.isRequired,
    miniCourseDetailStore: propTypes.func.isRequired,
    miniCourseDetail: propTypes.object.isRequired,
    addCourseToUser: propTypes.func.isRequired

};

export default connect(mapStateToProps,{miniCourseDetailStore, addCourseToUser})(MiniCourseViewStore);
