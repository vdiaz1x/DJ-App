import React from 'react';

// import Slider from 'react-rangeslider';
import EQSlider from './EQSlider';

export default function EQ(props) {
  const freq1 = props.bq.hpass.frequency[props.side];
  const q1 = props.bq.hpass.Q[props.side];
  const dt1 = props.bq.hpass.detune[props.side];

  const freq2 = props.bq.bpass.frequency[props.side];
  const q2 = props.bq.bpass.Q[props.side];
  const dt2 = props.bq.bpass.detune[props.side];

  const freq3 = props.bq.lpass.frequency[props.side];
  const q3 = props.bq.lpass.Q[props.side];
  const dt3 = props.bq.lpass.detune[props.side];

  return (
    <section className="eq">
      <div className="eq-section highpass">
        <EQSlider
          min={2000}
          max={6000}
          filter="hpass"
          param="frequency"
          side={props.side}
          biquad={props.biquad}
          val={freq1}
        />
        <EQSlider
          min={0}
          max={12}
          filter="hpass"
          param="Q"
          side={props.side}
          biquad={props.biquad}
          val={q1}
        />
        <EQSlider
          min={-1000}
          max={1000}
          filter="hpass"
          param="detune"
          side={props.side}
          biquad={props.biquad}
          val={dt1}
        />
      </div>

      <div className="eq-section bandpass">
        <EQSlider
          min={400}
          max={4000}
          filter="bpass"
          param="frequency"
          side={props.side}
          biquad={props.biquad}
          val={freq2}
        />
        <EQSlider
          min={0}
          max={12}
          filter="bpass"
          param="Q"
          side={props.side}
          biquad={props.biquad}
          val={q2}
        />
        <EQSlider
          min={-1000}
          max={1000}
          filter="bpass"
          param="detune"
          side={props.side}
          biquad={props.biquad}
          val={dt2}
        />
      </div>

      <div className="eq-section lowpass">
        <EQSlider
          min={100}
          max={350}
          filter="lpass"
          param="frequency"
          side={props.side}
          biquad={props.biquad}
          val={freq3}
        />
        <EQSlider
          min={0}
          max={12}
          filter="lpass"
          param="Q"
          side={props.side}
          biquad={props.biquad}
          val={q3}
        />
        <EQSlider
          min={-1000}
          max={1000}
          filter="lpass"
          param="detune"
          side={props.side}
          biquad={props.biquad}
          val={dt3}
        />
      </div>
    </section>
  );
}
