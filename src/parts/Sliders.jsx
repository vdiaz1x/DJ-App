import React from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';


export default function Sliders(props) {
  const leftRight = props.side === 'tb-left';
  const song = leftRight ? 'test' : 'synth';
  const side = leftRight ? 'v1' : 'v2';
  const value = props.vol;
  return (
    <section className="sliders">
      <Slider
        className="volume-slider"
        min={0}
        max={100}
        value={-value}
        tooltip={false}
        // orientation="vertical"
        onChange={value => props.volume(value, song, side)}
      />
    </section>
  );
}
