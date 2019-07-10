import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Main() {
    return(
        <div>
            <Link to='/Register'>
                <button type='button'> register </button>
            </Link>
            <Link to='/Login'>
                <button type='button'> Login </button>
            </Link>
            <Link to={'/Store'}>
                <button type='button'> store </button>
            </Link>
        </div>
    );
}

export default Main;