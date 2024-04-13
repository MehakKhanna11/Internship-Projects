import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../Appbar";
import SearchRecipes from "./SearchRecipes";
import CategorySlider from "./CategorySlider";

function SearchCategory() {
  const categoryname = useParams();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recipes/searchcategory/" + categoryname.category, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((response) => {
      response.json().then((data) => {
        setSearchResult(data.result);
      });
    });
  }, []);
  if (searchResult == undefined) {
    return <div>Nopes</div>;
  }
  return (
    <div className="search-page">
      {/* <Appbar /> */}
      {/* <CategorySlider/> */}
      <h1>Search results</h1>
      <div className="recipes-container">
        {searchResult.map((recipe) => {
          return <RecipePrint recipe={recipe} key={recipe._id} />;
        })}
      </div>
      <SearchRecipes />

    </div>

  );
}
function RecipePrint({ recipe }, key) {
  return (
    <div className="recipe-box">
      <img src={recipe.image} alt="recipe-picture" />
      <div className="recipe-name-link">
        <h4>{recipe.recipeName}</h4>
        <p
          href=""
          onClick={() => {
            window.location = "/recipes/" + recipe._id;
          }}
        >
          View recipe
        </p>
      </div>
    </div>
  );
}
export default SearchCategory;
