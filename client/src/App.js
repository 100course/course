import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import UserPage from './component/UserPage';
import Register from "./component/register";
// import {Route} from "react-router";
// import {BrowserRouter} from "react-router-dom";
// import {BrowserRouter as Router, Route} from 'react-router-dom';

//hi there
class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={UserPage} />
                    <section className="container">
                        <Switch>
                            <Route exact path={'/register'} component={Register} />
                        </Switch>
                    </section>
                </div>
            </Router>
        )
    }
}

export default App;