import React from 'react';
import Slider from 'react-rangeslider';

export default function FX(props) {
  // console.log(props)
  const {
    dis, rev, del, fb,
  } = props;
  return (
    <section className="fx">
      <div className="reverb fx-section">
        <div className="eq-slider fx-slider-bar">
          <Slider
            min={0}
            max={25}
            value={dis}
            tooltip={false}
            orientation="vertical"
            onChange={dis => props.distortion(dis, props.side)}
          />
          <h6 className="eq-subtitle">Distort</h6>
        </div>
        <div className="eq-slider fx-slider-bar">
          <Slider
            min={0}
            max={3}
            step={0.05}
            value={rev}
            tooltip={false}
            orientation="vertical"
            onChange={rev => props.reverb(rev, props.side)}
          />
          <h6 className="eq-subtitle">Reverb</h6>
        </div>
      </div>
      <div className="delay fx-section">
        <div className="eq-slider fx-slider-bar">
          <Slider
            min={0}
            max={1}
            step={0.005}
            value={del}
            tooltip={false}
            orientation="vertical"
            onChange={del => props.delay(del, props.side)}
          />
          <h6 className="eq-subtitle">Delay</h6>
        </div>
        <div className="eq-slider fx-slider-bar">
          <Slider
            min={0}
            max={10}
            step={0.1}
            value={fb}
            tooltip={false}
            orientation="vertical"
            onChange={fb => props.feedback(fb, props.side)}
          />
          <h6 className="eq-subtitle">Feedback</h6>
        </div>
      </div>
    </section>
  );
}
