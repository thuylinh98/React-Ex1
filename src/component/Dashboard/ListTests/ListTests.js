import React, { Component } from 'react';
import {
  Wrapper, PopupLoginWrapper, Text, Row,
  Input, Button, Blank, Label, ColumnLeft,
  ColumnRight, Img, Column, RowTest,  
} from './ListTestsStyle';
import Test from './Test/Test';
class ListTests extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sort: 'all'
    }
   
  }
  onChange=(event)=>{
    var target=event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  goTo(){
    console.log(this.state);
  }
render(){
  return(
    <Wrapper>
      <Row>
        <Column>
          <Input type="search"
                name="search"
                required
                value={this.state.search}
                onChange={this.onChange}></Input>
          <Button onClick={() => this.goTo()}>Go to</Button>
        </Column>
        <Column>
          <select name="sort"
                required
                value={this.state.sort}
                onChange={this.onChange}>
            <option>All</option>
            <option>Test Complete</option>
            <option>Test Not Complete</option>
          </select>
        </Column>
      </Row>
      <RowTest>
        <Test /><Test /><Test /><Test />
        <Test /> <Test /><Test />
        <Test /><Test /><Test />
      </RowTest>
    </Wrapper>
  );
}
}
export default ListTests;
