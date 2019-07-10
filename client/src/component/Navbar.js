import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import './Component.css'
import PropTypes from 'prop-types';
import {logout} from '../actions/auth'


//Icons
import SignIn from 'react-icons/lib/fa/user'
import SignOut from 'react-icons/lib/fa/sign-out'
import Register from 'react-icons/lib/fa/registered'
import OurLogo from 'react-icons/lib/fa/book'


const StyledLink = styled(Link)`
  color: white
  text-decoration:none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        &:focus,&:hover
        
        {
        color:#00D5C0
        }
      
    }
`;




const navbar = ({user,logout,isAuthenticated,loading}) => {
    const NotAuth =
        (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav nav-pills">
                    <StyledLink to={''}>
                        <a className="navbar-brand">Alpha Courses <OurLogo/></a>
                    </StyledLink>


                    <div className="collapse navbar-collapse nav justify-content-end nav nav-pill">
                        <ul className="nav nav-pills">
                            <li className="nav-item active">
                                <StyledLink to={'#'}>
                                    <a className="nav-link">Blog <span className="sr-only">(current)</span></a>
                                </StyledLink>
                            </li>
                            <li className="nav-item">
                                <StyledLink to={'#'}>
                                    <a className="nav-link">Our Courses
                                    </a>
                                </StyledLink>
                            </li>
                            <li className="nav-item">
                                <StyledLink to={'Login'}>
                                    <a className="nav-link">Login <SignIn/></a>
                                </StyledLink>
                            </li>
                            <li className="nav-item ">
                                <StyledLink to={'register'}>
                                    <a className="nav-link">

                                        Register <Register/>
                                    </a>
                                </StyledLink>
                            </li>
                        </ul>
                    </div>
                </nav>


        )
    const IsAuth =
        (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav nav-pills">
                    <StyledLink to={''}>
                        <a className="navbar-brand">Alpha Courses <OurLogo/></a>
                    </StyledLink>


                    <div className="collapse navbar-collapse nav justify-content-end nav nav-pill">
                        <ul className="nav nav-pills">
                            <li className="nav-item active">
                                <StyledLink to={'#'}>
                                    <a className="nav-link">Blog <span className="sr-only">(current)</span></a>
                                </StyledLink>
                            </li>
                            <li className="nav-item">
                                <StyledLink to={'#'}>
                                    <a className="nav-link">Our Courses
                                    </a>
                                </StyledLink>
                            </li>
                            <li className="nav-item">
                                <StyledLink to={'/courses'}>
                                    <a className="nav-link">Your Courses
                                    </a>
                                </StyledLink>
                            </li>
                            <li className="nav-item">
                                <StyledLink to={'logout'}>
                                    <a className="nav-link" onClick={logout}>Logout <SignOut/></a>
                                </StyledLink>
                            </li>
                        </ul>
                    </div>
                </nav>


        )
    return(
    <Fragment>
        {!loading && (
            <Fragment>{isAuthenticated ? IsAuth : NotAuth}</Fragment>
        )}
    </Fragment>
    )

}


navbar.propTypes=
    {
        user:PropTypes.object.isRequired,
        logout:PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool,
        loading:PropTypes.bool
    }
const mapStateToProps=state=>
({
    user:state.auth.user,
    isAuthenticated:state.auth.isAuthenticated,
    loading:state.auth.user.loading

})
export default connect(mapStateToProps,{logout})(navbar);