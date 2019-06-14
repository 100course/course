import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router';
import './App.css';
import UserPage from './component/UserPage';
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
            //<Router>
                <div>
                    <UserPage/>
                </div>
            //</Router>
        )
    }
}

export default App;