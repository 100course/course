import React, {Fragment} from 'react';
const Spinner=()=>
{

    return(
        <Fragment>
    <div className="clearfix">
        <div className="spinner-border float-right" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
        </Fragment>
    )
}
export default Spinner;