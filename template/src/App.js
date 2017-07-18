import React, { Component } from 'react';
import './App.css';
import Routes from './components/common/routes/routes'
import Navbar from './components/common/Navbar'
class App extends Component {
  render() {
    return (
      <div className='rumen'>
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
