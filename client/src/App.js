import React, { Component } from 'react';
import './App.css';
import Course from "./Course"
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

//hi there
class App extends Component {
  constructor()
  {
    super()
    this.state={

        

      
    }
  }
  componentDidMount() {

  }

  render()
 
  {




    
  
  return(


        <div>
          <BrowserRouter>
          {<Route path=""  component={Course}/>}
          </BrowserRouter>
        </div>



  )
  }
  }    
export default App;