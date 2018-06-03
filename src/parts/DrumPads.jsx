import React from 'react';

export default function DrumPads(props) {
  // console.log(props.samples);

  const drumSample = props.samples.map((samp, i) =>
    (<button
      className="pads"
      onClick={() => props.sampler(samp)}
      key={`samp${++i}`}
    >{i}
     </button>));

  // console.log(drumSample);
  // console.log(props.songs)
  // console.log(props.songs[props.side])
  const play = props.songs.currentTime !== 0 || !props.pause ? 'play' : 'pause';
  return (
    <section className="drum-pads">
      <h4 className="tb-title">Sample Deck</h4>
      <div className="sample-deck">
        {drumSample}
      </div>
      <div className="playback">
        <div
          className={play}
          onClick={() => props.play(props.songs, props.side)}
        />
        <div
          className="stop"
          onClick={() => props.stop(props.songs, props.side)}
        />
      </div>
    </section>
  );
}
