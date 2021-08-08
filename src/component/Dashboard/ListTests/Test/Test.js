import React, { Component } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank, Label, Column, Img, I
} from './TestStyle';
import '@fortawesome/fontawesome-free/css/all.min.css';
class ListTests extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: '',
      point:'',
      difficult: '',
      evaluate: 0,
      status: false
    }
  }
  start(){
    console.log();
  }
render(){
  const {TestData}=this.props
  return(
    <Wrapper>
      <Row>
        <Text>{TestData.name}</Text>
        <Input type="checkbox"
               name="status" 
              checked={TestData.status}
        ></Input>
      </Row>
      <Row>
        <Column>
          <Text>Time: {TestData.time}</Text>
          <Text>Point: {TestData.point}</Text>
          <Text>Difficult: {TestData.difficult}</Text>
        </Column>
        <Column>
          <Button onClick={() => this.start()}>Start</Button>
        </Column>
      </Row>
      <Row>
        <Column>       
          <I className="fas fa-star"></I>
          <I className="fas fa-star"></I>
          <I className="fas fa-star"></I>
          <I className="fas fa-star"></I>
          <I className="fas fa-star"></I>
        </Column>
      </Row>
    </Wrapper>
  );
}
}
export default ListTests;
