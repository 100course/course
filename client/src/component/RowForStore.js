import React, {Fragment} from 'react';
import {MDBCol, MDBRow} from "mdbreact";
import MiniCourseStore from './MiniCourseStore';

const RowForStore = (props) => {

    console.log("in Row For Store: ", props);
    // let found = props.miniCourse.tags.some(r=> props.featureTag.indexOf(r) >= 0);
    return(

            <Fragment>
                <p>{props.featureTag}</p>
                {props.miniCourses.map(item =>
                item.tags.some(r => props.featureTag.indexOf(r) >= 0) ?
                    (<MDBCol xl="3" md="6" className="mb-3"><MiniCourseStore
                        miniCourse={item}/></MDBCol>
                    ) :
                    (null)
            )
                }
            </Fragment>
    );


};

export default RowForStore;
