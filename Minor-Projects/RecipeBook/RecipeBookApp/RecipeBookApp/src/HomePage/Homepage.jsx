import { SliderData } from "../Data/SliderData";
import React, { useState } from "react";
import ExploreRecipes from "./ExploreRecipes";
import CreateRecipesPage from "./CreateRecipesPage";
import ContactUs from "./ContactUsPage";
import CategorySlider from "../search/CategorySlider";
import Appbar from "../Appbar";
import SearchRecipes from "../search/SearchRecipes";

function Homepage() {
  return (
    <div className="home">
      <Appbar />
      <div className="home-container">
        <ImageSlider slides={SliderData} />
        <CategorySlider />
        <SearchRecipes />
        <ExploreRecipes />
        <CreateRecipesPage />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}







const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>
            <a
              onClick={() => {
                window.location = "/recipes";
              }}
            >
              Recipes
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location = "/addrecipe";
              }}
            >
              Add Recipes
            </a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="#search-recipes">Search Recipes</a>
          </li>
          <li>
            <a href="#contact-page">Contact Us</a>
          </li>
        </ul>
        <div className="footer-logo">
          <img src="https://th.bing.com/th/id/OIP.nv-8AqDdImtBn8-3RQGapwHaL3?w=115&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          <h3>CookBook</h3>
        </div>
      </div>
      <div className="footer-end">
        <i className="fa-regular fa-copyright"></i>
        <h4>2024 CookBook, Inc.</h4>
      </div>
    </div>
  );
};

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <div className="description">
        <h6></h6>
      </div>
      <div className="left-arrow" onClick={prevSlide}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className="slide-image"
              />
            )}
            {index === current && (
              <div className="slide-description">
                <h6 className="description">{slide.description}</h6>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
