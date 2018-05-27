import React from 'react';

import FX from '../parts/FX';
import Vinyl from '../parts/Vinyl';
import DrumPads from '../parts/DrumPads';
import EQ from '../parts/EQ';
import Sliders from '../parts/Sliders';

export default function TurntableHalf(props) {
  return (
    <section className={`tb-half ${props.side}`}>
      <div className="tb-disc">
        <FX />
        <Vinyl
          scratch={props.scratch}
        />
        <DrumPads
          side={props.side}
          play={props.play}
          stop={props.stop}
        />
      </div>
      <div className="tb-knobs">
        <EQ />
        <Sliders
          side={props.side}
          vol={props.vol}
          volume={props.volume}
        />
      </div>
    </section>
  );
}
