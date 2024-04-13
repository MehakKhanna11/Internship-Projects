import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [image, setImage] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [preperation, setPreperation] = useState("");
  let [category,setCategory]=useState("");
  function ingredientsToArray(e) {
    let ingredientsData = e.target.value;
    ingredientsData = ingredientsData.split(" ");
    setIngredients(ingredientsData);
    console.log(ingredients);
  }
  function preperationToArray(e) {
    let preperationData = e.target.value;
    preperationData = preperationData.split("\n");
    setPreperation(preperationData);
    console.log(preperation);
  }
  const categories=[
    {
      value:"Breakfast",
      label:"Breakfast"
    },
    {
      value:"Lunch",
      label:"Lunch"
    },
    {
      value:"Dinner",
      label:"Dinner"
    },
    {
      value:"Drinks",
      label:"Drinks"
    },
    {
      value:"Snacks",
      label:"Snacks"
    }
  ]
  return (
    <div className="add-recipe-page">
      {/* <Appbar /> */}
      <div className="add-recipe-container">
        <form id="add-recipe-form">
        {/* <div className="form"> */}
          <h2>Add a recipe</h2>

          <TextField
            required
            id="standard-basic"
            label="Recipe Name"
            variant="standard"
            margin="dense"
            // fullWidth
            onChange={(e) => {
              setRecipeName(e.target.value);
            }}
          />

          <TextField
            required
            id="standard-basic"
            label="Image-link"
            variant="standard"
            margin="dense"
            // fullWidth
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-basic"
            label="Ingredients"
            variant="standard"
            multiline
            minRows={4}
            maxRows={5}
            margin="dense"
            // fullWidth
            onChange={(e) => {
              ingredientsToArray(e);
            }}
          />
          <TextField
            required
            id="standard-basic"
            label="Preperation"
            variant="standard"
            multiline
            minRows={4}
            maxRows={5}
            margin="dense"
            // fullWidth
            onChange={(e) => {
              preperationToArray(e);
            }}
          />
          <TextField
          id="category-select"
          select
          label="Category"
          // defaultValue="abc"
          required
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
          // helperText="Please select your currency"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <button
            className="add-recipe-button"
            onClick={() => {
              fetch("http://localhost:3000/addrecipe", {
                method: "POST",
                body: JSON.stringify({
                  recipeName: recipeName,
                  ingredients: ingredients,
                  preperation: preperation,
                  image: image,
                  category:category,
                }),
                mode: "cors",
                headers: {
                  "Content-type": "application/json",
                  authorization: "Bearer " + localStorage.getItem("token"),
                },
              }).then((response) => {
                response.json().then((data) => {
                  console.log(data);
                });
              });
            }}
          >
            Submit
          </button>
        {/* </div> */}
        </form>
      </div>
    </div>
  );
}
export default AddRecipe;
