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
        <FX
          side={props.side}
          dis={props.dis}
          distortion={props.distortion}
          rev={props.rev}
          reverb={props.reverb}
          del={props.del}
          delay={props.delay}
          fb={props.fb}
          feedback={props.feedback}
        />
        <Vinyl />
        <DrumPads
          pause={props.pause}
          side={props.side}
          samples={props.samples}
          songs={props.songs}
          play={props.play}
          stop={props.stop}
          sampler={props.sampler}
        />
      </div>
      <div className="tb-knobs">
        <EQ
          side={props.side}
          bq={props.bq}
          biquad={props.biquad}
        />
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
