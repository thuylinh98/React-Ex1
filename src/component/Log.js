import React, { Component } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank, 
} from './LogStyle';
class Log extends Component{
    constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: 0,
    }
    this.handleUserName1 = this.handleUserName.bind(this);
    this.handlePassword1 = this.handlePassword.bind(this);
  }

  login() {
    const params = {
        userName: this.state.userName,
        password: this.state.password,
    };

    
    
  }

  getUserInfo() {
    
  }

  handleUserName(event) {
    this.setState({ userName: event.target.value})
  }

  handlePassword(event) {
    this.setState({ password: event.target.value})
  }

render(){
  return(   
    <Wrapper>
        <PopupLoginWrapper>
            <Text color="#d3c8c8" fontSize={25}>LOGIN</Text>
            <Row>
                <Text color="#d3c8c8" fontSize={20}>Mã Sinh Viên</Text>
                <Input
             value={this.state.userName}
             onChange={this.handleUserName1}
            />
            </Row>
            <Row>
                <Text color="#d3c8c8" fontSize={20}>Password</Text>
                <Input
             value={this.state.password}
             onChange={this.handlePassword1}
              type="password"
                />
            </Row>
            <Row>
                 <label for="remember">
                    <input id="remember" type="checkbox" name="personality" />
                    Remember me
                </label> 
            </Row>
            <Button onClick={() => this.login()}
            >Login</Button>
            <a href="#">Reset password</a>
        </PopupLoginWrapper>
    </Wrapper>  
  );
}

}
export default Log;