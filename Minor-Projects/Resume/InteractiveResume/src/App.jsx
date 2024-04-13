import "./App.css";
import Appbar from "./Components/Appbar";
import Homepage from "./Components/Homepage";
import AboutPage from "./Components/AboutPage";
import SkillsPage from "./Components/SkillsPage";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="main-container">
      <Appbar />
      <div className="container">
        <Homepage />
        <AboutPage />
        <SkillsPage />
        <Education />

        <Projects />
        <Contact />
      </div>
      <footer>
        <div className="footer-container">
          <h2>Mehak Khanna</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="profile-links">
            <a href="https://www.linkedin.com/in/mehak-khanna-8a884827b">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            
            
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="copy-right">Mehak Khanna.All rights reserved</div>
        <div className="back-to-top">
          <a href="#home">
            {" "}
            <i className="fa-solid fa-arrow-up"></i>
            <p>Back to top</p>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
