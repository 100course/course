import React, {Fragment, useState,useEffect} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import '../index.css'
import {Container, Row} from "react-bootstrap";

const MiniCourse = (props) => {
console.log("hi")

    return(
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
                            {/* {console.log(props.miniCourse.tags)}*/}
                        </div>
                    </div>
                </Row>
            </Container>

        </Fragment>
    );
};

MiniCourse.propTypes = {

};

export default MiniCourse;
