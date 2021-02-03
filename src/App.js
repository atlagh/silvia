import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
    	<div>
          <Navbar />
          <Footer />
        </div>
       
      )
  }
}

export default App;
