import React from 'react';

export default function DrumPads(props) {
  // console.log(props);
  const song = props.side === 'tb-left' ? 'test' : 'synth';

  return (
    <section className="drum-pads">
      <h1>THIS IS THE DRUM PADS</h1>
      <div
className="play"
onClick={
        console.log('here')
        // () => props.play(song)
      }
      />
      <div
className="stop"
onClick={
        console.log('here')
        // () => props.stop(song)
      }
      />
    </section>
  );
}
