import React from 'react';

import TurntableHalf from './TurntableHalf';
import Crossfader from './Crossfader';

export default function Turntable(props) {
  // console.log(props.songs);
  return (
    <section className="turntable">
      <TurntableHalf
        side="tb-left"
        songs={props.songs.left}
        play={props.play}
        stop={props.stop}
        vol={props.vol.left}
        volume={props.volume}
        // runtime={props.runtime}
        // rtime={props.rtime.rt1}
        // dur={props.dur.d1}
        // scratch={props.scratch}
      />
      <TurntableHalf
        side="tb-right"
        songs={props.songs.right}
        play={props.play}
        stop={props.stop}
        vol={props.vol.right}
        volume={props.volume}
        // runtime={props.runtime}
        // rtime={props.rtime.rt2}
        // dur={props.dur.d2}
        // scratch={props.scratch}
      />
      <Crossfader
        cfade={props.cfade}
        crossfade={props.crossfade}
      />
    </section>
  );
}
