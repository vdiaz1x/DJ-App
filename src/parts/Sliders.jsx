import React from 'react';

import Slider from 'react-rangeslider';


export default function Sliders(props) {
  const { vol, spd } = props;
  // console.log(props);

  return (
    <section className="sliders">
      <div className="slider-bar">
        <Slider
          min={0}
          max={200}
          value={vol}
          tooltip={false}
          orientation="vertical"
          onChange={vol => props.volume(vol, props.songs, props.side)}
        />
      </div>
      <div className="slider-bar">
        <Slider
          min={0.75}
          max={1.25}
          step={0.05}
          value={spd}
          tooltip={false}
          orientation="vertical"
          onChange={spd => props.speed(spd, props.songs, props.side)}
        />
      </div>
    </section>
  );
}
