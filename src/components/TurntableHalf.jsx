import React from 'react';

import FX from '../parts/FX';
import Vinyl from '../parts/Vinyl';
import DrumPads from '../parts/DrumPads';
import EQ from '../parts/EQ';
import Sliders from '../parts/Sliders';

export default function TurntableHalf(props) {
  // console.log(props.side);
  return (
    <section className={`tb-half tb-${props.side}`}>
      <div className="tb-disc">
        <FX />
        <Vinyl />
        <DrumPads
          side={props.side}
          songs={props.songs}
          play={props.play}
          stop={props.stop}
        />
      </div>
      <div className="tb-knobs">
        <EQ />
        <Sliders
          side={props.side}
          songs={props.songs}
          vol={props.vol}
          volume={props.volume}
        />
      </div>
    </section>
  );
}
