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
      <div className="App"
      ><div className="container">
          <Navigation />
          <Header />
          <Features classes="features" />
          <Services classes="services" />
          <Contact />
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
