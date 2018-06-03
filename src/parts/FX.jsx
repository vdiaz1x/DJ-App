import React from 'react';
import Slider from 'react-rangeslider';

export default function FX(props) {
  // console.log(props)
  const {dis, rev} = props;
  return (
    <section className="fx">
      <div className="eq-slider slider-bar">
        <Slider
          min={0}
          max={25}
          value={dis}
          tooltip={false}
          orientation="vertical"
          onChange={(dis) => props.distortion(dis, props.side)}
        />
        <h6 className="eq-subtitle">Distort</h6>
      </div>
      <div className="eq-slider slider-bar">
        <Slider
          min={0}
          max={3}
          step={.05}
          value={rev}
          tooltip={false}
          orientation="vertical"
          onChange={(rev) => props.reverb(rev, props.side)}
        />
        <h6 className="eq-subtitle">Reverb</h6>
      </div>

    </section>
  )
}