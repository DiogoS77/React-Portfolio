import React from "react";
import "../../css/About.css"; // Import your custom CSS file
import Portrait from "../../images/test-image.jpeg";

export default function Home() {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1>About Me</h1>
        <p>&#x1F44B; Hey, I'm Diogo, a Birmingham Coding Bootcamp student.</p>
        <p>
          I am currently studying Web Development and striving to make my mark
          in the development world.
        </p>
        <p>
          I am an inquisitive and hardworking individual. Coding intrigued me
          due to the limitless challenges and opportunities it offers.
        </p>
        <p>
          My primary goal is to push my boundaries and explore the endless
          possibilities in this field. I am passionate about programming since
          it's a domain where you can continuously learn and help others learn.
        </p>
      </div>
      <div className="about-container">
        {/* ... Other content ... */}
        <img src={Portrait} alt="Diogo's Portrait" className="profile-image" />
      </div>
    </div>
  );
}
