
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
import AddVideo from './component/AddVideo'
import CoursePage from './component/pages/CoursePage'
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
<<<<<<< HEAD

                            <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                            <PrivateRoute exact path={'/courses'} component={Courses}/>
=======
                            <PrivateRoute  path={'/dashboard'} component={Dashboard}/>
                            <PrivateRoute  path={'/coursepage'} component={CoursePage}/>
                            <PrivateRoute path={'/Video'} component/>
>>>>>>> 1fbe52c1377d8e0dd069f69bf2fee2bf5a25c834

                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    )
};
export default App;