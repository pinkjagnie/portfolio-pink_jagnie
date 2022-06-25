import React, { Component } from 'react';

import Main from './components/Main';
import About from './components/About';
import Toolbox from './components/Toolbox';
import Portfolio from './components/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />    
        <About />
        <Toolbox />
        <Portfolio />
      </div>
    );
  }
}

export default App;
