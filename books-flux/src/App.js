import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Route from './Routes'
class App extends Component {
  render() {
    return (
      <div>
     <Header />
     <Route />
     </div>
    )
  }
}

export default App;
