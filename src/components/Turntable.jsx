import React from 'react';

import TurntableHalf from './TurntableHalf';
import Crossfader from './Crossfader';

export default function Turntable(props) {
  // console.log(props.songs);
  return (
    <section className="turntable">
      <TurntableHalf
        side="left"
        songs={props.songs.left}
        samples={props.samples.left}
        sampler={props.sampler}
        pause={props.pause.left}
        play={props.play}
        stop={props.stop}
        vol={props.vol.left}
        volume={props.volume}
        bq={props.bq}
        biquad={props.biquad}
        dis={props.dis.left}
        distortion={props.distortion}
        rev={props.rev.left}
        reverb={props.reverb}
        del={props.del.left}
        delay={props.delay}
        fb={props.fb.left}
        feedback={props.feedback}
        spd={props.spd.left}
        speed={props.speed}
        // runtime={props.runtime}
        // rtime={props.rtime.rt1}
        // dur={props.dur.d1}
        scratch={props.scratch}
      />
      <TurntableHalf
        side="right"
        songs={props.songs.right}
        samples={props.samples.right}
        sampler={props.sampler}
        pause={props.pause.right}
        play={props.play}
        stop={props.stop}
        vol={props.vol.right}
        volume={props.volume}
        bq={props.bq}
        biquad={props.biquad}
        dis={props.dis.right}
        distortion={props.distortion}
        rev={props.rev.right}
        reverb={props.reverb}
        del={props.del.right}
        delay={props.delay}
        fb={props.fb.right}
        feedback={props.feedback}
        spd={props.spd.right}
        speed={props.speed}
        // runtime={props.runtime}
        // rtime={props.rtime.rt2}
        // dur={props.dur.d2}
        scratch={props.scratch}
      />
      <Crossfader
        cfade={props.cfade}
        crossfade={props.crossfade}
      />
    </section>
  );
}
