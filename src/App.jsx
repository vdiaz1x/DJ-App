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
      SM: {},
      play: false,
      value: 10,
      // stop: false,
      vol: 50,
    };

    // bindings
    // this.scratch = this.scratch.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }

  // component will mount initialization
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

  // functions
  // scratch(e) {
  //   // console.log(this.state);
  //   SM.play('test');
  // }

  play(song) {
    // console.log(this.state.play);
    !this.state.play ? SM.play(song) : SM.pause(song);
    this.setState({ play: !this.state.play });
  }

  stop(song) {
    SM.stop(song);
  }

  volume = vol => {
    this.setState({
      vol,
    });
    SM.setVolume('test',vol)
  }

  // render
  render() {
    // console.log(window.p5.SoundFile);
    return (
      <div className="App">
        <Nav />
        <Turntable
          // scratch={this.scratch}
          play={this.play}
          stop={this.stop}
          vol={this.state.vol}
          volume={this.volume}
        />
        <End />
      </div>
    );
  }
}

export default App;
