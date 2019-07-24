import React, {Fragment, useState,useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import '../index.css'
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


const MiniCourseStore = (props) => {
console.log("MiniCourseStore: ", props);
    let found = props.miniCourse.tags.some(r=> props.filter.indexOf(r) >= 0);
    if (found) {
        const id = props.miniCourse._id;
        return (
            <Fragment>
                <Container fluid className="main-content-container px-4 flexible-content">
                    <Row noGutters className="page-header py-4">


                        <div className="card minicourse mb-3">
                            <img className="card-img-top" src={props.miniCourse.picture}/>
                            <div className="card-body">
                                <h5 className="card-title">Course Title </h5>
                                <p className="card-text">a bit Explanation of minicourse
                                </p>
                                <Link to={{
                                    pathname:`/MiniCourseViewStore/${id}`,
                                }} className="btn btn-primary" >
                                    مشاهده دوره</Link>
                                {/* {console.log(props.miniCourse.tags)}*/}
                            </div>
                        </div>
                    </Row>
                </Container>

            </Fragment>
        );
    } else {
        return null;
    }
};

MiniCourseStore.propTypes = {
    filter : propTypes.array.isRequired
};
const mapStateToProps = state => ({
    filter: state.getMiniCourse.tags
});


export default connect(mapStateToProps, {})(MiniCourseStore);
