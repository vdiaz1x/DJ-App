import React, { Component } from 'react';
import firebase, { auth, provider, db } from './firebase.js';
import { Route, Switch } from 'react-router-dom';

// importing music
// import test from './test.mp3';
// import chika from './chika.mp3';

import left from './control.mp3';
import right from './clarity.mp3';
import impulse from './impulse.wav';

import bomb from './samples/flexbomb.mp3';
import horn from './samples/airhorn.mp3';
import bed from './samples/bedsqueak.mp3';
import lex from './samples/lexluger.mp3';

// importing turntable components
import Nav from './components/Nav';
import End from './components/End';
import Turntable from './components/Turntable';

// importing register/log in forms
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);

    /*
    |--------------------------------------------------------------------------
    | Web Audio API
    |--------------------------------------------------------------------------
    */
    // creates new audio context for the web audio API to work
    const AC = new window.AudioContext();

    /*
    |--------------------------------------------------------------------------
    | Initializing Audio for Web Audio API Manipulation
    |--------------------------------------------------------------------------
    */

    // creating new audio objects
    const l = new Audio(left);
    const r = new Audio(right);
    // let decode;
    // t.playbackRate = 0.5;
    // console.log(db);

    // creating samples
    const s1 = new Audio(bomb);
    const s2 = new Audio(horn);
    const s3 = new Audio(bed);
    const s4 = new Audio(lex);
    const s5 = new Audio(horn);
    const s6 = new Audio(horn);
    const s7 = new Audio(horn);
    const s8 = new Audio(horn);

    // converting the audio objects into a media source to be manipulated by the web audio API
    const source1 = AC.createMediaElementSource(l);
    const source2 = AC.createMediaElementSource(r);

    /*
    |--------------------------------------------------------------------------
    | Web Audio API Nodes
    |--------------------------------------------------------------------------
    */

    // creates gain nodes
    const gain1 = AC.createGain();
    const gain2 = AC.createGain();

    // creates delay nodes
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

    // creates convolver
    const convolver1 = AC.createConvolver();
    const reverb1 = AC.createGain();

    // creates wave shaper
    const wave1 = AC.createWaveShaper();

    // fetch the file from the server and return a response object to the next .then()
    // example taken from https://web-audio-api.firebaseapp.com/convolver-node
    fetch(impulse)
      // retrieve and return an ArrayBuffer to the next .then()
      .then(response => response.arrayBuffer())
      .then((buffer) => {
        console.log('BUFFED');

        // decode the ArrayBuffer as an AudioBuffer
        AC.decodeAudioData(buffer, (decoded) => {
          // store the resulting AudioBuffer
          convolver1.buffer = decoded;
        })
          .catch(err => console.log('BUFFER?', err));
      });

    /*
    |--------------------------------------------------------------------------
    | Connecting Audio Nodes
    |--------------------------------------------------------------------------
    */

    // connecting the source to the filters
    source1.connect(highPass1);
    source1.connect(bandPass1);
    source1.connect(lowPass1);

    // connecting the filter nodes to the gain
    highPass1.connect(gain1);
    lowPass1.connect(gain1);
    bandPass1.connect(gain1);

    // connecting the delayNode to add delay effect
    // gain1.connect(delay1);
    // gainNode2.connect(delayNode2);

    // connecting the source to the convolver and the wave changer
    reverb1.gain.value = 0;

    source1.connect(reverb1).connect(convolver1).connect(wave1).connect(gain1);


    // connecting the gain node to the speakers (destination)
    gain1.connect(AC.destination);

    // lowPass1.disconnect(0)

    // // adding destination so sound can be played
    // highPass1.connect(AC.destination);
    // lowPass1.connect(AC.destination);
    // bandPass1.connect(AC.destination);

    // highPass2.connect(AC.destination);
    // lowPass2.connect(AC.destination);
    // bandPass2.connect(AC.destination);
    // console.log(gainConvolver1);


    // gain1.connect(convolver1).connect(wave1).connect(AC.destination);
    // convolver1.normalize = false;

    // console.log(convolver1);
    // console.log(wave1);


    /*
    |--------------------------------------------------------------------------
    | Defining Node Properties
    |--------------------------------------------------------------------------
    */

    // biquad filter
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
        left: l,
        right: r,
      },
      // samples on sample deck
      samples: {
        left: [
          s1, s2, s3, s4, s5, s6, s7, s8,
        ],
        right: [
          s1, s2, s3, s4, s5, s6, s7, s8,
        ],
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
      // wave changer node to change distortion
      wave: {
        left: wave1,
        right: 0,
      },
      reverb:{
        left:reverb1,
        right:0,
      },
      // // wave changer node for distortion
      // distort: {
      //   left: 0,
      //   right: 0,
      // },
      // reverb:{

      // },
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
      dis: {
        left: 0,
        right: 0,
      },
      rev: {
        left: 0,
        right: 0,
      },
      reg: {
        email: '',
        username: '',
        password: '',
        passwordCheck: '',
        error: null,
      },
      log: {
        email: '',
        password: '',
        error: null,
      },
      user: null,
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
    this.distortion = this.distortion.bind(this);
    this.reverb = this.reverb.bind(this);
    this.sampler = this.sampler.bind(this);
    this.input = this.input.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.save = this.save.bind(this);
    this.retrieve = this.retrieve.bind(this);

    // this.runtime = this.runtime.bind(this);
  }

  /*
  |--------------------------------------------------------------------------
  | Function
  |--------------------------------------------------------------------------
  */

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
        [filter]: {
          // splatting the k:v pairs of the filter inside the new state
          ...this.state.bq[filter],
          [parameter]: {
            // splatting the l:v pairs of the parameter inside the new state
            ...this.state.bq[filter][parameter],
            // setting the value of the side that actually changes
            [side]: value,
          },
        },
      },
    });
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
    this.state[filter][side][parameter].value = value;
  }

  distortion(dis, side) {
    // console.log('DISTORT');
    // console.log(dis);
    // console.log(side);
    this.stateSet('dis', side, dis);
    this.state.wave[side].curve = this.makeDistortionCurve(dis);
  }

  reverb(rev, side) {
    this.stateSet('rev', side, rev);
    this.state.reverb[side].gain.value = rev;
    console.log(this.state.reverb[side])

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

  // helper functions for nodes
  // took function from https://gamedevelopment.tutsplus.com/
  // tutorials/creating-dynamic-sound-with-
  // the-web-audio-api--cms-24564
  makeDistortionCurve(amount) {
    let k = typeof amount === 'number' ? amount : 50,
      n_samples = 44100,
      curve = new Float32Array(n_samples),
      deg = Math.PI / 180,
      i = 0,
      x;
    for (; i < n_samples; ++i) {
      x = i * 2 / n_samples - 1;
      curve[i] = (3 + k) * x * 20 * deg /
      (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  sampler(sample) {
    // sample.pause();
    sample.currentTime = 0;
    sample.play();
  }

  /*
  |--------------------------------------------------------------------------
  | User Functions
  |--------------------------------------------------------------------------
  */

  // storing the value of the input elements in the state
  input(e, info, state) {
    // checking to see if there is a value to input
    const val = (e.target !== undefined) ? e.target.value : '';
    // setting state
    this.setState({
      [state]: {
        // adds the current k:v pairs inside the user state
        ...this.state[state],
        // adds the value of the k:v pair being updated
        [info]: val,
      },
    });
  }

  register() {
    // pulling the user info from the state
    const {
      username, email, password,
    } = this.state.reg;

    // creating a user with firebase
    auth.createUserWithEmailAndPassword(email, password)
      // if the info is valid, then store the username into the db
      .then((auth) => {
        db.ref(`users/${auth.user.uid}`).set({
          username,
          email,
        })
          // erase the user info from the state
          .then(res => this.setState({
            reg: {
              email: '',
              username: '',
              password: '',
              passwordCheck: '',
              error: null,
            },
            user: res.user,
          }))
          // saves error
          .catch((err) => { console.log(err); this.input('error', err); });
      })
      // saves error
      .catch((err) => {
        console.log(err);
        this.setState({
          reg: {
            ...this.state.reg,
            error: err,
          },
        });
      });
  }

  login() {
    console.log('login');
    const { email, password } = this.state.log;
    auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        // console.log(res);
        // console.log(res.user);
        // console.log(res.user.Q);


        this.setState(() => ({
          log: {
            email: '',
            password: '',
            error: null,
          },
          user: res.user,
        }));
        // history.push(routes.HOME);
      })
      .catch((err) => {
        this.setState({
          log: {
            ...this.state.log,
            error: err,
          },
        });
      });
  }

  logout() {
    // console.log(this.state.user);
    auth.signOut();
    this.setState({
      user: null,
    });
  }

  save(e) {
    e.preventDefault();
    const config = {
      ...this.state,
      user: {},
    };

    // console.log(config);

    // const cfg = firebase.database()
    // console.log(cfg);

    db.ref(`users/${this.state.user.uid}/config`).push(config);
  }

  retrieve(e) {
    e.preventDefault();
    let thing;
    const t2 = [];
    console.log('retrieve');
    db.ref(`users/${this.state.user.uid}/config`).on('value', (config) => {
      thing = config.val();
      // console.log(thing);
      Object.keys(thing).forEach(key => t2.push(thing[key]));
      // console.log(t2);
      this.setState({
        ...t2[0],
      });
    });
  }

  // render
  render() {
    // console.log(db);

    return (
      <div className="App">
        <Nav
          save={this.save}
          retrieve={this.retrieve}
          user={this.state.user}
          logout={this.logout}
        />
        <Switch>
          <Route
            path="/register"
            render={() =>
              (<Register
                register={this.register}
                input={this.input}
                reg={this.state.reg}
              />)}
          />
          <Route
            path="/login"
            render={() =>
              (<Login
                login={this.login}
                input={this.input}
                log={this.state.log}
              />)}
          />
          <Route
            path="/"
            render={() => (<Turntable
              songs={this.state.songs}
              samples={this.state.samples}
              pause={this.state.play}
              play={this.playSong}
              stop={this.stopSong}
              sampler={this.sampler}
              vol={this.state.vol}
              volume={this.volume}
              cfade={this.state.cfade}
              crossfade={this.crossfade}
              bq={this.state.bq}
              biquad={this.biquad}
              dis={this.state.dis}
              distortion={this.distortion}
              rev={this.state.rev}
              reverb={this.reverb}
            />)}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
