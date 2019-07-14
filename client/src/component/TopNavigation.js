import React, { Component,useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import {logout} from "../actions/auth"
import {connect} from 'react-redux'


const TopNavigation=({logout})=>
{
const [State,StateHandler]=useState({
collapse:false,
dropdownOpen:false

})






    const onClick = (e) => {
        StateHandler({
            ...State,collapse:!State.collapse
        })
        };


    const toggle = (e) => {
        this.setState({
            ...State,dropdownOpen:!State.dropdownOpen
        });
    }

        return (
            <MDBNavbar className="flexible-navbar rounded" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong><span>Alpha</span> Courses</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { e=>onClick(e) } />
                <MDBCollapse isOpen = { State.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent" to={'/dashboard'} ><MDBIcon  icon="at" className="mr-2"/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent" to={'/dashboard'} ><MDBIcon fab icon="telegram" className="mr-2"/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink rel="noopener noreferrer" className="nav-link Ripple-parent" to={'/dashboard'} ><MDBIcon  fab icon="instagram" className="mr-2"/></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                     {/*   <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>MDB GitHub</a>
                        </MDBNavItem>*/}
                        <MDBNavItem>
                            <MDBNavLink className="border border-light rounded mr-1 nav-link Ripple-parent rounded " rel="noopener noreferrer" href="https://mdbootstrap.com/products/react-ui-kit/" target="_blank" onClick={logout}><MDBIcon  icon="sign-out-alt" className="mr-2"/>Logout</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
}

export default connect(null,{logout})(TopNavigation);