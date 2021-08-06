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
  TestData={
    name: '1',
      time: '1',
      point:'1',
      difficult: '1',
      evaluate: 0,
      status: false
  }
render(){
  return(
    <Wrapper>
      <Row>
        <Text>{this.TestData.name}</Text>
        <Input type="checkbox"></Input>
      </Row>
      <Row>
        <Column>
          <Text>Time: {this.TestData.time}</Text>
          <Text>Point: {this.TestData.point}</Text>
          <Text>Difficult: {this.TestData.difficult}</Text>
        </Column>
        <Column>
          <Button>Start</Button>
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
