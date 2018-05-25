import React, { Component } from 'react';

// importing components
import Nav from './components/Nav';
import End from './components/End';
import Turntable from './components/Turntable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Turntable />
        <End />
      </div>
    );
  }
}

export default App;
