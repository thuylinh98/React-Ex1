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
  console.log(this.state)
}
render(){
  return(
    <Wrapper>
      <Row>
          <img  src= {this.state.avt} alt="avt"></img> 
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
      <Button onClick={() => this.logout()}>
            Logout
      </Button>
    </Wrapper>
  );
}
}
export default User;
