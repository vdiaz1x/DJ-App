import React from 'react';

import Slider from 'react-rangeslider';
import EQSlider from './EQSlider';

export default function EQ(props) {
  const frequency = props.bq.hpass.frequency[props.side];
  const Q = props.bq.hpass.Q[props.side];
  const detune = props.bq.hpass.detune[props.side];

  // const frequency = props.bq.hpass.frequency[props.side];
  // const Q = props.bq.hpass.Q[props.side];
  // const detune = props.bq.hpass.detune[props.side];

  // const frequency = props.bq.hpass.frequency[props.side];
  // const Q = props.bq.hpass.Q[props.side];
  // const detune = props.bq.hpass.detune[props.side];

  return (
    <section className="eq">
      <div className="eq-high">
        <EQSlider
          min={1000}
          max={6000}
          filter="hpass"
          param="frequency"
          side={props.side}
          biquad={props.biquad}
          val={frequency}
        />
        <EQSlider
          min={0}
          max={12}
          filter="hpass"
          param="Q"
          side={props.side}
          biquad={props.biquad}
          val={Q}
        />
        <EQSlider
          min={0}
          max={1000}
          filter="hpass"
          param="detune"
          side={props.side}
          biquad={props.biquad}
          val={detune}
        />
      </div>
    </section>
  );
}
