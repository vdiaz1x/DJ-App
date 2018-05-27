import React, { Component } from 'react';

// importing utilities
// import song from '../public/test.mp3'
import Sound from 'soundmanager2';

// importing components
import Nav from './components/Nav';
import End from './components/End';
import Turntable from './components/Turntable';

const SM = Sound.soundManager;

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
    // console.log(this.state);
    SM.play('test');
  }

  componentWillMount() {
    this.setState({
      SM: SM.setup({
        onready() {
          SM.createSound({
            id: 'test',
            url: 'https://freesound.org/data/previews/354/354026_6567189-lq.ogg',
          });
        },
      }),
    });
  }
  // render
  render() {
    // console.log(window.p5.SoundFile);
    return (
      <div className="App">
        <Nav />
        <Turntable scratch={this.scratch} />
        <End />
      </div>
    );
  }
}

export default App;
