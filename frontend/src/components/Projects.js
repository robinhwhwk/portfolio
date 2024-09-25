import { FaDisplay, FaGithub, FaHeart, FaTag } from "react-icons/fa6";
import SpotifyImg from "../images/spotify.png"
import NaniroImg from "../images/naniro.png"
import Plantomo from "../images/plantomo.png"
import Satellite from "../images/satellite.png"
import CryptoAnalysis from '../images/crypto_analysis.png'
import CFS_Logo from '../images/cfs.png'

function Projects() {
    return (
      <div className="App">
    <title>DevRobin Portfolio Website</title>
    <link rel="stylesheet" href="App.css" />
    <header>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger" />
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#/Home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#/Projects" className="nav__link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
    {/* Introduction */}
    <section id="projects" className="projects-section">
<h2 className="section__title section__title--projects">Projects</h2>
<div className="projects-grid">
  {[
    {
      title: "Satellite Hypervisor",
      type: "Research (In progress)",
      tech: "Flight Software, C",
      image: CFS_Logo,
      description: "Project part of CaaS (Constellation as a Service) - offering satellites as virtual resources.\nBuilding a satellite Hypervisor enabling multi-tenant guest virtual machines on top of NASA’s cFS and developing Docker-like lightweight containers running on the hypervisor.",
      tagColor: "#000080" // navy
    },
    {
      title: "Satellite Network Simulator",
      type: "Research",
      tech: "Python, Bash, C++",
      image: Satellite,
      description: "Built on top of the open source Satellite Network Simulator, Hypatia, simulating LEO (Low Earth Orbit) Satellite networks such as Starlink. Added functionality for simulating the capacity of the network modifying the architecture.",
      tagColor: "#000080" // navy
    },
    {
      title: "Plantomo",
      type: "Team",
      tech: "Unity, C#, Firebase",
      image: Plantomo,
      description: "A mobile game designed to bring people outside and learn more about their surrounding nature. Built with Unity, C#, and Firebase for the 2023 Google Developer Solutions Challenge.",
      github: "https://github.com/Andrew920528/GDSC2023",
      demo: "https://www.youtube.com/watch?v=8LHcoZL0cPo",
      demoText: "View Demo Video",
      tagColor: "#FFA500" // orange
    },
    {
      title: "Spotify Song Recommender",
      type: "Personal",
      tech: "Python, Django, PostgreSQL, JavaScript, HTML, CSS",
      image: SpotifyImg,
      description: "Web application that allows users to discover new J-Pop music. Personalized song recommendations based on the user's choice of songs, artists, and songs, leaderboards for top-performing artists and songs in the J-pop genre.",
      github: "https://github.com/robinhwhwk/spotify-recommendation",
      tagColor: "#2196F3" // blue
    },
    {
      title: "Cryptocurrency Sentiment Analysis",
      type: "Personal",
      tech: "Python, Django",
      image: CryptoAnalysis,
      description: "Web application that tracks public sentiment towards specific cryptocurrencies using Twitter API and natural language processing techniques to analyze tweet sentiment.",
      github: "https://github.com/robinhwhwk/crypto_analysis",
      tagColor: "#2196F3" // blue
    },
    {
      title: "Naniro - Color Guessing Game",
      type: "Personal",
      tech: "JavaScript, HTML, CSS",
      image: NaniroImg,
      description: "Web game challenging players to guess the hex code for a displayed color. Players must input the correct hex code within 6 tries to solve the puzzle.",
      github: "https://github.com/robinhwhwk/naniro",
      demo: "https://robinhwhwk.github.io/naniro/",
      demoText: "View Demo",
      tagColor: "#2196F3" // blue
    }
  ].map((project, index) => (
    <div key={index} className="project">
      <h3 className="project__title">{project.title}</h3>
      <div className="project__tag" style={{ backgroundColor: project.tagColor, display: 'inline-block', padding: '5px 10px', borderRadius: '15px', marginBottom: '10px' }}>
        <FaTag style={{ marginRight: '5px' }} /> {project.type}
      </div>
      <div className="project__tag" style={{ backgroundColor: '#4CAF50', display: 'inline-block', padding: '5px 10px', borderRadius: '15px', marginBottom: '10px' }}>
        <FaTag style={{ marginRight: '5px' }} /> {project.tech}
      </div>
      <div className="project__image-container">
        <img src={project.image} alt={project.title} className="project__image"/>
      </div>
      <p className="project__description">{project.description}</p>
      <div className="project__links">
        {project.github && (<a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project__link"
        >
          <FaGithub /> GitHub
        </a>)}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link"
          >
            <FaDisplay /> {project.demoText}
          </a>
        )}
      </div>
    </div>
  ))}
</div>
</section>

    <footer>
      <p>
        Made with <FaHeart /> by Robin © 2024
        <a href="mailto:robinhwhwk@gmail.com"> Contact me</a>
      </p>
    </footer>
      </div>
    );
  }

export default Projects;