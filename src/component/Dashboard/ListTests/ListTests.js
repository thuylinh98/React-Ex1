import React, { Component, location } from 'react';
import axios from 'axios';
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

const defaultURL ="https://611397b0cba40600170c1b16.mockapi.io/"

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
      list:[]
      // list: [{name: 'Test 1',time: '1',point:'1',difficult: '1',evaluate: 1,status: true},
      //       {name: 'Test 2',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 3',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 4',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 5',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 6',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 7',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 8',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 9',time: '1',point:'1',difficult: '1',evaluate: 0,status: false},
      //       {name: 'Test 10',time: '1',point:'1',difficult: '1',evaluate: 0,status: true}]
    }
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }
  componentDidMount() {
    const id = localStorage.getItem('userId');
    this.getList(id);
    //console.log("test", this.state.list)
    //this.setState({showTest: this.state.list.slice(0,this.state.amount), testList: this.state.list});
  }
  onChangeInput=(event)=>{
    const { name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  goTo(){
    this.search(this.state.search);
    //let test = this.getList(44);
    //console.log(this.state)
  }
  listPage = ()=>{
    var arr = [];
    var number=this.state.testList.length/this.state.amount;
    if (this.state.testList.length%this.state.amount >=0) number++;
    for (let i=1; i<number;i++){
      arr.push(i);
    }
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
    this.setState({sort: value});
    
    const {list} = this.state;
    let arr = list;
    if(value!== FILTER_VALUE.all){
      arr = list.filter(item => item.status.toString() === value) 
    }

    this.setState({testList: arr, showTest: arr.slice(0,this.state.amount)})
    this.listPage();
  }
  // api
  getList = (id) => this.getTestData(`listTest/tests?userId=${id}`);
  getTestData = (id)=>{ 
    const url = defaultURL + id;
    axios.get(url)
      .then(res => {
        const code = res.data;
         if(code === 503){ 
            throw res
          }else {
            this.setState({showTest: code[0].test.slice(0,this.state.amount), testList: code[0].test});
            //return code[0].test;
          } 
      })
      .catch((error) => {
        const { message } = error;
        console.log('error: ', message);
      });
      console.log("test",this.state.list)
      console.log(url)
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
