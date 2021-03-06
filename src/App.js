import React, { Component } from 'react';

import ScrollToTop from './components/ScrollToTop';
import Main from './components/Main';
import About from './components/About';
import Toolbox from './components/Toolbox';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollToTop />
        <Main />    
        <About />
        <Toolbox />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
