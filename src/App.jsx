import React, { Component } from 'react';

// importing utilities
import test from './test.mp3';
import rebellion from './rebellion.mp3';
// import Sound from 'soundmanager2';

// importing components
import Nav from './components/Nav';
import End from './components/End';
import Turntable from './components/Turntable';

// const SM = Sound.soundManager;

class App extends Component {
  constructor(props) {
    super(props);

    // creates new audio context for the web audio API to work
    const AC = new (window.AudioContext || window.webkitAudioContext)();

    // creates gain nodes
    const gainNode1 = AC.createGain();
    const gainNode2 = AC.createGain();

    // creates delay nodes
    const delayNode1 = AC.createDelay(3);

    // creates biquad filter nodes
    const highShelf1 = AC.createBiquadFilter();
    const lowShelf1 = AC.createBiquadFilter();
    const highPass1 = AC.createBiquadFilter();
    const lowPass1 = AC.createBiquadFilter();

    // creating new audio objects
    const t = new Audio(test);
    const r = new Audio(rebellion);

    // converting the audio objects into a media source to be manipulated by the web audio API
    const source1 = AC.createMediaElementSource(t);
    const source2 = AC.createMediaElementSource(r);

    // connecting the gainNode to change volume
    source1.connect(gainNode1);
    source2.connect(gainNode2);

    // testing gain
    // gainNode1.gain.setValueAtTime(1, AC.currentTime);
    // gainNode2.gain.setValueAtTime(0.1, AC.currentTime);

    // connecting the delayNode to add delay effect
    gainNode1.connect(delayNode1);

    // testing delay
    // delayNode1.delayTime.setValueAtTime(3, AC.currentTime);
    // console.log(delayNode1.delayTime);

    // connecting the biquadFilterNode to add filter effects
    delayNode1.connect(highShelf1);
    highShelf1.connect(lowShelf1);

    // testing biquad filter
    highShelf1.type = 'highshelf';
    // highShelf1.frequency.setValueAtTime(1000, AC.currentTime);
    // highShelf1.gain.setValueAtTime(20, AC.currentTime);
    highShelf1.frequency.value = 4700;
    highShelf1.gain.value = 1git0;

    lowShelf1.type = 'lowshelf';
    // lowShelf1.frequency.setValueAtTime(1000, AC.currentTime);
    // lowShelf1.gain.setValueAtTime(20, AC.currentTime);
    lowShelf1.frequency.value = 35;
    lowShelf1.gain.value = 10;

    // adding destination so sound can be played
    // gainNode1.connect(AC.destination);
    // gainNode2.connect(AC.destination);

    // delayNode1.connect(AC.destination);
    // source1.connect(AC.destination);
    lowShelf1.connect(AC.destination);

    this.state = {
      songs: {
        t,
        r,
      },
      play: false,
    };
    // sound.play();
    // console.log(sound);
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
    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
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
  playSong(song) {
    // toggles between play and pause depending on state
    !this.state.play ? song.play() : song.pause();
    // sets state to opposite
    this.setState({ play: !this.state.play });

    console.log((song.duration / 60).toFixed(2));
  }

  // // stops song, reset playtime to beginning
  stopSong(song) {
    // no native stop in web audio apparently
    // pauses song
    song.pause();
    // makes current runtime to zero, effectively starting the song over
    song.currentTime = 0;
    // resets play state so play button works as intended
    this.setState({ play: false });
  }

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
        <Turntable
          songs={this.state.songs}
          play={this.playSong}
          stop={this.stopSong}
          // vol={this.state.vol}
          // volume={this.volume}
          // cfade={this.state.cfade}
          // crossfade={this.crossfade}
          // runtime={this.runtime}
          // rtime={this.state.rtime}
          // dur={this.state.dur}
        />
        <End />
      </div>
    );
  }
}

export default App;
