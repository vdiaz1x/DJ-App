import React from 'react';

export default function DrumPads(props) {
  // console.log(props);
  const song = props.side === 'tb-left' ? 't' : 'r';
  console.log(props.songs[song]);

  return (
    <section className="drum-pads">
      <h1>THIS IS THE DRUM PADS</h1>
      <div
        className="play"
        onClick={() => props.play(props.songs[song])}
      />
      <div
        className="stop"
        onClick={() => props.stop(props.songs[song])}
      />
    </section>
  );
}
