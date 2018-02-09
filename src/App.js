import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// components (similar to web pages)
import NavDropdownExample from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (

      <div className="App">

        {/* <NavDropdownExample /> */}

          <Route exact path='/' component={ Home }/>

          <Route exact path='/home' component={ Home }/>

          <Route path='/about' component={ About }/>

          <Route path='/services' component={ Services }/>

         <Footer />

      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
