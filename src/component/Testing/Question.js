import React, { Component } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank, Label, Column, Img, I
} from './QuestionStyle';


class Question extends Component{
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
  showQuestion = () =>{

    return this.props.question. answers.map((element) => {
      return( 
        <Text>{element}</Text>
      )
    });
  };
  submit(){
    this.showQuestion();
  }
render(){
  const {question, index}=this.props
  return(
    
    <Wrapper>
      <Row> 
        <Label>
          <h3>Câu {this.props.index +1 }: {this.props.question.question}</h3>
          {this.props.question.answers.map(element =>
            <Label>
              <Input type="radio" name="answers" value="answers" />
              {element}
            </Label>     
          )}  
        </Label> 
      </Row>
    </Wrapper>
  );
}
}
export default Question;