import React, { Component } from 'react';

import Main from './components/Main';
import About from './components/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />    
        <About />
      </div>
    );
  }
}

export default App;
