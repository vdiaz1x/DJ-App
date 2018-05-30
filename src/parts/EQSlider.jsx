import React from 'react';

import Slider from 'react-rangeslider';

export default function EQSlider(props) {
  // console.log(props);

  const val = props.val;
  return (
    <div className="eq-slider slider-bar">
        <Slider
          min={props.min}
          max={props.max}
          orientation="vertical"
          value={val}
          tooltip={false}
          onChange={val => props.biquad(props.filter, props.param, props.side, val)}
        />
      </div>
  );
}
