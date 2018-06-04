# DJ App
<!-- A dj app for single use and two player collabs -->
A DJ App with functional turntables and EQ/FX/Crossfader for aspiring DJs and for collaborative DJ activities (coming soon!) using React for front end and Firebase for back end

# Project Overview

## Project Schedule

|  Day | Deliverable | Complete? |
|---|---|--|
| Day 1 (T) | Planning | Yes |
| Day 2 (F) | Basic Layout/Research | Yes/Yes |
| Day 3 (S) | More Research/Readme | Yes/Yes |
| Day 4 (M) | Priority Matrix/Wireframe/Music Manipulation | Yes/Yes/Yes |
| Day 5 (T) | Music Manipulation | Yes |
| Day 6 (W) | Linking UI to Music | Yes |
| Day 7 (T) | Linking UI to Music | Yes |
| Day 8 (F) | Linking UI to Music | Yes |
| Day 9 (S) | PostMVP/Bug Fixes | No/Yes |
| Day 10 (S) | PostMVP/Bug Fixes | No/Yes |
| Day 11 (M) | Presentation |--|

## Project Description

This project is based off of a DJ's turntable/controller. It will attempt to replicate playing two songs, ability to scratch music in real time, add filters/fx to music, add sound bites, and modify music with equalizers. You will be able to log in and add music to your list.

## Wireframes
[Basic Look](https://photos.app.goo.gl/Xuz56FoSVXWuxWzB3)

## Priority Matrix

### High Priority
- Music Playback/Runtime Manipulation
- Turntable Functionality
- FX and EQ Functionality

### Medium Priority
- Styling
- User Auth
- User Music Storage

### Low Priority
- Adding Sound Clips for Sample Deck
- Beatmatching and Other Advanced DJ Features
- Add PostMVP Features

## User Stories
- As a user of this DJ Turntable, I should be able to play music.
- As a user, I should be able to add filters to music.
- As a user, I should be able to change music with equalizers.
- As a user, I should be able to manipulate music via interaction with virtual jog wheel
- As a user, I should be able to log in, store filter settings, and store list of music for playback.

## App Components
- Jog Wheel
- FX Buttons/Knobs
- EQ Sliders/Knobs
- Crossfader
- Play/Pause/Stop Buttons
- Pitch Slider
- Volume/Gain Slider/Knob
- Log in/Register Page

## Deliverables

### MVP
- Play music
- Login/Register/Auth
- Ability to add effects to music

### POST MVP
- Ability to scratch/change music playback via jog wheel
- Port to React Native
- Store user songs
- Ability for two people to mix songs

<!-- ## Functional Components

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
 -->

## Libraries/Frameworks

React
Firebase
Web Audio API

## Code Snippet

```javascript
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
```

As I was making the functions for the different filter parameters, I had to set the state. At a certain point, the code for that was repeating itself. I took out the actual setting state part (which was more or less the same), and made it into its own function. There are two versions, one that is smaller, for state parameters that were surface level, and one for the biquad filters, which were nested. It's important to first set the state to what it was previously, beacuse if you set state for only one parameter in an object, the rest of the parameters are overwritten as to have never existed. I was doing it manually, setting each side, but after looking online and reviewing the rest operator, it made more sense to do it this way, which also is scalable when there are many more parameters to keep. I also used bracket notation to dynamically access and set object properties.

```javascript
    // connecting the source to the filter nodes and the gain
    source1.connect(highPass1).connect(gain1);
    source1.connect(bandPass1).connect(gain1);
    source1.connect(lowPass1).connect(gain1);

    source2.connect(highPass2).connect(gain2);
    source2.connect(bandPass2).connect(gain2);
    source2.connect(lowPass2).connect(gain2);

    // connecting the source to the convolver node and the wave changer node
    source1.connect(reverb1).connect(convolver1).connect(wave1).connect(gain1);
    source2.connect(reverb2).connect(convolver2).connect(wave2).connect(gain2);

    // connecting the source to the delay node and the delay gain/filter nodes
    source1.connect(delayGain1).connect(delayFilter1).connect(delay1).connect(dynamic1).connect(gain1);
    source2.connect(delayGain2).connect(delayFilter2).connect(delay2).connect(dynamic2).connect(gain2);

    // connecting the gain node to the speakers (destination)
    gain1.connect(AC.destination);
    gain2.connect(AC.destination);
```

The Web Audio API is very powerful, but also very complicated, and not always intuitive. The MDN docs also take a lot of effort to parse through. One of the big issues was stacking the audio nodes in a way that would have the filters sound good. After a week, I realized this pattern. Instead of chaining them all in one line, or having them separate for each source, you keep various separate sources, but join them to the same node (in this case, a gain node), right before reaching the destination. This mixes all the separate sources into one and preserves the filters and other effects.

## Issues and Resolutions

### Major Issue

#### Audio APIs

It took a long time to find a suitable API for my needs. I tried p5 and others but couldn't get them to work with React. I had SoundManager2 for a while, and after working on it a whole day and making the songs play/stop/keep track of runtime, I found out it didn't support sound manipulation, or I coulnd't find how to do it. I threw away that day's work and decided to use the native Web Audio API. It was a struggle to get everything working as intended, but somehow I managed it.

#### Node Stacking

The Web Audio is complicated. The audio can be manipulated by passing it through several nodes, but each node builds off the last one. The nodes are chained together, from source through the others to reach the destination, so if you stack several filters before getting to the destination, you get something that is so filtered it's unusable. I tried to have multiple sources using the same song and running each source through one filter to the destination. The problem is that each source is playing, so even if one source has a highpass, the other two are unfiltered, so the fitlered sound doesn't sound fully filtered. Finally, I figured out how to have the separate sources and mix them together so that it's only one source playing, which preserves the filtering and also doesn't have multiple sources clashing.

#### Div Manipulation

How do you spin a div with the mouse dynamically? After more of a day conceptualizing it, I put it aside. At the end, I worked on it. It took 3 hrs to implement a working solution in regular HTML/CSS/JS but another 4-5 hrs to port it to React. The differences in manipulating the DOM and how to access elements/components make porting one thing to the other harder than I expected. After reviewing the formula for converting Cartesian to polar coordinates, and using drag/custom image to remove ghosting, I got it. I was not able yet to link the div spinning to the song playback.

#### Error/Resolution Sample

**ERROR**: Inability to add SoundManager2 created song object to state
**RESOLUTION**: Have to add SM2 itself to state, as songs are made internally in the SM2 object

**ERROR**: Could not add songs to project
**RESOLUTION**: Added songs to src folder

**ERROR**: Can't change parameter of node directly
**RESOLUTION**: The parameter I was trying to change was actually a read only object; had to change object property instead. Have to understand what I am trying to change

## References

### Firebase
https://css-tricks.com/intro-firebase-react/
https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
classmates and TAs

### Audio
https://www.teachmeaudio.com/mixing/techniques/audio-spectrum

### Web Audio API
https://css-tricks.com/introduction-web-audio-api/
https://www.html5rocks.com/en/tutorials/webaudio/intro/
http://blog.chrislowis.co.uk/2014/07/23/dub-delay-web-audio-api.html
http://masf-html5.blogspot.com/2016/04/html5-audio-most-useful-filter-nodes.html
https://web-audio-api.firebaseapp.com/convolver-node
https://gamedevelopment.tutsplus.com/tutorials/creating-dynamic-sound-with-the-web-audio-api--cms-24564