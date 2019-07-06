import React, {Component,Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Prompt, Route, Switch} from 'react-router-dom';
import './App.css';
//Components

import Register from "./component/Register";
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
import {Provider} from 'react-redux';
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";


if(localStorage.token){
    setAuthToken(localStorage.token);
}



const App = () => {
   useEffect(() => {
        store.dispatch(loadUser());
    },[]);
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
                            <PrivateRoute  path={'/dashboard'} component={Dashboard}/>
                            <PrivateRoute  path={'/coursepage'} component={CoursePage}/>
                            <PrivateRoute path={'/Video'} component/>

                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    )
};
export default App;