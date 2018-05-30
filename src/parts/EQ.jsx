import React from 'react';

import Slider from 'react-rangeslider';

export default function EQ(props) {
// console.log(props.bq);
const {hpass}=props.bq
const {lpass}=props.bq
const {bpass}=props.bq

const hpSide=hpass.freq[props.side]

console.log(hpass);

  return (
    <section className="eq">
      <div className="eq-slider slider-bar">
        <Slider
          min={4000}
          max={6000}
          orientation="vertical"
          value={hpass.freq[props.side]}
          tooltip={false}
          onChange={(hpSide) => props.biquad("hpass", "freq", props.side, hpSide)}
        />
      </div>
    </section>
  );
}
