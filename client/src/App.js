import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import UserPage from './component/UserPage';
import Register from "./component/Register";
import Alert from "./component/alert";
import Main from './component/Main';
// import {Route} from "react-router";
// import {BrowserRouter} from "react-router-dom";
// import {BrowserRouter as Router, Route} from 'react-router-dom';
//redux
import {Provider} from 'react-redux';
import store from './store'
import {Fragment} from "react";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import PrivateRoute from "./component/routing/PrivateR";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path='/' component={Main}/>
                    <section className="container">
                        <Alert/>
                        <Switch>
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/login'} component={Login}/>
                            <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                        </Switch>
                    </section>
                </div>
            </Router>
        </Provider>
    )
}
export default App;