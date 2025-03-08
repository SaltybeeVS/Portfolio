import React from "react";
import "./Star.modules.css";

function Star({ x, y, pulseDuration }) {
    return (
        <div
            className="star"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                animation: `pulse ${pulseDuration}s infinite`,
            }}
        />
    );
}

export default Star;