import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../Appbar";

function SearchRecipe() {
  const input = useParams();
  // console.log(searchinput);
  // console.log(input)
  const [resultRecipe, setResultRecipe] = useState("");
  const [preperation,setPreperation]=useState([])
  const [ingredients,setIngredients]=useState([])
  useEffect(() => {
    fetch("http://localhost:3000/searchrecipe/" + input.searchinput, {
      method: "GET",
      mode: "cors",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => { 
          setResultRecipe(data);
          console.log(data)
          setPreperation(data.preperation);
          setIngredients(data.ingredients);
      });
    });
  }, []);
  if(resultRecipe==""){
    return(
      <div style={{height:"100vh",width:"100vw",backgroundColor:"white",color:"black",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}><h2>No Recipe Found</h2></div>
    )
  }
  return (
    <div className="recipe-page">
            <Appbar/>
            <div className="recipe-container">
            <section className="image-details-container">
            <div className="recipe-image"><img src={resultRecipe.image} alt="" /></div>
                <div className="image-details">
                    <h1>{resultRecipe.recipeName}</h1>
                    <p>Recipe by @{resultRecipe.publishedBy}</p>
                </div>
            </section>
            <section className="ingredients-preperation">
                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <ul className="ingredient-list">
                    {ingredients.map((ingredient)=>{
                        return <DisplayIngredient ingredient={ingredient}/>
                        
                    })}
                    </ul>
                </div>
                <div className="preperation">
                    <h2>Preperation</h2>
                    <ul className="preperation-steps">
                    {preperation.map((step)=>{
                        return <DisplaySteps step={step}/>
                    })}
                    </ul>
                </div>
            </section>
            </div>

    </div>
  );
}
function DisplayIngredient({ingredient}){
  if(ingredient!=""){
  return <li>{ingredient}</li>
  }
}
function DisplaySteps({step}){
  if(step!=""){
      return <li>{step}</li>
  }
}
export default SearchRecipe;
