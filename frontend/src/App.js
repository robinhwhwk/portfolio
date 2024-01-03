import { FaGithub, FaHeart, FaLinkedin, FaRegNewspaper } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Chatbot from "./Chatbot.js"
import Skills from "./Skills.js"
import Pdf from "./files/resume.pdf"

function App() {
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
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="#skills" className="nav__link">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  </header>
  {/* Introduction */}
  <section className="intro" id="home">
    <div className="flex-container">
      <div className="flex-child">
        <h1 className="section__title section__title--intro">
          Hello <span role="img" aria-label="hello">👋</span>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
        I’m Robin, a software developer from Georgia who enjoys building fun things.
        </p>
        <p className="section__subtitle section__subtitle--intro">
          Interested in my work? Let's connect!</p>
        <div className="links flex-container">
          <a href="https://github.com/robinhwhwk" target="_blank" rel="noopener noreferrer" className="flex-child"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/robin-hyunwoo-kim-28828b218/" target="_blank" rel="noopener noreferrer" className="flex-child"><FaLinkedin /> LinkedIn</a>
          <a href="mailto:robinhwhwk@gmail.com" target="_blank" rel="noopener noreferrer" className="flex-child"><CiMail /> Email</a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer" className="flex-child"><FaRegNewspaper /> Resume</a>
        </div>
      </div>
        <Chatbot></Chatbot>
    </div>
  </section>
  {/* My Projects */}
  <section className="projects" id="projects">
    <h2 className="section__title section__title--projects">My Projects</h2>
    <div className="projects">
      <div className="project">
        <h3>Spotify Song Recommender</h3>
        <p>
          Web application that allows users to discover new J-Pop music and
          learn more about their favorite artists. The application features
          personalized song recommendations based on the user's choice of songs,
          artists, or genres, as well as detailed information on songs and
          artists, including lyrics and discographies. The application also
          includes a leaderboard that displays the top artists in the J-Pop
          genre.
        </p>
        <a
          href="https://github.com/robinhwhwk/spotify-recommendation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> View on GitHub
        </a>
        <a
          href="https://www.jpopify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDisplay /> View Demo
        </a>
      </div>{" "}
      {/* project */}
      <div className="project">
        <h3>Cryptocurrency Sentiment Analysis</h3>
        <p>
          Web application that allows users to track the public sentiment
          towards a specific cryptocurrency. The application uses the Twitter
          API to gather tweets containing mentions of the cryptocurrency, and
          then utilizes natural language processing techniques to analyze the
          sentiment of the tweets. The application displays a score representing
          the overall sentiment of the tweets, as well as a chart showing the
          trend of the sentiment over time.
        </p>
        <a
          href="https://github.com/robinhwhwk/crypto_analysis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> View on GitHub
        </a>
      </div>{" "}
      {/* project */}
      <div className="project">
        <h3>Naniro - Color Guessing Game</h3>
        <p>
          Web game that challenges players to guess the hex code for the color
          shown in the background. The game displays a random color in the
          background, and the player must type in the corresponding hex code
          within 6 tries to complete the puzzle.
        </p>
        <a
          href="https://github.com/robinhwhwk/naniro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> View on GitHub
        </a>
        <a
          href="https://robinhwhwk.github.io/naniro/"
          // className="btn btn-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDisplay /> View Demo
        </a>
      </div>{" "}
      {/* project */}
    </div>
  </section>
  <section className="skills" id="skills">
  <h2 className="section__title section__title--skills">My Skills</h2>
  <Skills></Skills>
 </section>

  {/* Footer */}
  <footer>
    <p>
      Made with <FaHeart /> by Robin © 2024
      <a href="mailto:robinhwhwk@gmail.com"> Contact me</a>
    </p>
  </footer>
    </div>
  );
}

export default App;
