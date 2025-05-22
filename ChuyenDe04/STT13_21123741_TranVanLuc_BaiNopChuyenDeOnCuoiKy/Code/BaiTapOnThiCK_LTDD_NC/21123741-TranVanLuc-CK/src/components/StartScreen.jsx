import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StartScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/detail");
  };

  return (
    <div className="start-container">
      <img src="/src/assets/voice.jpg" alt="App Logo" className="logo-animation"/>

      <h1 className="fade-text">Welcome to Premium!</h1>

      <div className="dots-animation">...</div>

      <button className="start-btn" onClick={handleStart}>
        Start listening
      </button>
    </div>
  );
};

export default StartScreen;
