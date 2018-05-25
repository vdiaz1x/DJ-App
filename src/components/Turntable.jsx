import React from 'react';

import TurntableHalf from './TurntableHalf';
import Crossfader from './Crossfader';

export default function Turntable(props) {
  return (
    <section className="turntable">
      <TurntableHalf scratch={props.scratch} side="tb-left" />
      <TurntableHalf scratch={props.scratch} side="tb-right" />
      <Crossfader />
    </section>
  );
}
