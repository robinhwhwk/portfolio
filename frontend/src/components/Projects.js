import { FaDisplay, FaGithub, FaHeart } from "react-icons/fa6";
import SpotifyImg from "../images/spotify.png"
import NaniroImg from "../images/naniro.png"
import Plantomo from "../images/plantomo.png"
import Satellite from "../images/satellite.png"
import CryptoAnalysis from '../images/crypto_analysis.png'

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
      title: "Satellite Network Simulator",
      tech: "Python, Bash, C++",
      image: Satellite,
      description: "Built on top of the Satellite Network Simulator Hypatia simulating LEO (Low Earth Orbit) Satellite networks such as Starlink. Added functionality for simulating the capacity of the network modifying the architecture using Python.",
    },
    {
      title: "Plantomo",
      tech: "Unity, C#, Firebase",
      image: Plantomo,
      description: "A mobile game designed to bring people outside and learn more about their surrounding nature. Built with Unity, C#, and Firebase for the 2023 Google Developer Solutions Challenge.",
      github: "https://github.com/Andrew920528/GDSC2023",
      demo: "https://www.youtube.com/watch?v=8LHcoZL0cPo",
      demoText: "View Demo Video"
    },
    {
      title: "Spotify Song Recommender",
      tech: "Python, Django, PostgreSQL, JavaScript, HTML, CSS",
      image: SpotifyImg,
      description: "Web application that allows users to discover new J-Pop music. Personalized song recommendations based on the user's choice of songs, artists, and songs, leaderboards for top-performing artists and songs in the J-pop genre.",
      github: "https://github.com/robinhwhwk/spotify-recommendation",
    },
    {
      title: "Cryptocurrency Sentiment Analysis",
      tech: "Python, Django",
      image: CryptoAnalysis,
      description: "Web application that tracks public sentiment towards specific cryptocurrencies using Twitter API and natural language processing techniques to analyze tweet sentiment.",
      github: "https://github.com/robinhwhwk/crypto_analysis"
    },
    {
      title: "Naniro - Color Guessing Game",
      tech: "JavaScript, HTML, CSS",
      image: NaniroImg,
      description: "Web game challenging players to guess the hex code for a displayed color. Players must input the correct hex code within 6 tries to solve the puzzle.",
      github: "https://github.com/robinhwhwk/naniro",
      demo: "https://robinhwhwk.github.io/naniro/",
      demoText: "View Demo"
    }
  ].map((project, index) => (
    <div key={index} className="project">
      <h3 className="project__title">{project.title}</h3>
      <p className="project__tech">{project.tech}</p>
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