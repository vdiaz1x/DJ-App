import React from 'react';

import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';

export default function Crossfader(props) {
  const { cfade } = props;
  // const cf2 = props.cfade.cf2;
  // console.log('CF', cf);
  return (
    <section className="crossfader">
      <Slider
        min={-100}
        max={100}
        value={cfade}
        tooltip={false}
        onChange={cfade => props.crossfade(cfade)}
      />
    </section>
  );
}
