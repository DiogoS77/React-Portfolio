// Home.js

import React, {useState, useEffect} from "react";
import "../../css/About.css";
import Portrait from "../../images/portfolio.jpg";

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div
        className={`center-container ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <button className="mode-switch" onClick={toggleDarkMode}>
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>
      <div
        className={`about-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
      >
        <div className="text-container">
          <h1>About Me</h1>
          <div
            className={`typing-animation ${showText ? "visible" : "hidden"}`}
          >
            <p>
              &#x1F44B; Hey, I'm Diogo, a recent graduate of the Birmingham
              Coding Bootcamp.
            </p>
            <p>
              I have successfully completed my studies in Web Development and am
              now eager to make my mark in the development world.
            </p>
            <p>
              I am an inquisitive and hardworking individual. Coding intrigued
              me due to the limitless challenges and opportunities it offers.
            </p>
            <p>
              My primary goal is to push my boundaries and explore the endless
              possibilities in this field. I am passionate about programming
              since it's a domain where you can continuously learn and help
              others learn.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img
            src={Portrait}
            alt="Diogo's Portrait"
            className="profile-image"
          />
        </div>
      </div>
    </>
  );
}
