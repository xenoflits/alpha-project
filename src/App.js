import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation'
import Features from './components/features'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
        <header>header</header>
        <Features feature="feature 1"/>
        <Features feature="feature 2"/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
