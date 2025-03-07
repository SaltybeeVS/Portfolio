import React from "react";
import "./Star.modules.css"; 

function Star ({ x, y, pulseDuration }) {
  return (
    <div
      className="star"
      style={{
        left: `${x}px`, // Horizontal position
        top: `${y}px`, // Vertical position
        animation: `pulse ${pulseDuration}s infinite`, // Pulse animation
      }}
    />
  );
};

export default Star;