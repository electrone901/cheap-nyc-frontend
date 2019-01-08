/******************************************************************************
Title           : App.js
Description     : The main file that contains all react components
******************************************************************************/


import React, { Component } from 'react';
import './sass/main.scss';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Slider from './components/carousel/Slider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default App;
