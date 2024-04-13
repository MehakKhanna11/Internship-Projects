function SkillsPage() {
  return (
    <div id="skills" className="skills-page">
      <h2>MY SKILLS</h2>
      <div className="skills-container">
        <div className="skill-boxes">
          <div className="skill-container frontend">
            <div className="skill-heading">
              <h4>Frontend</h4>
            </div>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-html5"></i></div>
                <div className="skill-item-name">HTML</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-css3-alt"></i></div>
                <div className="skill-item-name">CSS</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-js"></i></div>
                <div className="skill-item-name">Javascript</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-react"></i></div>
                <div className="skill-item-name">Reactjs</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-solid fa-wind"></i></div>
                <div className="skill-item-name">Tailwind</div>
              </div>
            </div>
          </div>
          <div className="skill-container backend">
          <div className="skill-heading">
              <h4>Backend</h4>
            </div>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-node"></i></div>
                <div className="skill-item-name">Nodejs</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-solid fa-database"></i></div>
                <div className="skill-item-name">SQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-solid fa-leaf"></i></div>
                <div className="skill-item-name">MongoDB</div>
              </div>
            </div>
          </div>
          <div className="skill-container others">
          <div className="skill-heading">
              <h4>Others</h4>
            </div>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-github"></i></div>
                <div className="skill-item-name">Github</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-git-alt"></i></div>
                <div className="skill-item-name">Git</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-brands fa-figma"></i></div>
                <div className="skill-item-name">Figma</div>
              </div>
              <div className="skill-item">
                <div className="skill-item-logo"><i className="fa-solid fa-c"></i></div>
                <div className="skill-item-name">Canva</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillsPage;
