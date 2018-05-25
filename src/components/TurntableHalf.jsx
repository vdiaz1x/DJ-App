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
        <Vinyl />
        <DrumPads />
      </div>
      <div className="tb-knobs">
        <EQ />
        <Sliders />
      </div>
    </section>
  );
}
