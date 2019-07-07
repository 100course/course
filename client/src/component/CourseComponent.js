import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


const CourseComponent = (props) => {

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


}
export default CourseComponent