import React from 'react';

import Slider from 'react-rangeslider';

export default function Vinyl(props) {
  // const leftRight = props.side === 'tb-left';
  // const side = leftRight ? 'left' : 'right';
  // // const side = leftRight ? 'rt1' : 'rt2';
  // console.log(side);

  // const { rtime } = props;

  const jog = <div draggable="true" className="jog-wheel" />;


  return (
    <section className="vinyl">

      <div className="jog" onDrag={e => props.scratch(e, jog, props.side)}> {jog}</div>
      <Slider
        min={0}
        // max={props.dur}
        // value={props.rtime}
        tooltip={false}
        // onChange={rtime => props.runtime(rtime, song, side)}
      />
    </section>
  );
}
