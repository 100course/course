import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import VideosComponent from './VideoComponent'

const Videos=({videos})=>
{
    return (
        <Fragment >
            {videos.map(item => {
                return(
                    <VideosComponent src={item} />
                )
            })}
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