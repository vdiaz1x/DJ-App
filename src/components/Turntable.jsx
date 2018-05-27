import React from 'react';

import TurntableHalf from './TurntableHalf';
import Crossfader from './Crossfader';

export default function Turntable(props) {
  return (
    <section className="turntable">
      <TurntableHalf
        scratch={props.scratch}
        play={props.play}
        stop={props.stop}
        vol={props.vol}
        volume={props.volume}
        side="tb-left"
      />
      <TurntableHalf
        scratch={props.scratch}
        play={props.play}
        stop={props.stop}
        vol={props.vol}
        volume={props.volume}
        side="tb-left"
      />
      <Crossfader />
    </section>
  );
}
