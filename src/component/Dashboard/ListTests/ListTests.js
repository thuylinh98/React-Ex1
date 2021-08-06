import React, { Component } from 'react';
import {
  Wrapper, PopupLoginWrapper, Text, Row,
  Input, Button, Blank, Label, ColumnLeft,
  ColumnRight, Img   
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
        <ColumnLeft>
          <Input type="search"
                name="search"
                required
                value={this.state.search}
                onChange={this.onChange}></Input>
          <Button onClick={() => this.goTo()}>Go to</Button>
        </ColumnLeft>
        <ColumnRight>
          <select name="sort"
                required
                value={this.state.sort}
                onChange={this.onChange}>
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
