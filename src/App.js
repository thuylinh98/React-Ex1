import React, { Component } from 'react';
import Log from './component/Log';
import Login from './component/Login/Log';
import Dashboard from './component/Dashboard/Dashboard';
import User from './component/Dashboard/User/User';
import Testing from './component/Testing/Testing';

import {
  BrowserRouter, Switch,
  Route, Redirect,
} from 'react-router-dom';

//style
import styled from 'styled-components';
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: blue;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
`;


class NotFound extends Component{
  render() {
    return (
      <Wrapper>
        <div >#NOT FOUND</div>
      </Wrapper>
    )
  }
}
class App extends Component{
render(){
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Log} /> 
      <Route exact path="/Testing" component={Testing} />
      <Route component={NotFound} />
    </Switch>
</BrowserRouter>

  );
}
}
export default App;
