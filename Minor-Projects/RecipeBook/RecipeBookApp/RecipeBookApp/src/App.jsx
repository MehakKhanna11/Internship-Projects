import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./HomePage/homepage.css";
import "./SignInOut/SignInOut.css";
import "./Recipepages/recipepages.css";
import Homepage from "./HomePage/Homepage";
import SignUp from "./SignInOut/Signup";
import SignIn from "./SignInOut/Signin";
import AddRecipe from "./Recipepages/addrecipepage";
import RecipePage from "./Recipepages/recipepage";
import Recipe from "./Recipepages/recipe";
import SearchCategory from "./search/searchcategory";
import SearchRecipe from "./search/searchrecipe";
import AboutUs from "./Data/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<RecipePage />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/recipes/:recipeId" element={<Recipe />} />
        <Route path="/About" element={<AboutUs />} />
        <Route
          path="/recipes/search-recipe/:searchinput"
          element={<SearchRecipe />}
        />
        <Route
          path="/recipes/searchcategory/:category"
          element={<SearchCategory />}
        />
      </Routes>
    </Router>
  );
}

export default App;
