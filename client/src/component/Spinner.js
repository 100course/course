import React, {Fragment} from 'react';
const Spinner=()=>
{

    return(
        <Fragment>
    <div className="clearfix d-flex justify-content-center">
        <div className="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
        </Fragment>
    )
}
export default Spinner;