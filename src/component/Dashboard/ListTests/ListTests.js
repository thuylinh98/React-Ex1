import React, { Component, location } from 'react';
import {
  Wrapper, PopupLoginWrapper, Text, Row,
  Input, Button, Blank, Label, ColumnLeft,
  ColumnRight, Img, Column, RowTest, RowNB, ButtonNB 
} from './ListTestsStyle';
import Test from './Test/Test';
const FILTER_VALUE = {
    all: "all",
    complete: true,
    notComplete: false
  }
class ListTests extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sort: FILTER_VALUE.all,
      showTest : [],
      testList: [],
      amount: 8, 
      page: 1,
      list: [{name: 'Test 1',time: '1',point:'1',difficult: '1',evaluate: 1,status: true},
            {name: 'Test 2',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 3',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 4',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 5',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 6',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 7',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 8',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 9',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
            {name: 'Test 10',time: '1',point:'1',difficult: '1',evaluate: 0,status: true}]
    }
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }
  componentDidMount() {
    this.setState({showTest: this.state.list.slice(0,this.state.amount), testList: this.state.list});
  }
  onChangeInput=(event)=>{
    const { name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  goTo(){
    console.log(this.state);
    this.search(this.state.search);
    console.log(this.state.showTest)
  }
  listPage = ()=>{
    var arr = [];
    var number=this.state.testList.length/this.state.amount;
    if (this.state.testList.length%this.state.amount >=0) number++;
    for (let i=1; i<number;i++){
      arr.push(i);
    }
    console.log(this.state.amount);
    return arr.map((element) => {
      return(
        <RowNB key={element}>
        <ButtonNB  onClick={() => this.nextPage(element)}>{element}</ButtonNB>
        </RowNB>
      )
    });
  };
  nextPage = (number) =>{
    var end = this.state.amount*number;
    this.setState({showTest: this.state.testList.slice(end-8,end), page: number})
    console.log("number",this.page)
  };
  search = (element) =>{
    var arr = [];
    for (let x of this.state.list){
      if (x.name===( element)) 
        arr.push(x);
    }
    this.setState({testList: arr, showTest: arr.slice(0,this.state.amount)})
    this.listPage();
  };
  handleChangeFilter=(event)=>{
    const {value}=event.target;
    console.log( 'value = ', value, typeof(value));
    this.setState({sort: value});
    
    const {list} = this.state;
    let arr = list;
    if(value!== FILTER_VALUE.all){
      arr = list.filter(item => item.status.toString() === value) 
    }

    this.setState({testList: arr, showTest: arr.slice(0,this.state.amount)})
    this.listPage();
    console.log("list",arr);
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
                onChange={this.onChangeInput}
                placeholder="Test name"></Input>
          <Button onClick={() => this.goTo()}>Go to</Button>
        </Column>
        <Column>
          <select name="sort"
                required
                value={this.state.sort}
                onChange={this.handleChangeFilter}>
            <option value={FILTER_VALUE.all}>All</option>
            <option value={FILTER_VALUE.complete}>Test Complete</option>
            <option value={FILTER_VALUE.notComplete}>Test Not Complete</option>
          </select>
        </Column>
      </Row>
      <RowTest>
        {this.state.showTest.length > 0 ?
          this.state.showTest.map(TestData =>
          <Test TestData={TestData} />) :  <Text>Không tìm thấy kết quả phù hợp</Text>
        }
      </RowTest>
      <RowNB>
        {this.listPage()}
      </RowNB>
    </Wrapper>
  );
}
}
export default ListTests;
