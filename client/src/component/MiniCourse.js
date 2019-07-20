import React, {Fragment, useState, useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import MiniCoursePlay from './MiniCousrePlay';
import {Link} from "react-router-dom";
import {Row,Container} from "react-bootstrap";
import '../index.css'
import {MDBCol} from "mdbreact";

const MiniCourse = (props) => {
    let found = props.miniCourse.tags.some(r=> props.filter.indexOf(r) >= 0);
    if(found) {
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
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </Row>
                </Container>

            </Fragment>

        );
    }
    else {

        return null;
    }

};

MiniCourse.propTypes = {
    filter : propTypes.array.isRequired
};
const mapStateToProps = state => ({
    filter: state.getMiniCourse.tags
});

export default connect(mapStateToProps)(MiniCourse);
