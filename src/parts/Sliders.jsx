import React from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';


export default function Sliders(props) {
  return (
    // const {volume} =this.state
    <section className="sliders">
      <Slider
        className="volume-slider"
        min={0}
        max={100}
        value={props.vol}
        tooltip={false}
        // orientation="vertical"
        onChange={props.volume}
      />
    </section>
  );
}
