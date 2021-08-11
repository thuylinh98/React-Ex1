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
    console.log(this.props.TestData);
   // this.getStar(this.props.TestData.evaluate);
  }
  getStar(number){
    let arr =[];
    for (let i=0; i<number;i++){
      arr.push(i);
    }
    console.log(arr)
    return arr.map((element) => {
      return(
        <I className="fas fa-star"></I>
      )
    });
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
          {this.getStar(this.props.TestData.evaluate)}
        </Column>
      </Row>
    </Wrapper>
  );
}
}
export default ListTests;
