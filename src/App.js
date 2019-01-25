/******************************************************************************
Title           : App.js
Description     : The main file that contains all react components
******************************************************************************/


import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './sass/main.scss';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Slider from './components/carousel/Slider';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Prices from './components/prices/Prices';
import ItemsListPrice from './components/prices/ItemsListPrice';
import CreatePost from './components/prices/CreatePost';

// importing redux
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/createPost" component={CreatePost} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/itemsListPrice" component={ItemsListPrice} />
          
            <Footer />
          </div>
        </Router>

      </Provider>
    );
  }
}

export default App;
