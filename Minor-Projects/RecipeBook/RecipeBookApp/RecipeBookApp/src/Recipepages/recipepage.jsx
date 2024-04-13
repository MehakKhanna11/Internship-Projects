// import { AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import Appbar from "../Appbar";
import SearchRecipes from "../search/SearchRecipes";
import CategorySlider from "../search/CategorySlider";

function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recipes", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((response) => {
      // console.log(response)
      response.json().then((data) => {
        // console.log(data);
        setRecipes(data);
      });
    });
    // JSON.stringify(recipes);
  }, []);
  return (
    <div className="recipes-page">
      {/* <Appbar/> */}
      {/* <SearchRecipes /> */}
      <h1>Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => {
          return <RecipePrint recipe={recipe} key={recipe._id} />;
        })}
      </div>
      <CategorySlider/>

    </div>
  );
}
function RecipePrint({ recipe }, key) {
  return (
    <div className="recipe-box">
      <img src={recipe.image} alt="recipe-picture" />
      <div className="recipe-name-link">
        <h4>{recipe.recipeName}</h4>
        <p href="" onClick={
          ()=>{
            window.location="/recipes/"+recipe._id;
          }
        }>View recipe</p>
      </div>
    </div>
  );
}
export default RecipePage;
// {JSON.stringify(recipes)}
