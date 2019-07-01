import React, {useState, useEffect, Fragment} from 'react';
import {connect} from "react-redux";
import {setAlert} from "../actions/alert";
import {login} from "../actions/auth";
import PropTypes from 'prop-types';

const Login = ({setAlert, login}) => {
    const [formData, setFormData] = useState({
        password: '',
        email: ''
    });

    const { email, password} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) => {
        e.preventDefault();
        login({email,password});

    };

    return (
        <Fragment>
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
                Already have an account? <a href="login.html">Sign up</a>
            </p>
        </Fragment>
    );

};

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, {setAlert,login})(Login);


