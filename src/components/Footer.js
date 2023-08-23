import React from "react";
import "../css/Footer.css"; // Import your custom CSS file for styling
import githubIcon from "../images/github.png"; // Import the GitHub icon image
import spotifyIcon from "../images/spotify.png"; // Import the Spotify icon image

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* GitHub */}
        <a
          href="https://github.com/DiogoS77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        {/* Spotify */}
        <a
          href="https://open.spotify.com/user/31s6fvem7iagpidlmwnmh7o3gfga?si=536942bd146a4d8c"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={spotifyIcon} alt="Spotify" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
