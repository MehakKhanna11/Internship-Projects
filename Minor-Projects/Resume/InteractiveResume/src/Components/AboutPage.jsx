import img from "../assets/aboutimage.png";

function AboutPage() {
  return (
    <div id="about" className="about-page" >
      <h2>ABOUT ME</h2>
      <div className="about-page-container">
        <div className="about-page-text">
          <h3>Passionate Web Developer</h3>
          <p>
            I'm Mehak Khanna, a self-taught web developer with a passion for
            coding and a keen interest in UI/UX design. Every skill I possess
            has been cultivated through self-study. Fueled by unwavering
            enthusiasm, I'm on a mission to conquer the ever-evolving landscape
            of web development. Join me in this exciting journey!
          </p>
        </div>
        <div className="about-image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
