import React, { Component, location } from 'react';
import {
  Wrapper, PopupLoginWrapper, Text, Row,
  Input, Button, Blank, Label, ColumnLeft,
  ColumnRight, Img, Column, RowTest, RowNB, ButtonNB 
} from './ListTestsStyle';
import Test from './Test/Test';
class ListTests extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sort: 'all',
      showTest : [],
      TestList: [],
      soluong: 8
    }
   
  }
  componentDidMount() {
    this.setState({showTest: this.List.slice(0,this.state.soluong), TestList: this.List});
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
    this.search(this.state.search);
    console.log(this.state.showTest)
  }
  taodayso = ()=>{
    var arr = [];
    var number=this.state.TestList.length/this.state.soluong;
    if (this.state.TestList.length%this.state.soluong >=0) number++;
    for (let i=1; i<number;i++){
      arr.push(i);
    }
    console.log(arr);
    return arr.map((element) => {
      return(
        <RowNB key={element}>
      
        <ButtonNB  onClick={() => this.chuyenTrang(element)}>{element}</ButtonNB>
        </RowNB>
      )
    });
  };
  chuyenTrang = (number) =>{
    var end = this.state.soluong*number;
    this.setState({showTest: this.state.TestList.slice(end-8,end)})

  };
  search = (element) =>{
    var arr = [];
    for (let x of this.List){
      if (x.name==( element)) 
        arr.push(x);
    }
    this.setState({TestList: arr, showTest: arr.slice(0,this.state.soluong)})
    this.taodayso();
  };
  handleChange=(event)=>{
    var arr=[];
    var target=event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
    console.log(value)
    if (value === "All") {arr=this.List}
    else if (value ==="Test Complete"){
      for (let x of this.List){
        if (x.status) 
          arr.push(x);
    }
    }else{
      for (let x of this.List){
        if (!x.status) 
          arr.push(x);
    }
    }
    this.setState({TestList: arr, showTest: arr.slice(0,this.state.soluong)})
    this.taodayso();
    console.log("list",this.state.TestList)
  }
  List=[
    {name: 'Test 1',time: '1',point:'1',difficult: '1',evaluate: 1,status: true},
    {name: 'Test 2',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 3',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 4',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 5',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 6',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 7',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 8',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 9',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
    {name: 'Test 10',time: '1',point:'1',difficult: '1',evaluate: 0,status: true}

  ]
render(){
  return(
    <Wrapper>
      <Row>
        <Column>
          <Input type="search"
                name="search"
                required
                value={this.state.search}
                onChange={this.onChange}
                placeholder="Test name"></Input>
          <Button onClick={() => this.goTo()}>Go to</Button>
        </Column>
        <Column>
          <select name="sort"
                required
                value={this.state.sort}
                onChange={this.handleChange}>
            <option>All</option>
            <option>Test Complete</option>
            <option>Test Not Complete</option>
          </select>
        </Column>
      </Row>
      <RowTest>
        {this.state.showTest.length > 0 ?
          this.state.showTest.map(TestData =>
          <Test TestData={TestData} />) :  <Text>Không tìm thấy kết quả phù hợp</Text>
        }
      </RowTest>
      <RowNB>{this.taodayso()}</RowNB>
    </Wrapper>
  );
}
}
export default ListTests;
