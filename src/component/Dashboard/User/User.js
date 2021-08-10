import React, { Component } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank, Label, Column, Img  
} from './UserStyle';
class User extends Component{
    constructor(props) {
    super(props);
    this.state = {
      avt: '',
      email: '',
      point:'',
      testComplete: 0,
      testNotComplete: 0
    }
  }
  userData = {
      avt: 'https://i.pinimg.com/236x/f6/5d/94/f65d94584446a1c48cdc5f80ad6b3c30.jpg',
      email: 'linhltt1@hblab.vn',
      point:'1000',
      testComplete: 10,
      testNotComplete: 20
  }
  componentDidMount() {
  const avt = this.userData.avt;
  const email = this.userData.email;
  const point = this.userData.point;
  const testComplete = this.userData.testComplete;
  const testNotComplete = this.userData.testNotComplete;
  this.setState({ avt, email, point, testComplete,testNotComplete });
}
logout(){
  console.log(this.state);
  window.location.replace('/login');
}
render(){
  return(
    <Wrapper>
      <Row>
          <Img  
          src= {this.state.avt} alt="avt"></Img> 
      </Row>
      <Row>
        <Text>{this.state.email}</Text>
      </Row>
      <Row>
        <Text>Point: {this.state.point}</Text>
      </Row>
      <Row>
        <Text>Test complete: {this.state.testComplete}</Text>
      </Row>
      <Row>
        <Text>test not complete: {this.state.testNotComplete}</Text>
      </Row>
      <Row>
        <Button onClick={() => this.logout()}>
              Logout
        </Button>
      </Row>
    </Wrapper>
  );
}
}
export default User;
