import React, { Component } from 'react';

// importing utilities
import test from './test.mp3';
import chika from './chika.mp3';
// import Sound from 'soundmanager2';

// importing components
import Nav from './components/Nav';
import End from './components/End';
import Turntable from './components/Turntable';

// const SM = Sound.soundManager;

class App extends Component {
  constructor(props) {
    super(props);

    /*
    |--------------------------------------------------------------------------
    | Web Audio API
    |--------------------------------------------------------------------------
    */
    // creates new audio context for the web audio API to work
    const AC = new (window.AudioContext || window.webkitAudioContext)();

    /*
    |--------------------------------------------------------------------------
    | Web Audio API Nodes
    |--------------------------------------------------------------------------
    */

    // creates gain nodes
    const gainNode1 = AC.createGain();
    const gainNode2 = AC.createGain();

    // creates delay nodes
    // add the delay upper limit as param (in seconds)
    const delayNode1 = AC.createDelay(3);
    const delayNode2 = AC.createDelay(3);

    // creates biquad filter nodes
    const highShelf1 = AC.createBiquadFilter();
    const lowShelf1 = AC.createBiquadFilter();
    const highPass1 = AC.createBiquadFilter();
    const lowPass1 = AC.createBiquadFilter();

    const highShelf2 = AC.createBiquadFilter();
    const lowShelf2 = AC.createBiquadFilter();
    const highPass2 = AC.createBiquadFilter();
    const lowPass2 = AC.createBiquadFilter();

    /*
    |--------------------------------------------------------------------------
    | Initializing Audio for Web Audio API Manipulation
    |--------------------------------------------------------------------------
    */

    // creating new audio objects
    const t = new Audio(test);
    const r = new Audio(chika);

    // t.volume = 0.5;
    // r.volume = 0.5;

    // converting the audio objects into a media source to be manipulated by the web audio API
    const source1 = AC.createMediaElementSource(t);
    const source2 = AC.createMediaElementSource(r);

    /*
    |--------------------------------------------------------------------------
    | Connecting all audio nodes
    |--------------------------------------------------------------------------
    */

    // connecting the gainNode to change volume
    source1.connect(gainNode1);
    source2.connect(gainNode2);

    // connecting the delayNode to add delay effect
    gainNode1.connect(delayNode1);
    gainNode2.connect(delayNode2);

    // connecting the biquadFilterNode to add filter effects
    // delayNode1.connect(highPass1).connect(lowPass1).connect(highShelf1).connect(lowShelf1);
    // delayNode2.connect(highShelf2).connect(lowShelf2).connect(highPass2).connect(lowPass2);

    // adding destination so sound can be played
    // lowPass1.connect(AC.destination);
    // lowPass2.connect(AC.destination);

    // lowShelf1.connect(AC.destination);
    // lowShelf2.connect(AC.destination);
    delayNode1.connect(AC.destination);
    delayNode2.connect(AC.destination);
    // source2.connect(AC.destination);
    // gainNode2.connect(AC.destination);

    /*
    |--------------------------------------------------------------------------
    | Testing
    |--------------------------------------------------------------------------
    */

    // testing gain
    gainNode1.gain.setValueAtTime(1, AC.currentTime);
    gainNode2.gain.setValueAtTime(1, AC.currentTime);

    // testing delay
    delayNode1.delayTime.setValueAtTime(0, AC.currentTime);
    delayNode2.delayTime.setValueAtTime(0, AC.currentTime);

    // console.log(delayNode1.delayTime);

    // testing biquad filter
    // high pass
    // highPass1.type = 'highpass';
    // highPass1.frequency.value = 4000;
    // highPass1.Q.value = 1;

    // lowPass1.type = 'lowpass';
    // lowPass1.frequency.value = 270;
    // lowPass1.Q.value = 1;

    // highPass2.type = 'highpass';
    // highPass2.frequency.value = 4000;
    // highPass2.Q.value = 1;

    // lowPass2.type = 'lowpass';
    // lowPass2.frequency.value = 270;
    // lowPass2.Q.value = 1;

    /*
    |--------------------------------------------------------------------------
    | Initializing State
    |--------------------------------------------------------------------------
    */

    this.state = {
      AC,
      songs: {
        left: t,
        right: r,
      },
      source: {
        left: gainNode1,
        right: gainNode2,
      },
      play: false,
      vol: {
        left: 50,
        right: 50,
      },
      cfade: 50,
    };
    // sound.play();
    // console.log(sound);
    // this.state = {
    //   SM: {},
    //
    //   rtime: {
    //     rt1: 0,
    //     rt2: 0,
    //   },
    //   dur: {
    //     d1: 0,
    //     d2: 0,
    //   },
    // };

    /*
    |--------------------------------------------------------------------------
    | Function Bindings
    |--------------------------------------------------------------------------
    */

    // bindings
    // this.scratch = this.scratch.bind(this);
    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
    this.volume = this.volume.bind(this);
    this.crossfade = this.crossfade.bind(this);
    // this.runtime = this.runtime.bind(this);
  }

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
    // console.log(song);


    // console.log((song.duration / 60).toFixed(2));
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
  volume(vol, song, side) {
    // setting both the volume values for later use
    console.log(vol);

    this.setState({
      vol: {
        // set to ensure both volumes exist
        left: this.state.vol.left,
        right: this.state.vol.right,
        // setting the value of the song that is actually being changed
        [side]: vol,
      },
    });

    // setting the volume of the song by the id
    // console.log(vol);
    // console.log('VOLUME AUDIO', song.volume);
    // song.volume = vol / 100;
    // console.log('VOLUME AUDIO STATE', this.state.vol[side]);
    // console.log('GAIN', this.state.source[side].gain);

    // sets the gain to the value of the volume slider
    // gain starts at 100% (full volume)
    // can increase to 200% of its value
    this.state.source[side].gain.setValueAtTime(vol / 100 * 5, this.state.AC.currentTime);
  }

  // // this crossfades the two songs (which song is playing at any given time)
  // // takes the crossfade number (value of slider) as parameter
  // // the slider value goes from -100 to 100
  // // when cf value is zero, both songs play. at -100, only the left song plays, when 100, only the right song plays
  crossfade(cfade) {
  //   // setting the crossfade value for later use
    this.setState({
      cfade,
    });

    // console.log('CROSSFADE');
    // console.log(this.state);

    // normalizing the crossfade
    // when cf value is below zero, cf2 decrements, cf1 stays at 100
    // when cf value is above zero, cf1 decrements, cf2 stays at 100
    // const cf1 = this.state.cfade > 0 ? 100 - cfade : 100;
    // const cf2 = this.state.cfade < 0 ? 100 + cfade : 100;

    const cf1 = Math.log10(cfade);
    const cf2 = Math.log10(cfade);

    // normalizing the volume so the cf value doesn't reset the volume level
    // sets the ratio of the cf values above to the volume levels for the songs as new volume levels for those songs
    const v1 = 100-(cf1 * this.state.vol.left);
    const v2 = (cf2 * this.state.vol.right);

    console.log('CF1', cf1);
    console.log('CF2', cf2);
    console.log('V1', v1);
    console.log('V2', v2);

    // sets the volume of the songs for crossfading
    // this.state.songs.left.vol = v1;
    this.state.source.left.gain.setValueAtTime(v1 * 2, this.state.AC.currentTime);
    this.state.source.right.gain.setValueAtTime(v2 * 2, this.state.AC.currentTime);
    // this.volume(v1, this.state.songs.left, 'left');
  }

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
          vol={this.state.vol}
          volume={this.volume}
          cfade={this.state.cfade}
          crossfade={this.crossfade}
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
