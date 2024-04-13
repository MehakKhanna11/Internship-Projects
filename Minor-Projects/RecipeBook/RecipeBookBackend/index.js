const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const SECRET = "MehakKhanna";

app.use(cors());
app.use(express.json());

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // contactInfo:Array
});
const recipesSchema = new mongoose.Schema({
  recipeName: String,
  ingredients: Array,
  preperation: Array,
  image: String,
  category: String,
  publishedBy: String,
});
// username:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
const contactSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phoneNumber: Number,
  infoUser: String,
});

const Users = mongoose.model("Users", userSchema);
const Recipes = mongoose.model("Recipes", recipesSchema);
const contactInfo = mongoose.model("Contact", contactSchema);

mongoose.connect(
  "mongodb+srv://mehakK:sKcAuW1Ct45uXHnX@cluster0.syo5qff.mongodb.net/CookBook",
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "CookBook" }
);

// app.get("/gettingstarted",(req,res)=>{
//     res.json({message:"hello mikk"})
// })

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  Users.findOne({ username }).then((user) => {
    if (user) {
      res.status(401).json({ message: "User already Exists" });
    } else {
      const loginData = { username: username, password: password };
      const newUser = new Users(loginData);
      newUser.save();
      const token = jwt.sign({ username, role: "user" }, SECRET, {
        expiresIn: "24h",
      });
      res.json({ message: "User created successfully", token });
    }
  });
});
app.get("/userinfo", authenticateJwt, (req, res) => {
  if (req.user.username) {
    res.json({ username: req.user.username });
  } else {
    res
      .status(401)
      .json({ message: "Authentication failed or the user does not exist" });
  }
});
app.post("/login", (req, res) => {
  const { username } = req.body;
  Users.findOne({ username }).then((user) => {
    if (user) {
      const token = jwt.sign({ username, role: "user" }, SECRET, {
        expiresIn: "24h",
      });
      res.json({ message: "logged in successfully", token });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  });
});
app.post("/contact", authenticateJwt, (req, res) => {
  const { fullname, email, phoneNumber } = req.body;
  const contactData = {
    fullname: fullname,
    email: email,
    phoneNumber: phoneNumber,
    infoUser: req.user.username,
  };
  const contact = new contactInfo(contactData);
  contact.save();
  res.json({ message: "Contact Information updated successfully" });
});

app.post("/addrecipe", authenticateJwt, (req, res) => {
  const { recipeName, ingredients, preperation, image, category } = req.body;
  const recipeData = {
    recipeName: recipeName,
    ingredients: ingredients,
    preperation: preperation,
    image: image,
    category: category,
    publishedBy: req.user.username,
  };
  const newRecipe = new Recipes(recipeData);
  newRecipe.save();
  res.json({ message: "Successfuly added a new recipe" });
});

app.get("/recipes", async (req, res) => {
  const recipes = await Recipes.find({});
  res.json(recipes);
});
app.get("/recipes/:recipeId", authenticateJwt, async (req, res) => {
  const recipeId = req.params.recipeId;
  const recipe = await Recipes.findById(recipeId);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(401).json({ message: "Recipe not found" });
  }
});
app.get(
  "/recipes/searchcategory/:category",
  authenticateJwt,
  async (req, res) => {
    const categoryname = req.params.category;
    const result = await Recipes.find({ category: { $in: [categoryname] } });
    if (result != "") {
      res.json({ message: "yes present", result });
    } else {
      res.status(401).json({ message: "Category not found" });
    }
  }
);
app.get("/searchrecipe/:searchinput",async (req,res)=>{
  const input=req.params.searchinput;
  const resultRecipe= await Recipes.findOne({recipeName:input});
  if(resultRecipe){
    res.json(resultRecipe)
  }
})

app.listen(3000, () => {
  console.log("App listening on port 3000 :)");
});