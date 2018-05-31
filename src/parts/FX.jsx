import React from 'react';
import Slider from 'react-rangeslider';

export default function FX(props) {
  // console.log(props)
  const {dis} = props;
  return (
    <section className="fx">
      <Slider
        min={0}
        max={400}
        value={dis}
        tooltip={false}
        orientation="vertical"
        onChange={(dis) => props.distortion(dis, props.side)}
      />
    </section>
  )
}