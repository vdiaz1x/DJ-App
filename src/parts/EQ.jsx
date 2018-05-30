import React from 'react';

import Slider from 'react-rangeslider';

export default function EQ(props) {
  return (
    <section className="eq">
      <div className="eq-slider slider-bar">
        <Slider
          min={0}
          max={100}
          orientation="vertical"
          value={50}
          tooltip={false}
          onChange={() => props.biquad()}
        />
      </div>
    </section>
  );
}
