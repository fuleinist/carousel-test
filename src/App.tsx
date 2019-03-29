import React, { Component } from 'react';
import './App.css'; 

import {SimpleSlider, MultipleItems, MultipleRows} from './components/slick/slick';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <SimpleSlider />
        <MultipleItems />
        <MultipleRows />
      </div>
    );
  }
}

export default App;
