import React, { useState, useEffect } from 'react';
import './TypingText.css'; // Make sure to create this CSS file

const TypingText = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(interval);
        setCursorVisible(false);
        return;
      }

      setVisibleText(text.substring(0, currentIndex + 1));
      currentIndex++;
    }, 100); // Adjust typing speed here (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Adjust blinking cursor speed here (in milliseconds)

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="typing-text-container">
      <div className="typing-text">{visibleText}</div>
      {cursorVisible && <div className="blinking-cursor">|</div>}
    </div>
  );
};

export default TypingText;
