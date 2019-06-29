import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {setAlert} from "../actions/alert";
import PropTypes from 'prop-types';

const Register = ({setAlert}) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:'',
        password2: ''
    });

    const {username, email, password, password2} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('passwords do not match', 'danger');
        } else {
            console.log(formData);
        }
        let formDataToServer = {
            username : formData.username,
            email: formData.email,
            password: formData.password
        };
        axios.post('http://localhost:5000/user/register', formDataToServer)
            .then(response => {
                console.log('from server');
                console.log(response.data);
            })
    };

    return(
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="username" value={username} onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}/>
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
                        minLength="6"
                        value={password} onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                        value={password2} onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </Fragment>
    );

};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};


export default connect(null, {setAlert})(Register);