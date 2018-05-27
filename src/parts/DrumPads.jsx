import React from 'react';

export default function DrumPads(props) {
  console.log(props);
  return (
    <section className="drum-pads">
      <h1>THIS IS THE DRUM PADS</h1>
      <div className="play" onClick={() => props.play('test')} />
      <div className="stop" onClick={() => props.stop('test')} />
    </section>
  );
}
