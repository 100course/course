import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Main() {
    return(
        <div>
            <Link to='/Register'>
                <button type='button'> register </button>
            </Link>
        </div>
    );
}

export default Main;