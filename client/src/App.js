import React, {Component, Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
//Components

import Register from "./component/Register";
import Courses from "./component/Courses";
import Alert from "./component/alert";
import Main from './component/Main';
import AddCourse from './component/AddCourse';

import ModifyCourse from './component/ModifyCourse';

import {Provider} from 'react-redux';

import AddVideo from './component/AddVideo'

import store from './store'
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import PrivateRoute from "./component/routing/PrivateR";

//redux
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";


if (localStorage.token) {
    setAuthToken(localStorage.token);
}


const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Route exact path='/' component={Main}/>
                    <section className="container">
                        <Alert/>
                        <Switch>
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/addcourse'} component={AddCourse}/>

                            <Route exact path={'/modifycourse'} component={ModifyCourse}/>

                            <Route exact path={'/addvideo'} component={AddVideo}/>

                            <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                            <PrivateRoute exact path={'/courses'} component={Courses}/>

                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    )
};
export default App;