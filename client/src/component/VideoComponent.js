import React, {Fragment} from 'react';


const VideoComponent = (props) => {

    return (
        <Fragment>
            <video width="320" height="240" controls>
                <source src={props.source} type="video/mp4"/>
                    <source src={props.source}type="video/ogg"/>
            </video>

        </Fragment>
    )


}
export default VideoComponent