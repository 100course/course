import React, {Fragment,useState} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import './simple-sidebar.css'
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
        &:focus,&:hover,&:active
        
        {
        color:#00D5C0
        }
      
    }
`;



const navbar = ({user, logout, isAuthenticated, loading}) => {
    const[Hide,ShowHandler]=useState({
        ishiddern:false

    })
    const Onclick=(e)=>
    {
        ShowHandler({
            ishiddern: false
        })
    }
    const style={
        visibility:Hide.ishiddern
    }

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
            <Fragment>
                <div className="d-flex" id="wrapper">


                    <div className="bg-dark border-right " id="sidebar-wrapper" style={style} >
                        <div className="sidebar-heading"><span className={'color'}>Alpha</span><span className={"obvios"} > Courses</span>  <OurLogo/></div>
                        <div className="list-group list-group-flush">

                                <h3 className="list-group-item  bg-dark obvios">{user.username}</h3>
                            <StyledLink to={'/dashboard'}>
                            <a  className="list-group-item list-group-item-action bg-dark">Dashboard</a>
                            </StyledLink>
                            <StyledLink to={'/minicourse'}>
                                <a  className="list-group-item list-group-item-action bg-dark">Your courses</a>
                            </StyledLink>

                        </div>
                    </div>



                    <div id="page-content-wrapper">

                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                            {/*<button className="btn btn-primary" id="menu-toggle" onClick={e=>Onclick(e)}>Make it bigger</button>

                            <button className="navbar-toggler"   type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>*/}

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                                    <li className="nav-item ">

                                        <a className="nav-link alikebutton"  id="navbarDropdown"
                                           role="button"  aria-haspopup="true"
                                           aria-expanded="false" onClick={logout}>
                                            <StyledLink>
                                            Logout <SignOut/>
                                        </StyledLink>
                                        </a>
                                    </li>


                                </ul>

                            </div>
                        </nav>

                      {/*  <div className="container-fluid">
                            <h1 className="mt-4">Simple Sidebar</h1>
                            <p>The starting state of the menu will appear collapsed on smaller screens, and will appear
                                non-collapsed on larger screens. When toggled using the button below, the menu will
                                change.</p>
                            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top
                                navbar is optional, and just for demonstration. Just create an element with
                                the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
                        </div>*/}
                        <h1>Courses go here!!</h1>
                    </div>


                </div>
            </Fragment>



)
    return (
        <Fragment>
            {!loading && (
                <Fragment>{isAuthenticated ? IsAuth : NotAuth}</Fragment>
            )}
        </Fragment>
    )

}


navbar.propTypes =
    {
        user: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        loading: PropTypes.bool
    }
const mapStateToProps = state =>
    ({
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.user.loading

    })
export default connect(mapStateToProps, {logout})(navbar);
