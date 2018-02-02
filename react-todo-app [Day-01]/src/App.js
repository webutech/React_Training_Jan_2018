import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/common/headerComponent';
import FooterComponent from './component/common/footerComponent';
import TodoListComponent from './component/todoListComponent';

class App extends Component {
  render() {
    return (
      <div id="container">
        <div id="header">           
              <HeaderComponent/>  
            
        </div>

        <div id="main">
          <TodoListComponent/>
        </div>

         <div id="footer">
          <FooterComponent createdBy="Pankaj Sharma"/>
        </div>

      </div>
    );
  }
}

export default App;
