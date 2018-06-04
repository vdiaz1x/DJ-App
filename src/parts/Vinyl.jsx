import React from 'react';

import Slider from 'react-rangeslider';

export default function Vinyl(props) {
  // const leftRight = props.side === 'tb-left';
  // const side = leftRight ? 'left' : 'right';
  // // const side = leftRight ? 'rt1' : 'rt2';
  // console.log(side);

  // const { rtime } = props;

  const jog = <div draggable="true" className="jog-wheel" onDrag={e => props.scratch(e, jog, props.side)} onDragStart={(e)=>{
    const img = new Image(0, 0);
    img.src = "llfkd knd"
    e.dataTransfer.setDragImage(img, 0, 0);
  }}/>;


  return (
    <section className="vinyl">
      {jog}
    </section>
  );
}
