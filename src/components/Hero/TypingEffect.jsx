import React, { useState, useEffect, useRef } from 'react';
import './TypingEffect.modules.css';

function TypingEffect() {
  const phrases = useRef(["Web Developer!", "Wordpress Developer!", "React.JS Developer!", "Next.JS Developer!", "Java Developer!"]);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(function () {
    let timeout;

    if (isTyping) {
      if (currentIndex < phrases.current[phraseIndex].length) {
        timeout = setTimeout(function () {
          setCurrentPhrase(function (prev) {
            return prev + phrases.current[phraseIndex][currentIndex];
          });
          setCurrentIndex(function (prev) {
            return prev + 1;
          });
        }, 100);
      } else {
        timeout = setTimeout(function () {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(function () {
          setCurrentPhrase(function (prev) {
            return prev.slice(0, -1);
          });
          setCurrentIndex(function (prev) {
            return prev - 1;
          });
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentPhrase('');
        setCurrentIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.current.length);
      }
    }

    return function () {
      clearTimeout(timeout);
    };
  }, [currentIndex, isTyping, phraseIndex]);

  return (
    <span className="highlight">
      {currentPhrase}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

export default TypingEffect;