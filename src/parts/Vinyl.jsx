import React from 'react';

export default function Vinyl(props) {
  return (
    <section className="vinyl">
      <div className="jog-wheel" onClick={e => props.scratch(e)} />
    </section>
  );
}
