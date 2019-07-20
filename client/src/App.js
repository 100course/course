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
import StoreCourse from "./component/StoreCourse"
import Routeer from './component/Router'

//redux
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";
import {Provider} from 'react-redux';


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
            <section className="flexible-navbar flexible-content">
                <Router>
                    <Route path={''} component={SideNavigation}/>
                    <Route path={''} component={TopNavigation}/>
                    <Route exact path={''} component={StoreCourse}/>
                    <Alert/>
                    <Routeer/>
                </Router>
            </section>

        </Provider>
    )
};
export default App;