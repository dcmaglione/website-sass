import React from 'react';
import '../styles/home.scss';

import Socials from '../components/Socials';

export default function Home() {
  return (
    <div className="home">
      <h1>Dominic Maglione</h1>
      <h2>Full Stack Software Developer</h2>
      <Socials />
    </div>
  );
}
