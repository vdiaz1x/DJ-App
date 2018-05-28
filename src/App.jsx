import React, { Component } from 'react';

// importing utilities
import song from './test.mp3';
// import Sound from 'soundmanager2';

// importing components
import Nav from './components/Nav';
import End from './components/End';
import Turntable from './components/Turntable';

// const SM = Sound.soundManager;

class App extends Component {
  constructor(props) {
    super(props);

    const sound = new Audio(song);
    // sound.play();
    console.log(sound);
    // this.state = {
    //   SM: {},
    //   vol: {
    //     v1: 50,
    //     v2: 50,
    //   },
    //   cfade: 0,
    //   rtime: {
    //     rt1: 0,
    //     rt2: 0,
    //   },
    //   dur: {
    //     d1: 0,
    //     d2: 0,
    //   },
    // };

    // bindings
    // this.scratch = this.scratch.bind(this);
    // this.play = this.play.bind(this);
    // this.stop = this.stop.bind(this);
    // this.volume = this.volume.bind(this);
    // this.crossfade = this.crossfade.bind(this);
    // this.runtime = this.runtime.bind(this);
  }

  // component will mount initialization
  // componentWillMount() {
  //   this.setState({
  //     // initializing the soundmanager
  //     SM: SM.setup({
  //       // creating sound objects here
  //       onready() {
  //         SM.createSound({
  //           id: 'test',
  //           url: 'https://freesound.org/data/previews/354/354026_6567189-lq.ogg',
  //         });
  //         SM.createSound({
  //           id: 'synth',
  //           url: 'https://freesound.org/data/previews/429/429953_2731495-lq.ogg',
  //         });
  //       },
  //       // loading the song files as soon as they are created for faster playback later
  //       defaultOptions: {
  //         autoLoad: true,
  //       },
  //     }),
  //   });
  // }

  // // functions
  // // scratch(e) {
  // //   // console.log(this.state);
  // //   SM.play('test');
  // // }

  // // plays song/pauses song (depending on if song is alredy playing
  // // takes song id as parameter
  // play(song) {
  //   // console.log(this.state.play);
  //   SM.togglePause(song);

  //   let d1 = (SM.getSoundById('test').duration / 1000);
  //   d1 = d1.toFixed(2);

  //   let d2 = (SM.getSoundById('synth').duration);
  //   d2 = d2.toFixed(2);
  //   // console.log('THIS IS DURATION', d1);

  //   // let rt1 = (SM.getSoundById('test').position / 1000);
  //   // rt1 = rt1.toFixed(2);

  //   this.setState({
  //     // rtime: {
  //     //   rt1,
  //     // },
  //     dur: {
  //       d1,
  //       d2,
  //     },
  //   });
  // }

  // // stops song, reset playtime to beginning
  // stop(song) {
  //   SM.stop(song);
  // }

  // // sets the volume of the song playing
  // // takes volume number (value of slider), song id, and right/left side as parameters
  // volume(vol, song, side) {
  //   // setting both the volume values for later use
  //   this.setState({
  //     vol: {
  //       // set to ensure both volumes exist
  //       v1: this.state.vol.v1,
  //       v2: this.state.vol.v2,
  //       // setting the value of the song that is actually being changed
  //       [side]: vol,
  //     },
  //   });

  //   // setting the volume of the song by the id
  //   SM.setVolume(song, vol);
  //   // console.log('POSITION', SM.getSoundById(song).position);
  // }

  // // this crossfades the two songs (which song is playing at any given time)
  // // takes the crossfade number (value of slider) as parameter
  // // the slider value goes from -100 to 100
  // // when cf value is zero, both songs play. at -100, only the left song plays, when 100, only the right song plays
  // crossfade(cfade) {
  //   // setting the crossfade value for later use
  //   this.setState({
  //     cfade,
  //   });

  //   // normalizing the crossfade
  //   // when cf value is below zero, cf2 decrements, cf1 stays at 100
  //   // when cf value is above zero, cf1 decrements, cf2 stays at 100
  //   const cf1 = this.state.cfade > 0 ? 100 - cfade : 100;
  //   const cf2 = this.state.cfade < 0 ? 100 + cfade : 100;

  //   // normalizing the volume so the cf value doesn't reset the volume level
  //   // sets the ratio of the cf values above to the volume levels for the songs as new volume levels for those songs
  //   const v1 = (cf1 * this.state.vol.v1) / 100;
  //   const v2 = (cf2 * this.state.vol.v2) / 100;

  //   // console.log(v2);
  //   // console.log(cf1);
  //   // console.log(cf2);
  //   // console.log(this.state.cfade);

  //   // sets the volume of the songs for crossfading
  //   SM.setVolume('test', v1);
  //   SM.setVolume('synth', v2);
  // }

  // runtime(rtime, song, side) {
  //   const rt1 = (SM.getSoundById('test').position);
  //   const rt2 = (SM.getSoundById('synth').position);
  //   // rt1 = rt1.toFixed(2);

  //   // console.log(rtime);

  //   // rt1 = rt1 === 0 ? SM.getSoundById('test').duration : rt1;

  //   this.setState({
  //     rtime: {
  //       rt1: this.state.rtime.rt1,
  //       rt2: this.state.rtime.rt2,
  //       [side]: rt2,
  //     },
  //   });
  //   SM.getSoundById(song).setPosition(rtime);
  //   console.log(song, side);
  //   console.log(rtime);
  // }

  // render
  render() {
    // console.log(window.p5.SoundFile);
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
