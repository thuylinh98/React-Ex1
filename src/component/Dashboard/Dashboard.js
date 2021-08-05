import React, { Component } from 'react';
import User from './User/User';
import ListTests from './ListTests/ListTests';
import {
  Wrapper, PopupLoginWrapper, Text, Row,
  Input, Button, Blank, Label, ColumnLeft, ColumnRight, Img  
} from './DashboardStyle';
class Dashboard extends Component{
render(){
  return(
    <Wrapper>
      <ColumnLeft>
        <User />
      </ColumnLeft>
      <ColumnRight> <ListTests /></ColumnRight>
    </Wrapper>
  );
}
}
export default Dashboard;
