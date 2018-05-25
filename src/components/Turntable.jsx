import React from 'react';

import TurntableHalf from './TurntableHalf'
import Crossfader from './Crossfader'

export default function Turntable(props) {
  return (
    <section className="turntable">
      <TurntableHalf side="tb-left"/>
      <TurntableHalf side="tb-right"/>
      <Crossfader />
    </section>
  )
}