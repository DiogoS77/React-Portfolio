import React, {useState} from "react";
import "../../css/Projects.css";
import WearCoImage from "../../images/WearCo.png"; // Import the image
import TechBlogImage from "../../images/TechBlog.png"; // Import the image
import TextEditorImage from "../../images/TextEditor.png"; // Import the image
import NoteSaverImage from "../../images/NoteSaver.png"; // Import the image
import WeatherDashImage from "../../images/WeatherDash.png"; // Import the image
import WorkDayImage from "../../images/WorkDay.png"; // Import the image

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const projects = [
    {
      title: "WearCo",
      description: "Ecommerce Shop",
      imageSrc: WearCoImage,
      liveLink: "https://wearcorp-app-098bafb41b6f.herokuapp.com/",
      githubLink: "https://github.com/cckinwest/Project2-WearCorp",
    },
    {
      title: "Text Editor",
      description: "Text Editor",
      imageSrc: TextEditorImage,
      liveLink: "https://progressive-text-edit-1ab400654b8a.herokuapp.com/",
      githubLink: "https://github.com/DiogoS77/Progressive-Text-Editor",
    },
    {
      title: "Note Saver",
      description: "Note Saver",
      imageSrc: NoteSaverImage,
      liveLink: "https://note-saver-bootcamp-509a52eaee32.herokuapp.com/",
      githubLink: "https://github.com/DiogoS77/Week-11-Note-Saver",
    },
    {
      title: "Tech Blog",
      description: "Tech Blog",
      imageSrc: TechBlogImage,
      liveLink: "https://tech-blog-bootcamp-c686f3216563.herokuapp.com/",
      githubLink: "https://github.com/DiogoS77/Tech-Blog",
    },
    {
      title: "Weather Dashboard",
      description: "Weather Dashboard",
      imageSrc: WeatherDashImage,
      liveLink: "https://diogos77.github.io/week-6-weather-dashboard/",
      githubLink: "https://github.com/DiogoS77/week-6-weather-dashboard",
    },
    {
      title: "Work Day",
      description: "Work Day Scheduler",
      imageSrc: WorkDayImage,
      liveLink: "https://diogos77.github.io/week-5-work-day-scheduler/",
      githubLink: "https://github.com/DiogoS77/week-5-work-day-scheduler",
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`projects-container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <button className="mode-switch" onClick={toggleDarkMode}>
        {isDarkMode ? "🌞" : "🌙"}
      </button>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <img
              src={project.imageSrc}
              alt={project.title}
              className="project-image"
            />
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
