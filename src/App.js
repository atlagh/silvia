import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
    	<div>
          <Navbar />
          <Home />
          <Footer />
        </div>
       
      )
  }
}

export default App;
