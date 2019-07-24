//Initial Setup
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './index.css';

//Components
import Alert from "./component/alert";
import store from './store'
import PrivateRoute from "./component/routing/PrivateR";
import TopNavigation from "./component/TopNavigation";
import SideNavigation from "./component/SideNavigation";
import Slider from './component/Slider'
import StoreCourse from "./component/StoreCourse"
import Routeer from './component/Router'
import Login from './component/Login';
//redux
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";
import {Provider} from 'react-redux';

import MiniCourseViewStore from './component/MiniCourseViewStore';

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
            <section className=" flexible-content">
                <Router>

                    <Route exact path={'/'} component={SideNavigation}/>
                    <Route path={''} component={TopNavigation}/>
                    <Route exact path={'/'} component={Slider}/>
                    <Route exact path={'/'} component={StoreCourse}/>
                    <Route path={'/MiniCourseViewStore/:id'} component={MiniCourseViewStore}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Alert/>
                    <Router/>
                </Router>
            </section>

        </Provider>
    )
};
export default App;
