import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Videos=({videos})=>
{
    return (
        <Fragment >
            <ol>
            {videos.map(item => {
                const {name}=item

                return(
                    <Link to={'/'+name}>
                    <li>
                        {name}
                    </li>
                    </Link>
                )

            })}
            </ol>
        </Fragment>
    )


}
Videos.propTypes=
    {
        videos:PropTypes.array.isRequired
    }
const mapStateToProps=state=>({
    videos:state.getvideo.videos
});
export default connect(mapStateToProps) (Videos);