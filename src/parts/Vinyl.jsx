import React from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export default function Vinyl(props) {
  // const leftRight = props.side === 'tb-left';
  // const song = leftRight ? 'test' : 'synth';
  // const side = leftRight ? 'rt1' : 'rt2';
  // const { rtime } = props;

  return (
    <section className="vinyl">
      <div className="jog-wheel" />
      <Slider
        min={0}
        // max={props.dur}
        // value={props.rtime}
        tooltip={false}
        // onChange={rtime => props.runtime(rtime, song, side)}
      />
    </section>
  );
}
