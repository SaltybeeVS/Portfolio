import React, { useState, useEffect, useRef } from 'react';
import './TypingEffect.modules.css';

function TypingEffect() {
  // Array of phrases to display
  const phrases = useRef(["Web Developer!", "Wordpress Developer!", "React.JS Developer!", "Next.JS Developer!", "Java Developer!"]);
  
  // State to store the current phrase being typed
  const [currentPhrase, setCurrentPhrase] = useState('');
  
  // State to track the current index of the phrase
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State to determine if we're typing or deleting
  const [isTyping, setIsTyping] = useState(true);
  
  // State to track the current phrase index in the array
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Effect to handle the typing and deleting logic
  useEffect(function() {
    let timeout;

    if (isTyping) {
      // Typing logic
      if (currentIndex < phrases.current[phraseIndex].length) {
        timeout = setTimeout(function() {
          // Add the next character to the current phrase
          setCurrentPhrase(function(prev) {
            return prev + phrases.current[phraseIndex][currentIndex];
          });
          // Move to the next character
          setCurrentIndex(function(prev) {
            return prev + 1;
          });
        }, 100); // Typing speed (100ms per character)
      } else {
        // Wait for a moment before starting to delete
        timeout = setTimeout(function() {
          setIsTyping(false);
        }, 2000); // Wait time before deleting (2 seconds)
      }
    } else {
      // Deleting logic
      if (currentIndex > 0) {
        timeout = setTimeout(function() {
          // Remove the last character from the current phrase
          setCurrentPhrase(function(prev) {
            return prev.slice(0, -1);
          });
          // Move back one character
          setCurrentIndex(function(prev) {
            return prev - 1;
          });
        }, 50); // Deleting speed (50ms per character)
      } else {
        // Switch to the next phrase and start typing again
        setIsTyping(true);
        setCurrentPhrase('');
        setCurrentIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.current.length); // Move to the next phrase
      }
    }

    // Cleanup function to clear the timeout
    return function() {
      clearTimeout(timeout);
    };
  }, [currentIndex, isTyping, phraseIndex]);

  return (
    <span className="highlight">
      {currentPhrase}
      <span className="blinking-cursor">|</span> {/* Blinking cursor */}
    </span>
  );
}

export default TypingEffect;