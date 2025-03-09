import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; 
import './TypingEffect.modules.css';

function TypingEffect() {
  const { t, i18n } = useTranslation(); 
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);


  const phrases = useRef(t("HeroPhrases", { returnObjects: true }));

  // Escuchar cambios en el idioma
  useEffect(() => {
    phrases.current = t("HeroPhrases", { returnObjects: true });
    setCurrentPhrase(''); 
    setCurrentIndex(0); 
    setPhraseIndex(0); 
    setIsTyping(true); 
  }, [i18n.language, t]); 

 
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
  }, [currentIndex, isTyping, phraseIndex, phrases]);

  return (
    <span className="highlight">
      {currentPhrase}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

export default TypingEffect;