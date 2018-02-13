import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation'
import Features from './components/features'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Services from './components/services'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <div className="container">
          <Features classes="features" />
          <Services classes="services" />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
