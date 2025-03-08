import React, { useState, useEffect, useRef } from "react";
import Star from "./star.jsx";
import "./StarSystem.modules.css";

function StarSystem() {
    const [stars, setStars] = useState([]);
    const containerRef = useRef(null);

    const generateStars = () => {
        const pixelDensity = 5000;
        const bodyWidth = containerRef.current.clientWidth - 2;
        const bodyHeight = containerRef.current.clientHeight - 2;
        const totalPixels = bodyWidth * bodyHeight;
        const numberOfStars = Math.floor(totalPixels / pixelDensity);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            const randomX = Math.floor(Math.random() * bodyWidth);
            const randomY = Math.floor(Math.random() * bodyHeight);
            const pulseDuration = 4 + Math.random() * 8;

            newStars.push({
                id: i,
                x: randomX,
                y: randomY,
                pulseDuration,
            });
        }

        setStars(newStars);
    };

    const adjustStarsOnResize = () => {
        const bodyWidth = containerRef.current.clientWidth - 2;
        const bodyHeight = containerRef.current.clientHeight - 2;

        setStars((prevStars) =>
            prevStars.map((star) => ({
                ...star,
                x: (star.x / bodyWidth) * bodyWidth,
                y: (star.y / bodyHeight) * bodyHeight,
            }))
        );
    };

    useEffect(() => {
        generateStars();
    }, []);

    useEffect(() => {
        let resizeTimeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                adjustStarsOnResize();
                generateStars();
            }, 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="star-container">
            {stars.map((star) => (
                <Star key={star.id} x={star.x} y={star.y} pulseDuration={star.pulseDuration} />
            ))}
        </div>
    );
}

export default StarSystem;