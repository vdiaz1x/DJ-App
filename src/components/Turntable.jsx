import React from 'react';

import TurntableHalf from './TurntableHalf';
import Crossfader from './Crossfader';

export default function Turntable(props) {
  // console.log(props);
  return (
    <section className="turntable">
      <TurntableHalf
        scratch={props.scratch}
        play={props.play}
        stop={props.stop}
        vol={props.vol.v1}
        volume={props.volume}
        side="tb-left"
      />
      <TurntableHalf
        scratch={props.scratch}
        play={props.play}
        stop={props.stop}
        vol={props.vol.v2}
        volume={props.volume}
        side="tb-right"
      />
      <Crossfader
        cfade={props.cfade}
        crossfade={props.crossfade}
      />
    </section>
  );
}
