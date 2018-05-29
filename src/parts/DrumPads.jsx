import React from 'react';

export default function DrumPads(props) {
  // console.log(props);
  // const song = props.side === 'tb-left' ? 'left' : 'right';
  // console.log(props.songs[song]);

  return (
    <section className="drum-pads">
      <h1>THIS IS THE DRUM PADS</h1>
      <div
        className="play"
        onClick={() => props.play(props.songs, props.side)}
      />
      <div
        className="stop"
        onClick={() => props.stop(props.songs, props.side)}
      />
    </section>
  );
}
