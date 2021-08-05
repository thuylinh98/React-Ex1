import React, { Component } from 'react';
import Log from './component/Log';
import Login from './component/Login/Log';
import Dashboard from './component/Dashboard/Dashboard';
import User from './component/Dashboard/User/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component{
render(){
  return(
    <Router> 
      <div>
        <Switch>
          <Route path="/"> 
            <Dashboard/>
          </Route>
          <Route path="/dashboard"> <User /> </Route>
        </Switch>
      </div>
    </Router>

  );
}
}
export default App;
