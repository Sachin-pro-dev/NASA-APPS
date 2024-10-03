'use client';

import React from 'react';

const Asteroids3D = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="https://eyes.nasa.gov/apps/asteroids/#/home"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        style={{ border: 'none', display: 'block' }}
      />
    </div>
  );
};

export default Asteroids3D;