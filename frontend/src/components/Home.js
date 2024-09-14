import { FaGithub, FaHeart, FaLinkedin, FaRegNewspaper } from "react-icons/fa";
import Chatbot from "./Chatbot.js"
import Pdf from "../files/Resume.pdf"

function Home() {
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
    <section className="intro" id="home">
      <div className="flex-container">
        <div className="flex-child">
          <h1 className="section__title section__title--intro">
            Hello <span role="img" aria-label="hello">👋</span>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
          I’m Robin, a Computer Science student pursuing a B.S./M.S. degree at Georgia Tech.
          </p>
          <p className="section__subtitle section__subtitle--intro">
          My interests are: Computer Networks, Operating Systems and Full-stack development.
          </p>
          <p className="section__subtitle section__subtitle--intro">
            My specialization is in Computing Systems and I'm currently a teaching assistant for a computer networking course at Georgia Tech.</p>
          <div className="links flex-container">
            <a href="https://github.com/robinhwhwk" target="_blank" rel="noopener noreferrer" className="flex-child"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/robinhwkim/" target="_blank" rel="noopener noreferrer" className="flex-child"><FaLinkedin /> LinkedIn</a>
            <a href={Pdf} target="_blank" rel="noopener noreferrer" className="flex-child"><FaRegNewspaper /> Resume</a>
          </div>
        </div>
          <Chatbot></Chatbot>
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
  
  export default Home;
  