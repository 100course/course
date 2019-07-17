import PrivateRoute from "./routing/PrivateR";
import Courses from "./Courses";
import Videos from "./Videos";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Login from "./Login";
import AddCourse from "./AddCourse";
import ModifyCourse from "./ModifyCourse";
import AddMiniCourse from "./AddMiniCourse";
import MiniCourse from "./MiniCourse";
import AddVideo from "./AddVideo";
import StoreCourse from "./StoreCourse";
import NotFound from "./NotFound";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Routeer=()=>
{
    return(
    <Switch>

        <PrivateRoute exact path={'/courses'} component={Courses}/>
        <PrivateRoute exact path={'/videos'} component={Videos}/>
        <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
        <Route exact path={'/register'} component={Register}/>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/addcourse'} component={AddCourse}/>
        <Route exact path={'/modifycourse'} component={ModifyCourse}/>
        <Route exact path={'/addMiniCourse'} component={AddMiniCourse}/>
        <Route exact path={'/minicourse'} component={MiniCourse}/>
        <Route exact path={'/addvideo'} component={AddVideo}/>
        <Route exact path={'/store'} component={StoreCourse}/>

        <Route path="*" component={NotFound}/>


    </Switch>
    )
}
export default Routeer