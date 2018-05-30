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
    const gain1 = AC.createGain();
    const gain2 = AC.createGain();

    // creates delay nodes
    // add the delay upper limit as param (in seconds)
    const delay1 = AC.createDelay();
    const delay2 = AC.createDelay();

    const delayGain1 = AC.createGain();
    const delayGain2 = AC.createGain();

    // creates biquad filter nodes
    const highPass1 = AC.createBiquadFilter();
    // const hpGain1 = AC.createGain();
    const lowPass1 = AC.createBiquadFilter();
    const bandPass1 = AC.createBiquadFilter();

    const highPass2 = AC.createBiquadFilter();
    const lowPass2 = AC.createBiquadFilter();
    const bandPass2 = AC.createBiquadFilter();

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
    | Connecting All Audio Nodes
    |--------------------------------------------------------------------------
    */

    // connecting the gainNode to change volume
    source1.connect(gain1);
    source2.connect(gain2);

    // connecting the delayNode to add delay effect
    // gain1.connect(delay1);
    // gainNode2.connect(delayNode2);

    // delay1.connect(delayGain1);
    // delayGain1.connect(delay1);

    // connecting the biquadFilterNode to add filter effects
    // gain1.connect(highPass1).connect(lowPass1).connect(bandPass1);
    gain1.connect(highPass1);
    gain1.connect(lowPass1);
    gain1.connect(bandPass1);

    gain2.connect(highPass2);
    gain2.connect(lowPass2);
    gain2.connect(bandPass2);
    // delay2.connect(highShelf2).connect(lowShelf2).connect(bandPass2);

    // adding destination so sound can be played
    highPass1.connect(AC.destination);
    lowPass1.connect(AC.destination);
    bandPass1.connect(AC.destination);

    highPass2.connect(AC.destination);
    lowPass2.connect(AC.destination);
    bandPass2.connect(AC.destination);

    /*
    |--------------------------------------------------------------------------
    | Testing
    |--------------------------------------------------------------------------
    */

    // testing gain
    // hpGain1.gain.setValueAtTime(100, AC.currentTime);
    // gainNode2.gain.setValueAtTime(1, AC.currentTime);

    // testing delay
    // delay1.delayTime.setValueAtTime(0, AC.currentTime);
    // delayNode2.delayTime.setValueAtTime(0, AC.currentTime);

    // console.log(delayNode1.delayTime);

    // testing biquad filter
    // high pass
    highPass1.type = 'highpass';
    highPass1.frequency.value = 1000;
    highPass1.Q.value = 1;

    // band pass
    bandPass1.type = 'bandpass';
    bandPass1.frequency.value = 1600;
    bandPass1.Q.value = 1;

    // low pass
    lowPass1.type = 'lowpass';
    lowPass1.frequency.value = 250;
    lowPass1.Q.value = 1;

    // high pass
    highPass2.type = 'highpass';
    highPass2.frequency.value = 1000;
    highPass2.Q.value = 1;

    // band pass
    bandPass2.type = 'bandpass';
    bandPass2.frequency.value = 1600;
    bandPass2.Q.value = 1;

    // low pass
    lowPass2.type = 'lowpass';
    lowPass2.frequency.value = 250;
    lowPass2.Q.value = 1;

    /*
    |--------------------------------------------------------------------------
    | Initializing State
    |--------------------------------------------------------------------------
    */

    this.state = {
      // Web Audio API Contet
      AC,
      // songs on deck
      songs: {
        left: t,
        right: r,
      },
      // gain node to change gain
      gain: {
        left: gain1,
        right: gain2,
      },
      // high pass node to change high pass
      hpass: {
        left: highPass1,
        right: highPass2,
      },
      // low pass node to change low pass
      lpass: {
        left: lowPass1,
        right: lowPass2,
      },
      // band pass node to change band pass (mid pass)
      bpass: {
        left: bandPass1,
        right: bandPass2,
      },
      // initial play state
      play: {
        left: false,
        right: false,
      },
      // initial volume state
      // volume starts at 100%, can gain up to 200%
      vol: {
        left: 100,
        right: 100,
      },
      // initial crossfade state
      // 0 is the center (both songs)
      // -100 is the left song and 100 is the right song
      cfade: 0,
      bq: {
        hpass: {
          Q: {
            left: 0,
            right: 0,
          },
          frequency: {
            left: 2000,
            right: 2000,
          },
          detune: {
            left: 0,
            right: 0,
          },
        },
        bpass: {
          Q: {
            left: 0,
            right: 0,
          },
          frequency: {
            left: 1600,
            right: 1600,
          },
          detune: {
            left: 0,
            right: 0,
          },
        },
        lpass: {
          Q: {
            left: 0,
            right: 0,
          },
          frequency: {
            left: 250,
            right: 250,
          },
          detune: {
            left: 0,
            right: 0,
          },
        },
      },
    };

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
    // this.stateSet = this.stateSet.bind(this);
    // this.scratch = this.scratch.bind(this);
    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
    this.volume = this.volume.bind(this);
    this.crossfade = this.crossfade.bind(this);
    this.biquad = this.biquad.bind(this);
    // this.runtime = this.runtime.bind(this);
  }

  // functions
  // sets the state based on a template for state properties
  stateSet(parameter, side, value) {
    // setting state
    this.setState({
      // parameter for state object
      [parameter]: {
        // set to ensure both parameter states exist
        left: this.state[parameter].left,
        right: this.state[parameter].right,
        // setting the value of the changed side's state that is actually being changed
        [side]: value,
      },
    });
  }

  // sets the state based on the template for the biquad values in the state
  stateSetFilter(filter, parameter, side, value) {
    // setting state for filters
    this.setState({
      // parameter for state object
      bq: {
        // splatting the key:value pairs of bq inside the new state
        ...this.state.bq,
        [filter]:{
          // splatting the k:v pairs of the filter inside the new state
          ...this.state.bq[filter],
          [parameter]:{
            // splatting the l:v pairs of the parameter inside the new state
            ...this.state.bq[filter][parameter],
            // setting the value of the side that actually changes
            [side]: value,
          }
        }
      },
    });

    console.log(value);
  }

  // plays song/pauses song (depending on if song is alredy playing
  // takes song id as parameter
  playSong(song, side) {
    // toggles between play and pause depending on state
    !this.state.play[side] ? song.play() : song.pause();
    // sets state to opposite
    this.stateSet('play', side, !this.state.play[side]);
  }

  // stops song, reset playtime to beginning
  stopSong(song, side) {
    // no native stop in web audio apparently
    // pauses song
    song.pause();
    // makes current runtime to zero, effectively starting the song over
    song.currentTime = 0;
    // resets play state so play button works as intended
    this.stateSet('play', side, false);
  }

  // sets the volume of the song playing
  // takes volume number (value of slider), song id, and right/left side as parameters
  volume(vol, song, side) {
    // setting both the volume values for later use
    this.stateSet('vol', side, vol);
    // sets the gain to the value of the volume slider
    // gain starts at 100% (full volume)
    // can increase to 200% of its value
    this.state.gain[side].gain.setValueAtTime(vol / 100, this.state.AC.currentTime);
  }

  // crossfades the two songs (which song is playing at any given time)
  // takes the cfade number (slider value) as parameter
  // the slider value goes from -100 to 100
  // when cfade value is zero, both songs play
  // at -100, only the left song plays, at 100, only the right song plays
  crossfade(cfade) {
    // setting the crossfade value for later use
    this.setState({
      cfade,
    });

    // normalizing the crossfade
    // when cf value is below zero, cf2 decrements, cf1 stays at 100
    // when cf value is above zero, cf1 decrements, cf2 stays at 100
    const cf1 = cfade > 0 ? 100 - cfade : 100;
    const cf2 = cfade < 0 ? 100 + cfade : 100;

    // var gain1 = Math.cos(x * 0.5 * Math.PI);


    // const cf1 = Math.log10(cfade);
    // const cf2 = Math.log10(cfade);

    // normalizing the volume so the cf value doesn't reset the volume level
    // sets the ratio of the cf values above to the volume levels for the songs
    // as new volume levels for those songs
    const v1 = -(1 - (cf1 * this.state.vol.left)) / 10000;
    const v2 = (cf2 * this.state.vol.right) / 10000;

    // console.log("LOG",(+this.state.vol.left * (1 - (Math.log(+cf1) / Math.log(0.5)))) / 100)

    // const v1 = (+this.state.vol.left * (1 - (Math.log(+this.state.cfade) / Math.log(0.5)))) / 100
    // const v2 = (+this.state.vol.left * (1 - (Math.log(+this.state.cfade) / Math.log(0.5)))) / 100

    // console.log('CF1', cf1);
    // console.log('CF2', cf2);
    // console.log('V1', v1);
    // console.log('V2', v2);

    // sets the volume of the songs for crossfading
    // this.state.songs.left.vol = v1;
    this.state.gain.left.gain.setValueAtTime(v1, this.state.AC.currentTime);
    this.state.gain.right.gain.setValueAtTime(v2, this.state.AC.currentTime);
    // this.volume(v1, this.state.songs.left, 'left');
  }

  // changes the parameters of the varying filters
  biquad(filter, parameter, side, value) {
    // setting the filter values for later use
    this.stateSetFilter(filter, parameter, side, value);
    // sets the value of the filter
    // console.log(this.state.hp.left.frequency.value =value);
    console.log(filter)
    console.log(this.state[filter][side])
    // console.log("Value",this.state.hp[side][parameter].value);

    this.state[filter][side][parameter].value = value
    // this.state.hp.left.setValueAtTime(value, this.state.ime);
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
          bq={this.state.bq}
          biquad={this.biquad}
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
