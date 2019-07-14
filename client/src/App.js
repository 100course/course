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
import Videos from './component/Videos'
import store from './store'
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import PrivateRoute from "./component/routing/PrivateR";
import navbar from './component/Navbar'
import StoreCourse from "./component/StoreCourse";
import AddMiniCourse from "./component/AddMiniCourse";
import MiniCourse from "./component/MiniCourse";
import NotFound from "./component/NotFound";
import './index.css';

//redux
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";
import TopNavigation from "./component/TopNavigation";
import SideNavigation from "./component/SideNavigation";


if (localStorage.token) {
    setAuthToken(localStorage.token);
}


const App = () => {
    useEffect(() => {
        console.log("app js effect");
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>

            <Router>


                    <Route exact path='/' component={Main}/>
                    <section className="flexible-navbar">
                    <Route path={'/dashboard'} component={SideNavigation}/>
                    <Route path={'/dashboard'} component={TopNavigation}/>
                    </section>
                    <section className="container">
              {/*          <Route component={NotFound}/>*/}
                        <Alert/>
                        <Switch>
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/addcourse'} component={AddCourse}/>
                            <Route exact path={'/modifycourse'} component={ModifyCourse}/>
                            <Route exact path={'/addMiniCourse'} component={AddMiniCourse}/>
                            <Route exact path={'/minicourse'} component={MiniCourse}/>
                            <Route exact path={'/addvideo'} component={AddVideo}/>
                            <Route exact path={'/store'} component={StoreCourse}/>
                            <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                            <PrivateRoute exact path={'/courses'} component={Courses}/>
                            <PrivateRoute exact path={'/videos'} component={Videos}/>



                        </Switch>
                    </section>
            </Router>
        </Provider>
    )
};
export default App;