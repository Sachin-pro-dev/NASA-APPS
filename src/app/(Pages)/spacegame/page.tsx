"use client";

import React from "react";

const Asteroids3D = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.crazygames.com/embed/starblastio"
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
        allow="gamepad *;"
      ></iframe>
    </div>
  );
};

export default Asteroids3D;
