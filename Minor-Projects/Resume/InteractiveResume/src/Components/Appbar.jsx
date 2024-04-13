import logo from "../assets/logoimage.png"
function Appbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
      <img src={logo} alt="logo" />

      </div>
      <div className="nav-list">
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
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="nav-options">
        <div className="download-button">
          <button title="Download Resume">Check Resume</button>
        </div>
        <div className="menu-bar">
          <div
            className="bars"
            onClick={() => {
              const bars = document.querySelector(".bars");
              bars.classList.toggle("change");
              const navItems = document.querySelector(".nav-list ul");
              navItems.classList.toggle("nav-display");
            }}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Appbar;
