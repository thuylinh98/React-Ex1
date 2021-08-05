import React, { Component } from 'react';
import {
  Wrapper, PopupLoginWrapper, Text, Row,
  Input, Button, Blank, Label, ColumnLeft,
  ColumnRight, Img   
} from './ListTestsStyle';
import Test from './Test/Test';
class ListTests extends Component{
render(){
  return(
    <Wrapper>
      <Row>
        <ColumnLeft>
          <Input type="search"></Input>
          <Button>Go to</Button>
        </ColumnLeft>
        <ColumnRight>
           <select>
            <option>All</option>
            <option>Test Complete</option>
            <option>Test Not Complete</option>
</select>
        </ColumnRight>
      </Row>
      <Row><Test /></Row>
    </Wrapper>
  );
}
}
export default ListTests;
