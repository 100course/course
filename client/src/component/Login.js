
import React, {useState, useEffect, Fragment} from 'react';
import {connect} from "react-redux";
import {setAlert} from "../actions/alert";
import {login} from "../actions/auth";
import PropTypes from 'prop-types';
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {hideModalLogin} from "../actions/ShowModal";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const Login = ({setAlert, login,isAuthenticated,hideModalLogin}) => {

    const [formData, setFormData] = useState({
        password: '',
        email: '',
        modal:true
    });

    const { email, password} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) => {
        e.preventDefault();
        login({email,password});

    };
    const toggle = () => {
        setFormData({...formData,modal:!formData.modal})
        {hideModalLogin()}

    }
    if(isAuthenticated)
    {
        return <Redirect to={"/dashboard"}/>
    }

    return (
        <Fragment>

            <MDBContainer>

                <MDBModal isOpen={formData.modal} toggle={toggle}>
                    <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                        <h1 className="large text-primary">Sign Up</h1>
                        <p className="lead"><i className="fas fa-user"></i> log in</p>
                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" name="email" value={email}
                                       onChange={e => onChange(e)}/>
                                <small className="form-text"
                                >This site uses Gravatar so if you want a profile image, use a
                                    Gravatar email
                                </small
                                >
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    // minLength="6"
                                    value={password} onChange={e => onChange(e)}
                                />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Login"/>
                        </form>
                        <p className="my-1">
                            Already have an account? <Link to={"register"}>Sign up</Link>
                        </p>
                    </MDBModalBody>
                    <MDBModalFooter>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        </Fragment>
    );

};

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool.isRequired,
    hideModalLogin:PropTypes.func.isRequired
};
const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
});


export default connect(mapStateToProps, {setAlert,login,hideModalLogin})(Login);


