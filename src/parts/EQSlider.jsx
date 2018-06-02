import React from 'react';

import Slider from 'react-rangeslider';

export default function EQSlider(props) {
  // console.log(props);

  const subtitle = props.param === 'frequency' ? 'freq' : props.param;

  const val = props.val;
  return (
    <div className="eq-slider slider-bar">
      <Slider
        className={subtitle}
        min={props.min}
        max={props.max}
        orientation="vertical"
        value={val}
        tooltip={false}
        onChange={val => props.biquad(props.filter, props.param, props.side, val)}
      />
      <h6 className="eq-subtitle">{subtitle}</h6>
    </div>
  );
}
