import React from 'react';

import TurntableHalf from './TurntableHalf';
import Crossfader from './Crossfader';

export default function Turntable(props) {
  // console.log(props.dur);
  return (
    <section className="turntable">
      <TurntableHalf
        side="tb-left"
        scratch={props.scratch}
        play={props.play}
        stop={props.stop}
        vol={props.vol.v1}
        volume={props.volume}
        runtime={props.runtime}
        rtime={props.rtime.rt1}
        dur={props.dur.d1}
      />
      <TurntableHalf
        side="tb-right"
        scratch={props.scratch}
        play={props.play}
        stop={props.stop}
        vol={props.vol.v2}
        volume={props.volume}
        runtime={props.runtime}
        rtime={props.rtime.rt2}
        dur={props.dur.d2}
      />
      <Crossfader
        cfade={props.cfade}
        crossfade={props.crossfade}
      />
    </section>
  );
}
