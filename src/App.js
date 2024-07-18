// src/App.js

import React from 'react';
import Header from './Components/Header';

import './App.css';
import Carousel from './Components/Carousel';

const App = () => {

  return (
    <div className="App">
      <Header/>
      
      <Carousel/>

    </div>
  );
};

export default App;
