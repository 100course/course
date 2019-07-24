import React, {useState, useEffect, Fragment} from 'react';
import {connect} from "react-redux";
import {setAlert} from "../actions/alert";
import {register} from "../actions/auth";
import PropTypes from 'prop-types';
import {Link, Redirect} from "react-router-dom";
import {MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import {hideModalRegister} from "../actions/ShowModal";

const Register = ({setAlert, register,isAuthenticated,hideModalRegister}) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        modal:true
    });

    const {username, email, password, password2} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const toggle = () => {
        setFormData({...formData,modal:!formData.modal})
        {hideModalRegister()}

    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match!', 'danger');

        } else {
            register({username, email, password})
        }

    };
    if(isAuthenticated)
    return (<Redirect to={"/dashboard"}/>)

    return (
        <Fragment>

        <MDBContainer>

        <MDBModal isOpen={formData.modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input type="text" placeholder="Name" name="username" value={username} onChange={e => onChange(e)}/>
            </div>
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
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    //minLength="6"
                    value={password2} onChange={e => onChange(e)}
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Register"/>
        </form>
        <p className="my-1">
            Already have an account? <Link to ={"login"}>Sign In</Link>
        </p>
    </MDBModalBody>
    <MDBModalFooter>
    </MDBModalFooter>
</MDBModal>
</MDBContainer>
</Fragment>
    );

};
const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
});

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    hideModalRegister:PropTypes.func.isRequired
};


export default connect(mapStateToProps, {setAlert,register,hideModalRegister})(Register);