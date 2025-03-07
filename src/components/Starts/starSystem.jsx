import React, { useState, useEffect, useRef } from "react";
import Star from "./star.jsx";
import "./StarSystem.modules.css";

function StarSystem () {
  const [stars, setStars] = useState([]); // State to store the stars
  const containerRef = useRef(null); // Ref to access the container's dimensions

  // Function to generate stars
  const generateStars = () => {
    const pixelDensity = 5000; // 1 star per 5000 pixels
    const bodyWidth = containerRef.current.clientWidth - 2;
    const bodyHeight = containerRef.current.clientHeight - 2;
    const totalPixels = bodyWidth * bodyHeight;
    const numberOfStars = Math.floor(totalPixels / pixelDensity);

    const newStars = [];

    // Create stars with random positions and pulse durations
    for (let i = 0; i < numberOfStars; i++) {
      const randomX = Math.floor(Math.random() * bodyWidth);
      const randomY = Math.floor(Math.random() * bodyHeight);
      const pulseDuration = 4 + Math.random() * 8; // Random pulse duration

      newStars.push({
        id: i,
        x: randomX,
        y: randomY,
        pulseDuration,
      });
    }

    setStars(newStars); // Update the stars state
  };

  // Function to adjust star positions on window resize
  const adjustStarsOnResize = () => {
    const bodyWidth = containerRef.current.clientWidth - 2;
    const bodyHeight = containerRef.current.clientHeight - 2;

    // Recalculate star positions based on the new container size
    setStars((prevStars) =>
      prevStars.map((star) => ({
        ...star,
        x: (star.x / bodyWidth) * bodyWidth,
        y: (star.y / bodyHeight) * bodyHeight,
      }))
    );
  };

  // Effect to generate stars when the component mounts
  useEffect(() => {
    generateStars();
  }, []);

  // Effect to handle window resize events
  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        adjustStarsOnResize(); // Adjust star positions
        generateStars(); // Regenerate stars
      }, 1000); // Debounce resize events
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="star-container"
    >
      {/* Render each star using the Star component */}
      {stars.map((star) => (
        <Star
          key={star.id}
          x={star.x}
          y={star.y}
          pulseDuration={star.pulseDuration}
        />
      ))}
    </div>
  );
};

export default StarSystem;