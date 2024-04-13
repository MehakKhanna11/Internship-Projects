import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../Appbar";

function Recipe(){
    let {recipeId}=useParams();
    // console.log(recipeId)
    const [recipe,setRecipe]=useState("");
    const [preperation,setPreperation]=useState([])
    const [ingredients,setIngredients]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/recipes/"+recipeId,{
            method:"GET",
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            mode:"cors"
        }).then((response)=>{
            response.json().then((data)=>{
                console.log(data);
                setRecipe(data);
                setPreperation(data.preperation);
                setIngredients(data.ingredients);
            })
        })
    },[]);

    return (
        <div className="recipe-page">
            <Appbar/>
            <div className="recipe-container">
            <section className="image-details-container">
            <div className="recipe-image"><img src={recipe.image} alt="" /></div>
                <div className="image-details">
                    <h1>{recipe.recipeName}</h1>
                    <p>Recipe by @{recipe.publishedBy}</p>
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
    )
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
export default Recipe;