import React, { Component } from 'react';
import './App.css';
import Course from './Course';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom"
import axios from 'axios';

//hi there
class App extends Component {
  constructor()
  {
    super()
    this.state={
      Course:[]
        

      
    }
  }
  componentDidMount()
  {
    axios.get('http://localhost:5000/courses')
            .then(response=>{this.setState({Course:response.data})})
     
  
  }
  render()
 
  {
    const Courses=this.state.Course.map(course=>
      {
        return <Course key={course._id} Name={course.name} Volume={course.volume} Length={course.length}  Date={course.date} Tags={course.tags} picture={course.picture} />
      })



    
  
  return(
      <BrowserRouter>
        <div>
          {Courses}
        </div>
        <Route path="/hi there" exact render={()=><h1>Home</h1>}/>
            </BrowserRouter>


  )
  }
  }    
export default App;