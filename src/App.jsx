import React, { Component } from 'react';

// importing utilities
import Sound from 'react-sound';

// importing components
import Nav from './components/Nav';
import End from './components/End';
import Turntable from './components/Turntable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state
    };

    // bindings
    this.scratch = this.scratch.bind(this);
  }

  // functions
  scratch(e) {
    console.log(e.target);
  }

  // render
  render() {
    return (
      <div className="App">
        <Nav />
        <Sound url="https://freesound.org/data/previews/31/31255_215874-lq.mp3" playStatus={Sound.status.PLAYING} />
        <Turntable scratch={this.scratch} />
        <End />
      </div>
    );
  }
}

export default App;
