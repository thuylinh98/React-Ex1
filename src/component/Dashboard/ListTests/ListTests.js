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
      amount: 8, 
      page: 1,
      List: [{name: 'Test 1',time: '1',point:'1',difficult: '1',evaluate: 1,status: true},
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
    this.setState({showTest: this.state.List.slice(0,this.state.amount), TestList: this.state.List});
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
    var number=this.state.TestList.length/this.state.amount;
    if (this.state.TestList.length%this.state.amount >=0) number++;
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
    this.setState({showTest: this.state.TestList.slice(end-8,end), page: number})
    console.log("number",this.page)
  };
  search = (element) =>{
    var arr = [];
    for (let x of this.state.List){
      if (x.name===( element)) 
        arr.push(x);
    }
    this.setState({TestList: arr, showTest: arr.slice(0,this.state.amount)})
    this.listPage();
  };
  handleChangeFilter=(event)=>{
    var arr=[];
    let sort = event.target.value;
    this.setState({sort: sort});
    console.log(this.state.sort)
    if (sort === "All") {arr=this.state.List}
    else if (sort ==="Test Complete"){
      for (let x of this.state.List){
        if (x.status) 
          arr.push(x);
    }
    }else{
      for (let x of this.state.List){
        if (!x.status) 
          arr.push(x);
    }
    }
    this.setState({TestList: arr, showTest: arr.slice(0,this.state.amount)})
    this.listPage();
    console.log("list",this.state.TestList)
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
      <RowNB>
        {this.listPage()}
      </RowNB>
    </Wrapper>
  );
}
}
export default ListTests;
