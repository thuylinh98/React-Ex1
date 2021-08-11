import React, { Component } from 'react';
import axios from 'axios';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank, Label, Column, Img  
} from './UserStyle';

const defaultURL = "https://demo7405228.mockable.io/";

class User extends Component{
    constructor(props) {
    super(props);
    this.state = {
      avt: 'https://i.pinimg.com/236x/f6/5d/94/f65d94584446a1c48cdc5f80ad6b3c30.jpg',
      // email: '',
      // point:'',
      // testComplete: 0,
      // testNotComplete: 0, 
      userData:{
        email: '',
        point:'',
        complete: 0,
        notComplete: 0
      },
    }
  }
  // userData = {
  //     avt: 'https://i.pinimg.com/236x/f6/5d/94/f65d94584446a1c48cdc5f80ad6b3c30.jpg',
  //     email: 'linhltt1@hblab.vn',
  //     point:'1000',
  //     testComplete: 10,
  //     testNotComplete: 20
  // }
  getUserData = (id) => this.getUserInfo(`userInfo?id=${id}`);
  getUserInfo = (id)=>{ 
    const url = defaultURL + id;
    axios.get(url)
      .then(res => {
        const code = res.data;
         if(code === 503){ 
            throw res
          }else {
            this.setState({ userData: code });
          } 
      })
      .catch((error) => {
        const { message } = error;
        console.log('error: ', message);
      });
      console.log("test",this.state.userData)
  }

  componentDidMount() {
  const id = localStorage.getItem('userId');
  this.getUserData(id);
  // const email = this.state.userData.email;
  // const point = this.state.userData.point;
  // const testComplete = this.state.userData.testComplete;
  // const testNotComplete = this.state.userData.testNotComplete;
  // this.setState({ avt, email, point, testComplete,testNotComplete });
}
logout(){
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
        <Text>{this.state.userData.email}</Text>
      </Row>
      <Row>
        <Text>Point: {this.state.userData.point}</Text>
      </Row>
      <Row>
        <Text>Test complete: {this.state.userData.complete}</Text>
      </Row>
      <Row>
        <Text>test not complete: {this.state.userData.notComplete}</Text>
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
