import React, { Component } from 'react';
import styled from 'styled-components';
import './Log.css'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 23px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background:Silver;
`;

class Log extends Component{
  constructor(props){
    super(props);
    this.state={
      MSV:'',
      passWord: ''
    }
  }
  
  onChange=(event)=>{
    var target=event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  login(){
    console.log(this.state);
  }

render(){
  return(
    <Wrapper>
      <div className="main">
        <h2>Login</h2>
        <div className="row">
            <text>Mã Sinh Viên</text>
            <input className="input"
              name="MSV"
              value={this.state.MSV}
              onChange={this.onChange}
            ></input>
        </div>
        <div className="row">
            <text >Password</text>
            <input className="input" 
                  type="password"
                  name="passWord"
                  value={this.state.passWord}
                  onChange={this.onChange}>
                  </input>
        </div>
        <label className="remember" for="remember">
            <input id="remember" type="checkbox" name="remember-me" onclick="lsRememberMe()" />
            Remember me
        </label>
        <div>
        <button type="submit" onClick={() => this.login()}>Login</button>
        </div>
        <div>
            <a className="reset" href="#" >Reset password</a>
        </div>
      </div>
    </Wrapper>

  );
}
}
export default Log;
