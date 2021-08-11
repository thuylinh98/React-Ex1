import React, { Component } from 'react';
import axios from 'axios';
import StorageUtils from './StorageUtils';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank, Label, 
} from './LogStyle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

const defaultURL = "https://demo7405228.mockable.io/";



class Log extends Component{
    constructor(props) {
    super(props);
    this.state = {
      MSV: '',
      passWord: '',
      rememberMe: false, 
      persons: '',
      baseUrl: null,
      name: ''
    }
   
  }
  componentDidMount() {
  const rememberMe = localStorage.getItem('rememberMe') === 'true';
  const MSV = rememberMe ? localStorage.getItem('MSV') : '';
  const passWord = rememberMe ? localStorage.getItem('passWord') : '';
  this.setState({ MSV, passWord, rememberMe });
  localStorage.setItem('token', '');
}
  onChange=(event)=>{
    var target=event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };

  login(){
    
    const { MSV, passWord, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('MSV', rememberMe ? MSV : '');
    localStorage.setItem('passWord', rememberMe ? passWord : '');

    //api
      const params = {
      MSV: this.state.MSV,
      passWord: this.state.passWord,
      rememberMe: this.state.rememberMe, 
    };

    axios.post(defaultURL+'login', {params})
      .then(res => {
        const code = res.data;
          if(code === 503){ 
            throw res
          }else {
            localStorage.setItem('token', code.token);
            localStorage.setItem('userId', code.userId);
            this.setState({ persons: code });
            window.location.replace('/');
          } 
      })
      .catch((error) => {
        const { message } = error;
        console.log('error: ', message);
      });

    if(!rememberMe){
      this.onClear();}

    console.log("login", this.state.persons);
    console.log("test",params)

  }
  onClear(){
    this.setState({
      MSV: '',
      passWord: '',
      rememberMe: false
    })
  }
render(){
  return(   
    <Wrapper>
        <PopupLoginWrapper>
            <Text color="#d3c8c8" fontSize={25}>LOGIN</Text>
            <Row>
                <Text color="#d3c8c8" fontSize={20}>Mã Sinh Viên</Text>
                <Input className="input"
                name="MSV"
                required
                value={this.state.MSV}
                onChange={this.onChange}
              ></Input>
            </Row>
            <Row>
                <Text color="#d3c8c8" fontSize={20}>Password</Text>
                <Input className="input" 
                  type="password"
                  name="passWord"
                  required
                  value={this.state.passWord}
                  onChange={this.onChange}>
                </Input>
            </Row>
            <Row>
                <Label for="remember">
                    
                     <input id="remember"
                            name="rememberMe" 
                            checked={this.state.rememberMe}
                            onChange={this.handleChange} 
                            type="checkbox"/> 
                     Remember me
                </Label> 
            </Row>
            <Button onClick={() => this.login()}>
              Login
            </Button>
            <Label><a href="#">Reset password</a></Label>
            
        </PopupLoginWrapper>
    </Wrapper>  
  );
}

}
export default Log;