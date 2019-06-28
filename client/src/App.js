import {BrowserRouter as Router, Route} from 'react-router';
import './App.css';
import React from 'react';

// import {Route} from "react-router";
// import {BrowserRouter} from "react-router-dom";
// import {BrowserRouter as Router, Route} from 'react-router-dom';
//redux
import {Provider} from 'react-redux';
import store from './store'
import {Fragment} from "react";

const App = () => {
    return (

        <Provider
            store={store}>

        </Provider>

    )
}
export default App;