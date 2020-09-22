import React, { Component } from 'react';

import './App.css';
import My_navbar from './components/navbar/my_navbar';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
      
            
          <My_navbar /> 
          <img src={require('./images/slide1.webp')} className="roby"/>
      
         
         
    
             
      </BrowserRouter>

    );
  }
}

export default App;
