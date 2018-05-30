import React from 'react';

import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';


export default function Sliders(props) {
  // const leftRight = props.side === 'tb-left';
  // const song = leftRight ? 'left' : 'right';
  // const side = leftRight ? 'left' : 'right';
  const { vol } = props;
  // console.log(props.songs);

  return (
    <section className="sliders">
      <div className="slider-bar">
        <Slider
          // className="volume-slider"
          min={0}
          max={200}
          value={vol}
          tooltip={false}
          orientation="vertical"
          onChange={vol => props.volume(vol, props.songs, props.side)}
        />
      </div>
    </section>
  );
}
