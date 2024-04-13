import myimage from "../assets/myimg.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  useGSAP(() => {
    gsap.from(".image img", {
      // rotate:360,
      scale: 0.5,
      x: -200,
      opacity: 0,
      duration: 2,
    });
    gsap.from(".about-text", {
      opacity: 0,
      duration: 2,
      x: 100,
    });
  });
  return (
    <div id="home" className="home-container">
      <section className="image-container">
        <div className="image">
          <img src={myimage} alt="mehak's image" />
        </div>
      </section>
      <section className="about-me">
        <div className="about-text">
          <h2>Hello, I'm Mehak Khanna,</h2>
          <p>
            A devoted web developer fueled by enthusiasm and dedication. I
            transform concepts into captivating websites, combining innovation
            with precision. Let's embark on a journey where code turns into
            magic, creating visually stunning digital experiences that leave a
            lasting impact. Welcome to my world of web development
          </p>
        </div>
        <div className="profile-links">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </section>
    </div>
  );
}
export default Homepage;
