import React, {Component, useState, Fragment} from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBIcon
} from 'mdbreact';
import {logout, login, register} from "../actions/auth"
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import Login from './Login'
import {showModalLogin,showModalRegister} from '../actions/ShowModal'
import Register from "./Register";


const TopNavigation = ({logout, isAuthenticated,showModalLogin,ModalLogin,showModalRegister,ModalRegister}) => {
    const [State, StateHandler] = useState({
        collapse: false,
        dropdownOpen: false,

    })

    const onClick = (e) => {
        StateHandler({
            ...State, collapse: !State.collapse

        })
    };


    const toggle = (e) => {
        StateHandler({
            ...State, dropdownOpen: !State.dropdownOpen
        });
    }


    const IsAuth =
        (

            <MDBNavbar className="navbar-fixed sticky-top" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong><span>Alpha</span> Courses</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={e => onClick(e)}/>
                <MDBCollapse isOpen={State.collapse} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent"
                                        to={'/dashboard'}><MDBIcon icon="at" className="mr-2"/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent"
                                        to={'/dashboard'}><MDBIcon fab icon="telegram" className="mr-2"/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent"
                                        to={'/dashboard'}><MDBIcon fab icon="instagram" className="mr-2"/></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink className="border border-light rounded mr-1 nav-link Ripple-parent  rounded "
                                        rel="noopener noreferrer" href="https://mdbootstrap.com/products/react-ui-kit/"
                                        target="_blank" onClick={logout}><MDBIcon icon="sign-out-alt" className="mr-2"/>Logout</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        )

    const NotIsAuth =

        (<MDBNavbar className=" flexible-navbar rounded" light expand="md" scrolling>
            <MDBNavbarBrand href="/">
                <strong><span>Alpha</span> Courses</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={e => onClick(e)}/>
            <MDBCollapse isOpen={State.collapse} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent"
                                    to={'/dashboard'}><MDBIcon icon="at" className="mr-2"/></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent"
                                    to={'/dashboard'}><MDBIcon fab icon="telegram" className="mr-2"/></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent"
                                    to={'/dashboard'}><MDBIcon fab icon="instagram" className="mr-2"/></MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink className="border border-light rounded mr-1 nav-link Ripple-parent  rounded "
                                    rel="noopener noreferrer" onClick={showModalLogin}><MDBIcon icon="sign-in-alt"
                                                                                                    className="mr-2"/>Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink className="border border-light rounded mr-1 nav-link Ripple-parent  rounded "
                                    rel="noopener noreferrer" onClick={showModalRegister}><MDBIcon icon="registered" className="mr-2"/>Register</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>)



    return (
        <Fragment>
            {isAuthenticated ? IsAuth : NotIsAuth}
            {ModalLogin ? <Login/>: null}
            {ModalRegister ? <Register/>: null}




        </Fragment>
    )



}
TopNavigation.propType =
    {
        user: PropTypes.bool.isRequired,
        ModalLogin:PropTypes.bool.isRequired,
        ModalRegister:PropTypes.bool.isRequired,
        showModalLogin:PropTypes.func.isRequired,
        showModalRegister:PropTypes.func.isRequired,

    }
const mapStateToProps = state =>
    ({
        isAuthenticated: state.auth.isAuthenticated,
        ModalLogin:state.Modal.ShowModalLogin,
        ModalRegister:state.Modal.ShowModalRegister

    })

export default connect(mapStateToProps, {logout, login, register,showModalLogin,showModalRegister})(TopNavigation);