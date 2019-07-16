import React, {Fragment} from 'react';
import logo from "../assets/mdb-react.png";
import {MDBListGroup, MDBListGroupItem, MDBIcon} from 'mdbreact';
import {NavLink} from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div className='flexible-content'>
            <div className="sidebar-fixed  position-fixed rounded">
                <a href="#!" className="logo-wrapper waves-effect">
                    <h1>Our logo</h1>

                </a>
                <MDBListGroup className="list-group-flush">
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="play-circle" className="mr-3"/>
                            Courses
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3"/>
                            Profile
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/tables" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="blog" className="mr-3"/>
                            Blog
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/maps" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="question" className="mr-3"/>
                            Forum
                        </MDBListGroupItem>

                    </NavLink>
                </MDBListGroup>
            </div>


            <div className="sidebar-fixed1  position-fixed rounded ">
                <h3 className="SideNavbar1ItemColor">Filter by : </h3>


                <MDBListGroup className="list-group-flush">
                    <MDBListGroupItem>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultUnchecked1"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked1">All</label>
                        </div>
                    </MDBListGroupItem>

                    <MDBListGroupItem>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultUnchecked2"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked2">Programming</label>
                        </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultUnchecked3"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked3">Designing</label>
                        </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultUnchecked4"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked4">Other 1</label>
                        </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultUnchecked5"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked5">Other 2</label>
                        </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultUnchecked6"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked6">Other 3</label>
                        </div>
                    </MDBListGroupItem>
                <MDBListGroupItem>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked7"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked7">Other 4</label>
                    </div>
                </MDBListGroupItem>
                </MDBListGroup>
            </div>




        </div>

    )
}
export default SideNavigation;