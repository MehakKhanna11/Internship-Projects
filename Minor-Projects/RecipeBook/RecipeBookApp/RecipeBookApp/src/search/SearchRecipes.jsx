import { useState } from "react";

function SearchRecipes() {
  const [input,setInput]=useState("");
  return (
    <div id="search-recipes" className="search-container">
      <div className="search-box">
        <div className="search-bar-container">
          <div className="search-text">
            <i className="fa-solid fa-utensils"></i>
            <h3>What would you like to cook?</h3>
          </div>
          <div className="search-bar">
            <input
              type="search"
              name=""
              id="search-input"
              placeholder="Search Recipes..."
              onChange={(e)=>{
                setInput(e.target.value)
              }}
            />
            <button id="search-button" onClick={()=>{
              window.location="/recipes/search-recipe/"+input;
            }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="recommendation-container">
          <div className="recommendation-box">
            <h3>Popular Searches</h3>
            <div className="recommendation-buttons">
              <button onClick={()=>{
                window.location="/recipes/searchcategory/Breakfast"
              }}>Breakfast</button>
              <button onClick={()=>{
                window.location="/recipes/searchcategory/Dinner"
              }}>Dinner</button>
              <button onClick={()=>{
                window.location="/recipes/search-recipe/Pasta"
              }}>Pasta</button>
              <button onClick={()=>{
                window.location="/recipes/searchcategory/Snacks"
              }}>Snacks</button>
              <button onClick={()=>{
                window.location="/recipes/search-recipe/Pizza"
              }}>Pizza</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchRecipes;
// onClick={(e)=>}