import React, {useState} from "react";
import "../../css/Resume.css";
import SvelteImage from "../../images/svelte.png"; // Import the image
import Html5Image from "../../images/html5.png"; // Import the image
import CssImage from "../../images/css.png"; // Import the image
import JavaScriptImage from "../../images/javascript.png"; // Import the image
import NextJSImage from "../../images/nextjs.png"; // Import the image
import ReactImage from "../../images/React.png"; // Import the image
import jQueryImage from "../../images/jQuery.png"; // Import the image
import BootstrapImage from "../../images/Bootstrap.png"; // Import the image
import NodeImage from "../../images/node.png"; // Import the image
import ExpressImage from "../../images/express.png"; // Import the image
import APIImage from "../../images/api.png"; // Import the image
import MySQLImage from "../../images/MySQL.png"; // Import the image
import MongoDBImage from "../../images/mongoDB.png"; // Import the image
import SequelizeImage from "../../images/sequelize.png"; // Import the image
import MongooseImage from "../../images/mongoose.png"; // Import the image
import resume from "../../images/DiogoDeSousa_CV.pdf";

export default function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`resume-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <button className="mode-switch" onClick={toggleDarkMode}>
        {isDarkMode ? "🌞" : "🌙"}
      </button>
      <h1>Resume</h1>
      <div className="resume-content">
        <div className="section">
          <h2>Front-End</h2>
          <ul className="proficiency-list">
            <li>
              <div className="proficiency-icon">
                <img src={Html5Image} alt="HTML" />
              </div>
              <span className="proficiency-name">HTML</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={CssImage} alt="CSS" />
              </div>
              <span className="proficiency-name">CSS</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={JavaScriptImage} alt="JavaScript" />
              </div>
              <span className="proficiency-name">JavaScript</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={SvelteImage} alt="Svelte" />
              </div>
              <span className="proficiency-name">Svelte</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={NextJSImage} alt="NextJS" />
              </div>
              <span className="proficiency-name">NextJS</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={ReactImage} alt="React" />
              </div>
              <span className="proficiency-name">React</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={jQueryImage} alt="jQuery" />
              </div>
              <span className="proficiency-name">jQuery</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={BootstrapImage} alt="Bootstrap" />
              </div>
              <span className="proficiency-name">Bootstrap</span>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Back-End</h2>
          <ul className="proficiency-list">
            <li>
              <div className="proficiency-icon">
                <img src={NodeImage} alt="Node.js" />
              </div>
              <span className="proficiency-name">Node.js</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={ExpressImage} alt="Express.js" />
              </div>
              <span className="proficiency-name">Express.js</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={APIImage} alt="API" />
              </div>
              <span className="proficiency-name">API</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={MySQLImage} alt="MySQL" />
              </div>
              <span className="proficiency-name">MySQL</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={MongoDBImage} alt="MongoDB" />
              </div>
              <span className="proficiency-name">MongoDB</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={SequelizeImage} alt="Sequelize" />
              </div>
              <span className="proficiency-name">Sequelize</span>
            </li>
            <li>
              <div className="proficiency-icon">
                <img src={MongooseImage} alt="Mongoose" />
              </div>
              <span className="proficiency-name">Mongoose</span>
            </li>
          </ul>
        </div>
      </div>
      <a href={resume} download>
        <button className="resume-download-button">Download Resume</button>
      </a>
    </div>
  );
}
