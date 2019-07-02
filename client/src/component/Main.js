import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Main() {
    return(
        <div>
            <Link to='/Register'>
                <button type='button'> register </button>
            </Link>
            <Link to='/Login'>
                <button type='button'> login </button>
            </Link>
        </div>
    );
}

export default Main;