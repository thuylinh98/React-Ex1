import React, { Component } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank, Label, Column, Img, I
} from './TestingStyle';
import Question from './Question'

class Testing extends Component{
  constructor(props) {
    super(props);
    this.state = {
      test: '',
      questions: [
          {
            question: 'Cau 1',
            answers: [
                'Dap an 1', 'Dap an 2', 'Dap an 3', 'Dap an 4'
            ]
          },
          {
            question: 'Cau 2',
            answers: [
                'Dap an 1', 'Dap an 2', 'Dap an 3'
            ]
          },
          {
            question: 'Cau 3',
            answers: [
                'Dap an 1', 'Dap an 2'
            ]
          }

      ]
    }
  }
  componentDidMount() {
      const test = localStorage.getItem('testing');
      this.setState({test: JSON.parse(test)})
  }
  submit(){
      console.log(this.state.questions)
  }
render(){
  //const {TestData}=this.props
  return(
   <Wrapper>
    <Row>
        <h1>{this.state.test.name}</h1>
        <Text>Time: {this.state.test.time}</Text>
        <Text>Point: {this.state.test.point}</Text>
        <Text>Difficult: {this.state.test.difficult}</Text>
        <br />
        <h2>Bài làm</h2>
    </Row>
    <Row>
        {this.state.questions.map(function(question, index) { 
           return <Question question={question} index={index}/>}
        )}
        
    </Row>
    <Row>
        <Button onClick={() => this.submit()}>Submit</Button>
    </Row>
   </Wrapper> 
  );
}
}
export default Testing;
