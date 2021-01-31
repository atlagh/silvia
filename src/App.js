import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';

class App extends React.Component {
  constructor(){

    super();
  }
  render(){
    return(
          <Navbar />
       
      )
  }
}

export default App;
