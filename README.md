# DJ App
<!-- A dj app for single use and two player collabs -->
A DJ App with functional turntables and EQ/FX/Crossfader for aspiring DJs and for collaborative DJ activities (coming soon!) using React for front end and Firebase for back end

# Project Overview

## Project Schedule

|  Day | Deliverable | Complete? |
|---|---|--|
| Day 1 (T) | Planning |--|
| Day 2 (F) | Basic Layout/Research |--|
| Day 3 (S) | More Research/Readme |--|
| Day 4 (M) | Priority Matrix/Wireframe/Music Manipulation |--|
| Day 5 (T) | Music Manipulation |--|
| Day 6 (W) | Linking UI to Music |--|
| Day 7 (T) | Linking UI to Music |--|
| Day 8 (F) | Linking UI to Music |--|
| Day 9 (S) | PostMVP/Bug Fixes |--|
| Day 10 (S) | PostMVP/Bug Fixes |--|
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

## Functional Components

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |


## Libraries/Frameworks

React
Firebase
Web Audio API

## Code Snippet

## Issues and Resolutions

### Major Issue

#### Error/Resolution

**ERROR**: Inability to add SoundManager2 created song object to state
**RESOLUTION**: Have to add SM2 itself to state, as songs are made internally in the SM2 object


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